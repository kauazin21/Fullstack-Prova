const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/app_db';

const initMongo = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error.message);
  }
};

module.exports = { mongoose, initMongo };
