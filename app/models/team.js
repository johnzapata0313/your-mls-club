//Worked with Waskar Paulino on this
//Looked up on Claude what I needed to create my Schema for this projectß
// app/models/team.js
var mongoose = require('mongoose');

var teamSchema = mongoose.Schema({
    name: String,
    city: String,
    state: String,
    latitude: Number,
    longitude: Number,
    stadium: String,
    founded: Number,
    colors: [String]
});

module.exports = mongoose.model('Team', teamSchema);