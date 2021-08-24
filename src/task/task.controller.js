const Task = require('./task.model');

exports.getAllTaskByUserId = async (req, res) => {
    const task = await Task.find({user_id: req.params.userId})
    res.json({result: true, list: task})
}

exports.createTask = async (req, res) => {
    const task = new Task({...req.body, user_id: req.user._id});
    await task.save();
    res.json({result: true, message: 'task created successfully'});
}

exports.getAllTask = async (req, res) => {
    res.json({result: true, list: await Task.find()})
}

exports.deleteTaskById = async(req, res) => {
    await Task.deleteOne({_id: req.query.id})
    res.json({result: true, message: 'task deleted successfully'});
}