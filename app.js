
const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000); // creates and listens to new server

console.log('listening for changes')
