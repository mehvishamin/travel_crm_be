const Hotels = require("../models/mongoose");
const Price = require("../../../src/price/models/mongoose");

const addHotels = async (req, res) => {
    try {
        // Extract hotel and price data from the request body
        const { name, address, location, hotelCategory, whatsAppNumber, phoneNumber, price } = req.body;

        // Step 1: Save the Price data first
        const priceModel = new Price(price);
        const savedPrice = await priceModel.save();

        // Step 2: Create the Hotel data, linking the saved Price's ObjectId
        const hotelData = {
            name,
            address,
            location,
            hotelCategory,
            whatsAppNumber,
            phoneNumber,
            price: savedPrice._id  // Reference the saved Price's ObjectId
        };

        const hotelModel = new Hotels(hotelData);
        const savedHotel = await hotelModel.save();

        // Step 3: Send the saved hotel data along with populated price details
        const hotelWithPrice = await Hotels.findById(savedHotel._id).populate('price');

        res.status(200).json(hotelWithPrice);
    } catch (error) {
        res.status(500).send(`Error creating hotel: ${error.message}`);
    }
};




async function getAllHotels(req, res) {
    try {
        const response = await Hotels.find().populate("price");
        res.status(200).send(response)

    } catch (error) {
        throw new Error(`Error fetching hotels: ${error.message}`);
    }
}

const updateHotel = async (req, res) => {
    try {
        const { id } = req.params; // Retrieve the hotel ID from the URL
        const { name, address, location, hotelCategory, whatsAppNumber, phoneNumber, price } = req.body;

        // Step 1: Find the Hotel by ID
        const hotel = await Hotels.findById(id);


        if (!hotel) {
            return res.status(404).send("Hotel not found");
        }
        // Step 2: Update Hotel Details
        hotel.name = name || hotel.name;
        hotel.address = address || hotel.address;
        hotel.location = location || hotel.location;
        hotel.hotelCategory = hotelCategory || hotel.hotelCategory;
        hotel.whatsAppNumber = whatsAppNumber || hotel.whatsAppNumber;
        hotel.phoneNumber = phoneNumber || hotel.phoneNumber;

        // Step 3: Update Associated Price Document
        if (price) {
            const priceDoc = await Price.findById(hotel.price);
            if (priceDoc) {
                priceDoc.mapPrice = price.mapPrice || priceDoc.mapPrice;
                priceDoc.cpPrice = price.cpPrice || priceDoc.cpPrice;
                priceDoc.apPrice = price.apPrice || priceDoc.apPrice;
                priceDoc.extraBedPrice = price.extraBedPrice || priceDoc.extraBedPrice;
                priceDoc.cnbPrice = price.cnbPrice || priceDoc.cnbPrice;
                await priceDoc.save();
            }
        }

        // Step 4: Save the Updated Hotel Document
        const updatedHotel = await hotel.save();

        // Step 5: Populate and Send the Updated Hotel Data with Price
        const hotelWithPrice = await Hotels.findById(updatedHotel._id).populate('price');
        res.status(200).json(hotelWithPrice);
    } catch (error) {
        res.status(500).send(`Error updating hotel: ${error.message}`);
    }
};

const deleteHotel = async (req, res) => {
    try {
        const { id } = req.params; // Retrieve the hotel ID from the URL

        // Step 1: Find the Hotel by ID
        const hotel = await Hotels.findById(id);
        if (!hotel) {
            return res.status(404).send("Hotel not found");
        }

        // Step 2: Delete the Associated Price Document
        if (hotel.price) {
            await Price.findByIdAndDelete(hotel.price);
        }

        // Step 3: Delete the Hotel Document
        await hotel.deleteOne();

        res.status(200).send("Hotel and associated price data deleted successfully");
    } catch (error) {
        res.status(500).send(`Error deleting hotel: ${error.message}`);
    }
};


module.exports = { getAllHotels, addHotels, updateHotel, deleteHotel }
