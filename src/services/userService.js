const userRepository = require('../repositories/userRepository');

class UserService {
  async createUser(userData) {
    // Aqui poderiam entrar validações de negócio
    return await userRepository.create(userData);
  }

  async getAllUsers() {
    return await userRepository.findAll();
  }

  async getUserById(id) {
    return await userRepository.findById(id);
  }

  async updateUser(id, userData) {
    return await userRepository.update(id, userData);
  }

  async deleteUser(id) {
    return await userRepository.delete(id);
  }
}

module.exports = new UserService();
