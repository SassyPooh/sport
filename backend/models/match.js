// import module mongoose
const mongoose = require("mongoose");
// create schema for match model
const matchSchema = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String,
});
// create the name of the model
const match = mongoose.model("Match",matchSchema);
// export the match model
module.exports = match;