const mongoose = require('../../../services/mongoose');
const { v4: uuidv4 } = require('uuid');

// Define the Client schema
const ClientSchema = new mongoose.Schema({
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
  whatsAppNumber: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
  aadhaarNumber: {
    type: Number
  },
  pickupLocation: {
    type: String
  },
  dropLocation: {
    type: String
  },
  itinerary: {
    type: String
  },
  packageCost: {
    type: Number
  },
  numberOfPersons: {
    type: Number
  }
}); // Disable automatic _id generation

// Create the Client model based on the schema
const Client = mongoose.model('Client', ClientSchema, 'clients');

module.exports = Client;
