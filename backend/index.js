const express = require("express");
const app = express();
const cors=require('cors')
app.use(cors())
app.use(express.json());
const db=require('../backend/config/db')
const userRoutes=require('../backend/routes/userRoutes')
const port=8081;

app.use('/v1/api',userRoutes);

app.get('/',(req,res)=>{
    try{
        res.status(200).send({
            msg:'data'
        })
        
    }catch(error){
        res.status(500).send({
            success:false,
            msg:'Server Problem...',
            Errorrror:error
        })
    }
})

app.listen(port,()=>{
    console.log('Server Running On ',port);
})