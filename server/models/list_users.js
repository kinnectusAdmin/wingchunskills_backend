const User = require('./User');

const users = User.findAll();

process.stdout.write(users);
