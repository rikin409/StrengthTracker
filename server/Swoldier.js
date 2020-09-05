const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SwoldierSchema = new Schema({
    name: String,
    maxBench: Number,
    maxSquat: Number,
    maxDeadlift: Number
});

module.exports = Swoldier = mongoose.model('swoldier', SwoldierSchema);