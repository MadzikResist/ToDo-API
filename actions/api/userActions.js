const User = require('../../db/models/user');
const jwt = require('jsonwebtoken')

module.exports = {
    async registerUser(req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            let user;
            user = await User.create({email, password});
            const token = jwt.sign({
                _id: user._id
            }, 'secret123')
            res.json({status: 'ok', user: token})
        } catch (error){
            console.log(error);
            res.status(500).send({message:'Incorrect e-mail or password'})
        }
    },
    async loginUser(req, res) {
        try{
            const user = await User.findOne({email:req.body.email});
                const token = jwt.sign({
                    _id: user._id
                }, 'secret123')
                res.json({status: 'ok', user: token})
        }catch (error){
            res.status(500).send({message:'Incorrect e-mail or password', user: false})
        }

    },

}