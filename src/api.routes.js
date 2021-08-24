const router = require('express').Router();
const {verifyJwt} = require('./middleware/auth.check')
const userRoutes = require('./user/user.routes');
const taskRoutes = require('./task/task.routes');

router.use(userRoutes);
router.use(verifyJwt, taskRoutes);

module.exports = router;