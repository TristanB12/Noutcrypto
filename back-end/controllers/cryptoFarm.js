const CryptoFarm = require('../models/CryptoFarm');

module.exports = {
    createFarm(req, res) {
        const farm = new CryptoFarm({...req.body})
        farm.save()
            .then(() => res.status(201).json({ message: 'Successfully created farm.' }))
            .catch(err => res.status(400).json(err))
    },

    modifyFarm(req, res) {
        CryptoFarm.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Successfully modified farm.'}))
            .catch(err => res.status(400).json(err));
    },

    deleteFarm(req, res) {
        CryptoFarm.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Successfully deleted farm.'}))
            .catch(err => res.status(400).json(err));
    },

    getFarm(req, res) {
        CryptoFarm.findOne({_id: req.params.id})
            .then(farm => res.status(200).json(farm))
            .catch(err => res.status(404).json(err))
    },

    getAllFarms(req, res) {
        CryptoFarm.find()
            .then(farms => res.status(200).json(farms))
            .catch(err => res.status(400).json(err))
    }
}