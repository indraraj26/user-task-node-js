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

// {{url}}/user?page=1&limit=10
exports.getAllUser = async (req, res) => {
    const page = req.query.page == 1 ? 0 : req.query.page - 1;
    const skip = Math.max(0, page);
    const limit = +req.query.limit;
    const total = await User.find().countDocuments();
    res.json({result: true, total, list: await User.find().limit(limit).skip(skip * limit)});
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