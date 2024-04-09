const express = require('express');
const router = express.Router();

const skillsCtrl = require('../controllers/skills');

// ! ALL paths start with "/skills"
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', skillsCtrl.index);

module.exports = router;
