const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const connection=async ()=>{
    try{
        await mongoose.connect('mongodb+srv://magarsudarshan77:1ZbOtYE0Sn8dB5Fb@cluster0.derb2.mongodb.net/paytm');
        console.log("DataBase Connection Successfully...")
    }catch(error){
        console.log("DataBase Connection:",error)
    }
    
}
connection();
const userSchema= new mongoose.Schema({
    firstName:{ type: String, required: true },
    lastName:{ type: String, required: true },
    password:{ type: String, required: true }

  });

// Create Hash
userSchema.methods.createHash = async function (password_given) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password_given, salt);
};

// Validate Hash
userSchema.methods.validateHash = async function (password_given) {
    return await bcrypt.compare(password_given, this.password);
};

const User=mongoose.model('User',userSchema);
module.exports={
    User
}