var express = require('express');
var router = express.Router();




const AdminController=require('../controllers/admin');


router.get('/', AdminController.list);
router.get('/:id', AdminController.info);
router.post('/', AdminController.add);
router.put('/', AdminController.update);
router.delete('/', AdminController.remove);


module.exports = router;