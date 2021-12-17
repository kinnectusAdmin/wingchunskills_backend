const User = require('./User');

const users = await User.findAll();

process.stdout.write(users);
