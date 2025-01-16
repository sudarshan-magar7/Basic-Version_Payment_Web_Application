const express = require('express');
const app=express();
const router = express.Router();
const { User} = require('../config/db');
const UserSighIn=require('../controller/sign_in');
const UserSignUP=require('../controller/sign_up');

router.post('/login',UserSighIn);
router.post('/create',UserSignUP);

module.exports=router;



