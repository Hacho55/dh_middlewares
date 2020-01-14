// ************ Require's ************
const express = require('express');
const router = express.Router();
const adminCheck = require('../middlewares/adminCheck')

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/registro', mainController.registro);
router.get('/otraRuta', mainController.otraRuta);
router.get('/admin', adminCheck, mainController.admin);

module.exports = router;
