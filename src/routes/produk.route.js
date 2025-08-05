const express = require('express');

const produkController = require ("../controllers/produk.controllers.js")

const router = express.Router();

router.post('/', produkController.create);
router.get('/', produkController.getAll);
router.get('/:kelas_id', produkController.getProdukById);
router.delete('/:kelas_id', produkController.deleteById);
router.put('/:kelas_id', produkController.updateById);


module.exports = router;