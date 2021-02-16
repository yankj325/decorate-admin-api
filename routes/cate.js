var express = require('express');
var router = express.Router();




const CateController=require('../controllers/cate');


router.get('/', CateController.list);
router.get('/:id', CateController.info);
router.post('/', CateController.add);
router.put('/', CateController.update);
router.delete('/', CateController.remove);


module.exports = router;