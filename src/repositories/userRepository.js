const { pool } = require('../config/mysql');

class UserRepository {
  async create(userData) {
    const { name, email } = userData;
    const [result] = await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    return { id: result.insertId, ...userData };
  }

  async findAll() {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  async update(id, userData) {
    const { name, email } = userData;
    await pool.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    return { id, ...userData };
  }

  async delete(id) {
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
    return { id };
  }
}

module.exports = new UserRepository();
