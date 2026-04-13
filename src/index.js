const express = require('express');
const { initMySQL } = require('./config/mysql');
const { initMongo } = require('./config/mongo');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Inicializar bancos de dados
const startApp = async () => {
  await initMySQL();
  await initMongo();

  // Rotas
  app.use('/api', routes);

  app.get('/', (req, res) => {
    res.json({ message: 'API Dual DB (MySQL & MongoDB) rodando!' });
  });

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
};

startApp();
