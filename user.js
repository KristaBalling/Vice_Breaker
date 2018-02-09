const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: { type: String },
    password:{ type: String },
    goalCounter: [ { type: Schema.Types.ObjectId, ref: 'goalCounter' } ]
});

module.exports = mongoose.model('User', userSchema);