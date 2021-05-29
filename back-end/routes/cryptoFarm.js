const express = require('express');
const router = express.Router();

const cryptoFarmController = require('../controllers/cryptoFarm')

router.get('/', cryptoFarmController.getAllFarms)
router.post('/', cryptoFarmController.createFarm)
router.get('/:id', cryptoFarmController.getFarm)
router.put('/:id', cryptoFarmController.modifyFarm)
router.delete('/:id', cryptoFarmController.deleteFarm)

module.exports = router;
