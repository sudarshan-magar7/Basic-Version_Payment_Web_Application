const mongoose = require('mongoose');
const Account = require('../config/db');

const transferFunds = async (fromAccountId, toAccountId, amount) => {

	  await Account.findByIdAndUpdate(fromAccountId, { $inc: { balance: -amount } });

    await Account.findByIdAndUpdate(toAccountId, { $inc: { balance: amount } });
}