const express = require('express')
const bodyParser = require('body-parser')

const result = require('dotenv').config()
if (result.error) {
    throw result.error
}

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_DB_URI,
{ useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to MongoDB !'))
    .catch(() => console.log('Failed connecting to MongoDB'));

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use(bodyParser.json());

const userRoutes = require('./routes/user')
const farmRoutes = require('./routes/cryptoFarm')

app.use('/api/auth', userRoutes)
app.use('/api/farm', farmRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'))
    app.get(/.*/, (req, res) =>res.sendFile(__dirname + '/public/index.html'))
}
module.exports = app;