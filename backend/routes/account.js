const express=require('express');
const getBalance = require('../controller/get_balance');
const transfer = require('../controller/transfer');
const router=express.Router();
const app=express();
const authMiddleware=require('../middleware/userLoginCheck');
router.get('/balance/:userId',authMiddleware,getBalance);
router.post('/transfer',authMiddleware,transfer);



module.exports=router;