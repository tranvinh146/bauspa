// validate form data
exports.validateForm = (err) => {
  console.log(err.message, err.code);
  let errors = new Object();

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'Tên đăng nhập không đúng';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'Mật khẩu không đúng';
  }

  // duplicate error code
  if (err.code === 11000) {
    errors.name = 'Tên đăng nhập đã tồn tại';
  }

  // error auth_code
  if (err.message === 'invalid auth_code') {
    errors.code = 'Mã xác thực không đúng';
  }

  // validation errors
  if (err.message.includes('validation failed')) {
    Object.values(err.errors).forEach(({properties}) => {
      errors[properties.path] = properties.message; 
    });
  }

  return errors;
}