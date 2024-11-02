const mongoose = require('../../../services/mongoose');
const { v4: uuidv4 } = require('uuid');


const HotelSchema = new mongoose.Schema({
    uuid: {
        type: String,
        default: uuidv4, // Auto-generate UUID on document creation
        unique: true,
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    location: {
        type: String
    },
    hotelCategory: {
        type: String
    },
    whatsAppNumber: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: Number,
    },
    price: {
        type: mongoose.Schema.Types.ObjectId, // Define it as an ObjectId
        ref: 'Price', // The name of the model it references
        required: true // Set to true if this field is required
    }



});
const Hotels = mongoose.model('Hotels', HotelSchema, 'hotels');

module.exports = Hotels;