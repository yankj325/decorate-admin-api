var express = require('express');
var router = express.Router();


const OrderController=require('../controllers/order');


router.get('/', OrderController.list);

router.put('/status', OrderController.updateStatus);



module.exports = router;