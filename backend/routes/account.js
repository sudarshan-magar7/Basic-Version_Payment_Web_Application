const express=require('express');
const getBalance = require('../controller/get_balance'); // Correct import
const transfer = require('../controller/transfer');
const router=express.Router();
const authMiddleware = require('../middleware/userLoginCheck'); // Correct import

// router.get('/balance/:userId',getBalance);
// router.post('/transfer',transfer);
router.get('/balance/:userId',authMiddleware, getBalance);
router.post('/transfer',authMiddleware,transfer);



module.exports=router;