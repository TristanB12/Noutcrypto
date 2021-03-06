const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
    signup(req, res, next) {
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    balance: 0
                })
                user.save()
                    .then(() => res.status(201).json(user))
                    .catch(err => res.status(400).json({ err }))
            })
            .catch(err => res.status(500).json({ err }))
    },

    login(req, res, next) {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    return res.status(401).json({ error: 'User not found' })
                }
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid) {
                            return res.status(401).json({ error: 'Incorrect password' })
                        }
                        return res.status(200).json(user)
                    })
                    .catch(err => res.status(500).json({ err }))
            })
            .catch(err => res.status(500).json({ err }))
    }
}