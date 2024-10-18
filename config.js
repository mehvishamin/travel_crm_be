require('dotenv').config();

const config = {
  dbUrlMongoDB: process.env.dbUrlMongoDB,
};

module.exports = config;