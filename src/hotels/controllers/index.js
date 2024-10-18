const Hotels = require("../models/mongoose");

const addHotels = async (req, res) => {
    try {
        const hotelsData = req.body;
        const hotelModal = new Hotels(hotelsData);
        const savedHotel = await hotelModal.save();
        res.status(200).send(savedHotel);
    } catch (error) {
        res.status(500).send(`Error creating hotel: ${error.message}`);
    }
};



async function getAllHotels() {
    try {
        return await Hotels.find();
    } catch (error) {
        throw new Error(`Error fetching hotels: ${error.message}`);
    }
}

const updateHotels = (req, res) => {
    const { clients } = req.body
    const { id } = req.params
    res.send(
        {
            data: clients,
            message: `this ${id} is Updated succesfully`

        })
}
const deleteClients = (req, res) => {
    const { id } = req.params
    res.send(`This ${id} is deleted successfully`)
}

module.exports = { getAllClients, addClients, updateClients, deleteClients }
