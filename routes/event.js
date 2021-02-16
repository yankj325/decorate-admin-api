var express = require('express');
var router = express.Router();



const EventController=require('../controllers/event');


router.get('/', EventController.list);
router.get('/:id', EventController.info);
router.post('/', EventController.add);
router.put('/', EventController.update);
router.delete('/', EventController.remove);


module.exports = router;
