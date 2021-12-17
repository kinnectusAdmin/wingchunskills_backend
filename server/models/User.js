const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}

User.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    resetPasswordToken: {
      type: Sequelize.STRING
    },
    resetPasswordExpires: {
      type: Sequelize.DATE
    }
  },
  {
    sequelize,
    modelName: 'User'
  }
);
console.log(User === sequelize.models.User)
sequelize.sync();
module.exports = User;
