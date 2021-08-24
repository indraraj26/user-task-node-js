const router = require('express').Router();
const {createTask, getAllTask, deleteTaskById, getAllTaskByUserId} = require('./task.controller');

router.route('/task').post(createTask).get(getAllTask).delete(deleteTaskById)
router.get('/task/:userId', getAllTaskByUserId);

module.exports = router;