const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'user',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'app_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const initMySQL = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('MySQL conectado com sucesso!');
    
    // Criar tabela de usuários se não existir
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    connection.release();
  } catch (error) {
    console.error('Erro ao conectar no MySQL:', error.message);
  }
};

module.exports = { pool, initMySQL };
