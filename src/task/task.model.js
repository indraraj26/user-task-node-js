const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})
module.exports = mongoose.model('task', taskSchema);