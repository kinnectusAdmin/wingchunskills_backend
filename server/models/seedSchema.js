const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
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
}, {
  // Other model options go here
});

await sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User)
