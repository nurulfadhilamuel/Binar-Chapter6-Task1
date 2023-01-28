const bcrypt = require("bcrypt");

const userRepository = require("../repositories/userRepository");

module.exports = {
  create(requestBody) {
    return userRepository.create(requestBody);
  },

  update(id, requestBody) {
    return userRepository.update(id, requestBody);
  },

  delete(id) {
    return userRepository.delete(id);
  },

  async list() {
    try {
      const posts = await userRepository.findAll();
      const postCount = await userRepository.getTotalUser();

      return {
        data: posts,
        count: postCount,
      };
    } catch (err) {
      throw err;
    }
  },

  get(id) {
    return userRepository.find(id);
  },

  async register(requestBody) {
    console.log("ini services");

    const hash = bcrypt.hashSync(requestBody.password, 10);
    const { firstName, lastName, email } = requestBody;
    const reqBody = {
      firstName,
      lastName,
      email,
      password: hash,
    };
    const checkUser = await userRepository.checkUser(email);
    if (checkUser) {
      throw new Error(`user with email ${email} already taken`);
    }

    return userRepository.registerNewUser(reqBody);
  },

  async login(requestBody) {
    const checkUser = await userRepository.checkUser(requestBody.email);
    if (!checkUser) {
      console.log("ini" + checkUser);
      throw new Error(`email ${requestBody.email} not register`);
    }
    return checkUser;
  },
};
