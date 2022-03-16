const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const AdminSchema = new Schema(
  {
    name: { 
      type: String, 
      unique: true,
      required: [true, 'Vui lòng nhập tên đăng nhập'] 
    },
    password: { 
      type: String, 
      required: [true, 'Vui lòng nhập mật khẩu'] 
    },
  }
)

AdminSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next()
})

AdminSchema.statics.login = async function(name, password) {
  const admin = await this.findOne({name});
  if (admin) {
    const auth = await bcrypt.compare(password, admin.password);
    if (auth) { 
      return admin; 
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
}

// Export model
module.exports = mongoose.model('Admin', AdminSchema);