const mongoose = require('mongoose');
const config = require('../config');

const dbUrl = config.dbUrlMongoDB;

// Connect to MongoDB
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
