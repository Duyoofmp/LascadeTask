const express = require('express');
const { uploadCSV } = require('../controllers/csvController');
const protect = require('../middlewares/authMiddleware');
const upload =  require('../middlewares/uploadMiddleware');
const router = express.Router();


router.post('/upload', protect, upload.single('file'), uploadCSV);

module.exports = router;
