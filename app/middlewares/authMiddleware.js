const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

exports.requireAuth = (req, res, next) => {
  const token = req.cookies['auth-token'];

  // check json web token exists & is verified
  if(token) {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/admin/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/admin/login');
  }
}

// check current user
exports.checkUser = (req, res, next) => {
  const token = req.cookies['auth-token'];

  if(token) {
    jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.name = null;
        next();
      } else {
        console.log(decodedToken);
        let result = await Admin.findById(decodedToken.id);
        res.locals.name = result.name;
        next();
      }
    });
  } else {
    res.locals.name = null;
    next();
  }
}