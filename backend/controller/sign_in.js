const { User } = require('../config/db.js');
const jwt = require('jsonwebtoken');
const jwtKey = 'thisIsMySecretKey';

const UserSighIn = async (req, res) => {
    try {
        const { firstName, password } = req.body;
        if (!firstName && !password) {
            return res.status(404).send({
                success: false,
                msg: 'Please Provide Valid Name And Password....'
            })
        }


        const UserLog = User.where({
            firstName: firstName
        });

        const UserFind = await UserLog.findOne();
        if (UserFind) {
        
            const token = jwt.sign(firstName, jwtKey);
            res.status(200).send({
                success: true,
                msg: 'User Login Successfully',
                Token: token,
            })
        } else {
            res.send({
                success: false,
                msg: 'User Crendtial are wrong'
            })
        }




    } catch (error) {
        res.status(500).send({
            success: false,
            msg: 'Server Problem...',
            Error:error
        })
    }
}


module.exports=UserSighIn;