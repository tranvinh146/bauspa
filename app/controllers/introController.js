const Intro = require("../models/intro");

// module.exports = class IntroController {
//   static async getIntro(req, res, next) {
//     try {
//       const introList1 = await Intro.find({ order: { $lt: 7 } });
//       const introList2 = await Intro.find({ order: { $gt: 6 } });
//       res.status(200).render("intro", {
//         title:
//           "Vì sao nên sử dụng dịch vụ chăm sóc mẹ và bé chuyên nghiệp? - Bầu Spa",
//         introList1,
//         introList2,
//       });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   }

//   static async createIntro(req, res, next) {
//     // try {
//     //   const createResponse = await Intro.create({
//     //     title: req.body.title,
//     //     image: req.body.image,
//     //     content: req.body.content,
//     //     order: req.body.order,
//     //   });
//     //   res.status(200).json({ intro: createResponse });
//     // } catch (error) {
//     //   res.status(500).json({ error: error.message });
//     // }
//   }
// };

exports.getIntro = async function (req, res, next) {
  try {
    const introList1 = await Intro.find({ order: { $lt: 7 } });
    const introList2 = await Intro.find({ order: { $gt: 6 } });
    res.status(200).render("intro", {
      title: "Vì sao nên sử dụng dịch vụ chăm sóc mẹ và bé? - Bầu Spa",
      introList1,
      introList2,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
