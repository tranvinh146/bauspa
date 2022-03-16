var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema(
  {
    name: { type: String, required: true },
  }
);

// Export model
module.exports = mongoose.model('Category', CategorySchema);