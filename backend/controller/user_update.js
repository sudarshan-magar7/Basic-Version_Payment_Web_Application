const { User } = require('../config/db.js');
const createHash=require('../config/db.js')
const UserUpdate = async (req, res) => {
  try {
    const { firstName, lastName, mail, password } = req.body;

    if (!mail || (!firstName && !lastName && !password)) {
      return res.status(400).send({
        success: false,
        msg: 'Please provide valid information.',
      });
    }

    const userRecord = await User.findOne({ email: mail });

    if (!userRecord) {
      return res.status(404).send({
        success: false,
        msg: 'User not found or information is incorrect.',
      });
    }
    let hashedPassword = userRecord.password; // Default to the current password
    if (password) {
      hashedPassword = await userRecord.createHash(password);
    }
    const updatedUser = await User.updateOne(
      { email: mail },
      {
        firstName: firstName,
        lastName: lastName,
        password: hashedPassword
      }
    );

    return res.status(200).send({
      success: true,
      msg: 'User updated successfully.',
      User: updatedUser.modifiedCount,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: 'Server error.',
      error: error.message,
    });
  }
};

module.exports = UserUpdate;
