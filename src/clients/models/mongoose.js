const mongoose = require('../../../services/mongoose');

// Define the User schema
const ClientSchema = new mongoose.Schema({
    clientId: {
    type: Number,
    required: true,
    unique: true,
  },
  name:{
    type:String
   },
  address:{
    type:String
   },
  whatsAppNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
  },
  aadhaarNumber:{
    type:Number
  },
  pickupLocation:{
   type:String
  },
  dropLocation:{
    type:String
   },
  itinerary:{
    type:String
  },
  packageCost:{
    type:Number
  },
  numberOfPersons:{
    type:Number
  }


});

// Create the User model based on the schema
const Client = mongoose.model('Client', ClientSchema, 'clients');

module.exports = {
  Client,
};
