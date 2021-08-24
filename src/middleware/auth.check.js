const jwt = require('jsonwebtoken');
const User = require('../user/user.model');

exports.verifyJwt = async (req, res, next) => {
    if(req.headers.hasOwnProperty('token')) {
        const isValidToken = jwt.verify(req.headers.token, 'AlongStory');
        if(isValidToken) {
            req.user = await User.findOne({_id: isValidToken._id});
            next()
        } else {
            return res.json({result: false, message: 'Invalid Token'})
        }
    } else {
       return res.json({result: false, message: 'Pass the token'})
    }
}
