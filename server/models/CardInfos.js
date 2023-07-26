const mongoose = require("mongoose");

const CardDetailsScehma = mongoose.Schema(
  {
    image : String,
    category : String,
    description : String,
    type : String,
  },
  {
    collection: "Cards",
  }
);

module.exports = mongoose.model("Cards", CardDetailsScehma);