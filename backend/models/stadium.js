const mongoose = require("mongoose");
const stadiumSchema = mongoose.Schema({
  name: String,
  country: String,
  capacity: Number,
  team:{
    type : mongoose.Schema.Types.ObjectId ,
    ref : "Team"
  }
});
const stadium = mongoose.model("Stadium", stadiumSchema);
module.exports = stadium;
