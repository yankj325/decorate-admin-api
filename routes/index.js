var express = require('express');
var router = express.Router();

const multer=require('multer');
const uploadMiddleware=multer();

const IndexController=require('../controllers/index');

const verifyMiddleware=require('../routes/middleware/verify');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', IndexController.login);
router.post('/upload',verifyMiddleware.verifyToken, uploadMiddleware.single('img'),IndexController.upload);


module.exports = router;
