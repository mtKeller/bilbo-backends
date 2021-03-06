var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// With our new Schema class, we instantiate an ExampleSchema object
// This is where we decide how our data must look before we accept it in the server, and how to format it in mongoDB
var WordSchema = new Schema({
  // string must be a string. We "trim" it to remove any trailing white space
  // Notice that it is required, as well. It must be entered or else mongoose will throw an error
	word: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  word_strength: {
    type: Number,
    unique: false,
		trim: true,
    required: false
	  },
	word_associations:{
		type: String,
		trim: true,
		required: false
	}
});

var Word = mongoose.model("Word", WordSchema);

module.exports = Word;