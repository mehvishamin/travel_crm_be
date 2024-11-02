const express = require("express")
const router = express.Router();
const hotelController = require("./controllers/index.js")

router.get('/hotels', (req, res) => { hotelController.getAllHotels(req, res) });
router.post('/save-hotels', (req, res) => { hotelController.addHotels(req, res) });
router.put('/update-hotels/:id', (req, res) => { hotelController.updateHotel(req, res) });
router.delete('/delete-hotels/:id', (req, res) => { hotelController.deleteHotel(req, res) });

module.exports = router