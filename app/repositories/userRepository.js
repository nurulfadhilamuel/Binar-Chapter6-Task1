const { User } = require("../models");

module.exports = {
  create(createArgs) {
    return User.create(createArgs);
  },

  update(id, updateArgs) {
    return User.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return User.destroy({
      where: {
        id,
      },
    });
  },

  find(id) {
    return User.findByPk(id);
  },

  findAll() {
    return User.findAll();
  },

  getTotalUser() {
    return User.count();
  },
  // check user
  async checkUser(email) {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    return user;
  },
  // register
  registerNewUser(createArgs) {
    return User.create(createArgs);
  },
};

