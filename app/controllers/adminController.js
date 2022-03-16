const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const { validateForm } = require('../helpers/validateForm');
const admin = require('../models/admin');

const maxAge = 3600; // 1 hour

// [GET] register admin
exports.admin_register_get = function (req, res) {
  res.render('admin/admin_form', { title: 'Tạo quản trị viên', form: 'Đăng kí' });
}

// [POST] register admin
exports.admin_register_post = async (req, res, next) => {

  const { name, password } = req.body;

  try {
    if (req.body.code.toString() !== process.env.AUTH_CODE.toString()) {
      throw Error('invalid auth_code');
    };
    const result = await Admin.create({ name, password });
    const token = jwt.sign({ id: result._id }, process.env.SECRET_TOKEN, {expiresIn: maxAge});
    res.cookie('auth-token', token, { httpOnly: true, secure: true, maxAge: maxAge * 1000})
    res.status(201).redirect('/');
  } catch (err) {
    const errors = validateForm(err);
    res.status(400).render('admin/admin_form', { 
      title: 'Tạo quản trị viên', 
      form: 'Đăng kí', 
      name: name,
      password: password,
      code: req.body.code,
      errors: errors
    })
  }

}

// [GET] login admin
exports.admin_login_get = function (req, res) {
  res.render('admin/admin_form', { title: 'Đăng nhập Quản trị viên', form: 'Đăng nhập' });
}

// [GET] login admin
exports.admin_login_post = async (req, res, next) => {
  
  const { name, password } = req.body;

  try {
    const result = await Admin.login(name, password);
    const token = jwt.sign({ id: result._id }, process.env.SECRET_TOKEN, {expiresIn: maxAge});
    console.log(token)
    res.cookie('auth-token', token, { httpOnly: true, secure: true, maxAge: maxAge * 1000});
    res.status(200).redirect('/');
  } catch (err) {
    const errors = validateForm(err);
    res.status(400).render('admin/admin_form', { 
      title: 'Đăng nhập Quản trị viên', 
      form: 'Đăng nhập',
      name: name,
      password: password, 
      errors: errors
    })
  }

}

exports.admin_logout_get = (req, res) => {
  res.cookie('auth-token', '', { maxAge: 1 });
  res.redirect('/');
}

exports.admin_dashboard = function (req, res, next) {
  res.render('admin/admin_dashboard');
}