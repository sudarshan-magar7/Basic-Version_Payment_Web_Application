const express = require('express');
const app=express();
const router = express.Router();
const { User} = require('../config/db');
const UserSighIn=require('../controller/sign_in');
const UserSignUP=require('../controller/sign_up');
const UserUpdate=require('../controller/user_update');
const getUsers=require('../controller/get_users')
const authMiddleware=require('../middleware/userLoginCheck')

router.post('/login',UserSighIn);
router.post('/create',UserSignUP);
// router.put('/update',UserUpdate);
// router.get('/user/bulk',getUsers);
router.put('/update',authMiddleware,UserUpdate);
router.get('/user/bulk',authMiddleware,getUsers);



module.exports=router;



