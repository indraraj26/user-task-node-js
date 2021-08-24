const User = require('./user.model');

exports.createUser = async (req, res) => {
    const isExist = await User.findOne({email: req.body.email})
    if(isExist) {
        return res.json({result: false, message: 'User already exist'})
    }
    const user = new User(req.body);
    await user.save();
    res.json({result: true, ...user});
}

exports.getAllUser = async (req, res) => {
     res.json({result: true, list: await User.find()});
}

exports.deleteUser = async(req, res) => {
    const user = await User.deleteOne({_id: req.query.id})
    if(user) {
        return res.json({result: true, message: 'user deleted successfully'})
    }
    res.json({result: true, message: 'user already deleted successfully'})
}

exports.loginUser = async(req, res) => {
    const user = await User.findOne({email: req.body.email})
    if(!user) {
        return res.json({result: false, message: 'User is not exist'})
    }
    if(user.password != req.body.password) {
        return res.json({result: false, message: 'Password is wrong'})
    }
    const token = User.generateToken({_id: user._id})
    res.json({result: true, token})
}