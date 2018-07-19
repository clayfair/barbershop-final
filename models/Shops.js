
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ShopDescriptionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  }
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
//   note: {
//     type: Schema.Types.ObjectId,
//     ref: "Note"
//   }
});

// This creates our model from the above schema, using mongoose's model method
var Shops = mongoose.model("Shops", ShopDescriptionSchema);

// Export the Article model
module.exports = Shops;
