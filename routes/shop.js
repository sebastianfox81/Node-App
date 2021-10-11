const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'shop.html')) // path.join() detects the OS you are running and automatically constructs the path accordingly
})
module.exports = router