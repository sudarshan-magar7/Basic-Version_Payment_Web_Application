const express=require('express');
const app=express();
app.use(express.json());
const { User, Account } = require('../config/db');
const mongoose = require('mongoose');

const transfer = async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).send({
            msg: 'Insufficient Balance.'
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    console.log('Done');
    res.json({
        message: "Transfer successful"
    });
};

module.exports = transfer;

// transfer({
//     userId: "678c84c9a34536626c8cb42f",
//     body: {
//         to: "678c878434a65fa14fdd8c29",
//         amount: 100
//     }
// })


module.exports=transfer;