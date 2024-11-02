const mongoose = require('../../../services/mongoose');
const { v4: uuidv4 } = require('uuid');

const PriceSchema = new mongoose.Schema({
    uuid: {
        type: String,
        default: uuidv4, // Auto-generate UUID on document creation
        unique: true,
    },
    mapPrice: {
        type: Number
    },
    cpPrice: {
        type: Number
    },
    apPrice: {
        type: Number
    },
    extraBedPrice: {
        type: Number
    },
    cnbPrice: {
        type: Number

    }
});

const Price = mongoose.model('Price', PriceSchema, 'price');

module.exports = Price;