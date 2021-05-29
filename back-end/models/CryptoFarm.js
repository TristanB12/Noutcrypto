const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')

const cryptoFarmSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image_path: { type: String, required: true },
  funding: { type: Number, required: true },
  fundingGoal: { type: Number, required: true }
})

cryptoFarmSchema.plugin(uniqueValidator)

module.exports = mongoose.model('CryptoFarm', cryptoFarmSchema)