const { User, Account } = require('../config/db');

const getBalance = async (req, res) => {
    try {
        // Extract userId from URL parameters
        const userId = req.params.userId;

        // Check if userId exists
        if (!userId) {
            return res.status(400).json({
                success: false,
                msg: 'User ID is missing.',
            });
        }

        console.log('User ID:', userId); // Debug log

        // Find the account associated with the userId
        const account = await Account.findOne({ userId });

        if (!account) {
            return res.status(404).json({
                success: false,
                msg: 'Account not found.',
            });
        }

        // Send the balance
        res.json({
            success: true,
            balance: account.balance,
        });
    } catch (error) {
        console.error('Error fetching balance:', error);
        res.status(500).json({
            success: false,
            msg: 'Server error.',
            error: error.message,
        });
    }
};

module.exports = getBalance;
