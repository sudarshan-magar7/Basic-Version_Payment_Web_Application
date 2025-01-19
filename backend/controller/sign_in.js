const { User } = require('../config/db.js');
const jwt = require('jsonwebtoken');
const jwtKey = 'thisIsMySecretKey';

const UserSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        msg: 'Please provide both email and password.',
      });
    }

    // Find user by email
    const userRecord = await User.findOne({ email });

    if (!userRecord) {
      return res.status(404).send({
        success: false,
        msg: 'User not found.',
      });
    }

    // Validate password using instance method
    const isValid = await userRecord.validateHash(password);

    if (!isValid) {
      return res.status(401).send({
        success: false,
        msg: 'Invalid password.',
      });
    }

    // Generate JWT token on successful validation
    const token = jwt.sign({ userId: userRecord._id }, jwtKey);

    return res.status(200).send({
      success: true,
      msg: 'User logged in successfully.',
      token,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: 'Server error.',
      error: error.message,
    });
  }
};

module.exports = UserSignIn;
