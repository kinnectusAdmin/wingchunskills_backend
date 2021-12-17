process.env.NODE_ENV != 'production' ? require('dotenv').config() : null;
const express = require('express');
const app = express();
const posts = require('./server/routes/posts');
const users = require('./server/routes/users');
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


const port = process.env.PORT || 3000;

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});
app.use('/posts', posts);

app.use('/users', users);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/404.html');
});


require('./server/database');

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
