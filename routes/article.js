var express = require('express');
var router = express.Router();




const ArticleController=require('../controllers/article');


router.get('/', ArticleController.list);
router.get('/:id', ArticleController.info);
router.post('/', ArticleController.add);
router.put('/', ArticleController.update);
router.delete('/', ArticleController.remove);


module.exports = router;