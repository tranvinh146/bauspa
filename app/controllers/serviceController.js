const async = require("async");
const Service = require("../models/service");
const Category = require("../models/category");

const validateForm = (err) => {
  console.log(err.message, err.code);
  let errors = new Object();

  // handle empty category.
  if (err.message === "an empty category") {
    errors.category = "Vui lòng chọn ít nhất một ô.";
  }

  // validate creating service errors.
  if (err.message.includes("Service validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// Display all Services.
exports.service_home = function (req, res, next) {
  async.parallel(
    {
      services: function (callback) {
        Service.find().exec(callback);
      },
      categories: function (callback) {
        Category.find().exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      } // Error in API usage.
      // Successful, so render
      res.render("service/service_home", {
        title: "Dịch vụ tại Bầu Spa",
        service_list: results.services,
        category_list: results.categories,
      });
    }
  );
};

// Show detail service
exports.service_detail = function (req, res, next) {
  Service.findOne({ slug: req.params.slug }, (err, result) => {
    if (err) return next(err);
    // Successful, so render detail
    res.status(200).render("service/service_detail", {
      title: result.name,
      service: result,
    });
  });
};

// Display service create form on GET
exports.service_create_get = function (req, res, next) {
  Category.find((err, categories) => {
    if (err) return next(err);
    res.render("service/service_form", {
      title: "Tạo dịch vụ mới",
      category_list: categories,
    });
  });
};

// Handle service create on POST
exports.service_create_post = [
  // Convert the category to an array.
  (req, res, next) => {
    if (!(req.body.category instanceof Array)) {
      if (typeof req.body.category === "undefined") req.body.category = [];
      else req.body.category = new Array(req.body.category);
    }
    next();
  },

  async (req, res) => {
    const service = new Service({
      name: req.body.name,
      image: req.file.filename,
      detail: req.body.detail,
      category: req.body.category,
    });

    try {
      const result = await Service.create(service);
      res.redirect(result.url);
    } catch (err) {
      const errors = validateForm(err);
      const categories = await Category.find();
      for (let i = 0; i < categories.length; i++) {
        if (service.category.indexOf(categories[i]._id) > -1) {
          categories[i].checked = "true";
        }
      }
      res.status(400).render("service/service_form", {
        title: "Tạo dịch vụ mới",
        service: service,
        category_list: categories,
        errors: errors,
      });
    }
  },
];

// update service
exports.service_update_put = (req, res, next) => {
  try {
    let serviceId = req.params.id;
  } catch (e) {
    console.error(`${e}`);
  }
};
