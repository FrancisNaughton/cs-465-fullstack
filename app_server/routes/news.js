var express = require('express');
var router = express.Router();
const controller = require('../controllers/news');

/*GET NEWS PAGE*/
router.get('/', controller.news);

module.exports = router;