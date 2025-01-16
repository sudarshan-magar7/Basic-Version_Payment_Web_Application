const {User}=require('../config/db.js')
const UserSignUP = async (req, res) => {
    try {
      const { firstName, lastName, password } = req.body;
  
      // Check for missing required fields
      if (!firstName || !lastName || !password) {
        return res.status(400).send({
          success: false,
          msg: 'Provided Info Are Wrong',
        });
      }
      const UserF=User.where({
        firstName:firstName,
        lastName:lastName,
      });
      const findUser=await UserF.findOne();

      if(findUser){
        return res.send({
            success:false,
            msg:'User Are Allready Exists..'
        })
      }
      // Create the user in the database
      const newUser = new User({
        firstName,
        lastName,
      });
  
      // Hash the password and assign it to the user
      const hashedPassword = await newUser.createHash(password);
      newUser.password = hashedPassword;
      await newUser.save();
      // Send success response
      res.status(200).send({
        success: true,
        msg: 'User Created Successfully...',
      });
    } catch (error) {
      // Log the error for debugging purposes
      console.error('Error during user sign-up:', error);
  
      // Send error response
      res.status(500).send({
        success: false,
        msg: 'Server Problem..',
        error: error.message, // Include the error message for more context
      });
    }
  };
  
  module.exports = UserSignUP;
  