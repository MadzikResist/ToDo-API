const User = require('../../db/models/user');
const jwt = require('jsonwebtoken')

module.exports = {
    async registerUser(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        let user;
        try {
            user = await User.create({email, password});
             res.json({status: 'ok'})
        } catch (err){
            console.log(err);
            res.json({status: 'error', error: 'Duplicate email'})
        }
    },
    async loginUser(req, res) {
            const user = await User.findOne({email:req.body.email, password:req.body.password});
            if(user){
                const token = jwt.sign({
                    email: req.body.email
                }, 'secret123')
                return res.json({status: 'ok', user: token})
            }
            else{
                return res.json({status:'error', user: false})
            }
    },

}