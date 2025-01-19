const {User}=require('../config/db')


const getUsers=async (req,res)=>{
    try{
        const filter = req.query.filter || "";

    const users = await User.find({
        $or: [
                {
                   firstName: { "$regex": filter }
                },
                {
                   lastName: { "$regex": filter }
                }
             ]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })

    }catch(error){
        res.status(500).send({
            success:false,
            msg:'Server Problem.',
            Error:error
        })
    }
}

module.exports=getUsers;