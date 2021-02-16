var express = require('express');
var router = express.Router();




const CaseController=require('../controllers/case');


router.get('/', CaseController.list);
router.get('/:id', CaseController.info);
router.post('/', CaseController.add);
router.put('/', CaseController.update);
router.delete('/', CaseController.remove);


module.exports = router;