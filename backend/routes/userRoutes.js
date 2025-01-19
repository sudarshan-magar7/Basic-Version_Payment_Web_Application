const express = require('express');
const app=express();
const router = express.Router();
const { User} = require('../config/db');
const UserSighIn=require('../controller/sign_in');
const UserSignUP=require('../controller/sign_up');
const UserUpdate=require('../controller/user_update');
const getUsers=require('../controller/get_users')
const account=require('../routes/account')

router.post('/login',UserSighIn);
router.post('/create',UserSignUP);
router.put('/update',UserUpdate);
router.get('/user/bulk',getUsers);
router.use("/account",account);


module.exports=router;



