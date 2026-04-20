const express = require('express');
const router = express.Router();

const controller = require('../controllers/paciente.controller');

router.get('/', controller.listar);
router.post('/', controller.criar);

module.exports = router;