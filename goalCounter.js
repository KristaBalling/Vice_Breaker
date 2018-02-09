const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const goalSchema = new mongoose.Schema({
    goal: { type: String, required: true, unique: true },
    count: {type: String, required: true},
    date: {String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const goalCounter = mongoose.model('goalCounter', goalSchema);

module.exports = goalCounter;