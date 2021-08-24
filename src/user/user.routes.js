const router = require('express').Router();
const { checkProtectKey } = require('../middleware/protect.check');

const { createUser, getAllUser, deleteUser, loginUser } = require('./user.controller');

router.route('/user').post(checkProtectKey,createUser).delete(checkProtectKey,deleteUser);

router.get('/user', getAllUser)
router.post('/login', loginUser);

module.exports = router;