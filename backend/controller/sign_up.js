const { User, Account } = require('../config/db.js');

const UserSignUP = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check for missing required fields
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).send({
                success: false,
                msg: 'Provided Info Are Wrong',
            });
        }

        // Check if the user already exists
        const findUser = await User.findOne({ email });

        if (findUser) {
            return res.send({
                success: false,
                msg: 'User Already Exists.',
            });
        }

        // Create the user in the database
        const newUser = new User({
            firstName,
            lastName,
            email,
        });

        // Hash the password and assign it to the user
        const hashedPassword = await newUser.createHash(password);
        newUser.password = hashedPassword;
        await newUser.save();

        const userId = newUser._id;

        // Create an account for the user
        const newAccount = new Account({
          userId,
          balance: 1 + Math.random() * 10000,
      });
        await newAccount.save();

        // Send success response
        res.status(200).send({
            success: true,
            msg: 'User Created Successfully.',
        });
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error during user sign-up:', error);

        // Send error response
        res.status(500).send({
            success: false,
            msg: 'Server Problem.',
            error: error.message, // Include the error message for more context
        });
    }
};

module.exports = UserSignUP;
