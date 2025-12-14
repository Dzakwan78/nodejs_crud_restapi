const router = require('express').Router();
const p = require('../controllers/productController');

router.post('/', p.create);
router.get('/', p.getAll);
router.get('/:id', p.getById);
router.put('/:id', p.update);
router.delete('/:id', p.delete);

module.exports = router;
