const mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
  {
    name: { 
      type: String, 
      required: [true, 'Vui lòng nhập tên dịch vụ'], 
      unique: true 
    },
    image: { 
      type: String, 
      required: [true, 'Vui lòng chọn ảnh dịch vụ'] 
    },
    detail: { type: String },
    category: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'Category', 
      required: true
    }],
    slug: { type: String, unique: true },
  }
)

ServiceSchema.virtual('imgUrl').get(function () {
  return '/images/services/' + this.image;
})

ServiceSchema.virtual('url').get(function () {
  return '/services/' + this.slug;
})

ServiceSchema.pre('save', function(next) {
  if(this.category.length === 0) {
    throw Error('an empty category');
  }
  this.slug = slugify(this.name, {
    lower: true,      
    locale: 'vi',       
  });
  next();
})

// Export model
module.exports = mongoose.model('Service', ServiceSchema);