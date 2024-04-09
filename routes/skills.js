const express = require('express');
const router = express.Router();

const skillsCtrl = require('../controllers/skills');

// ! ALL paths start with "/skills"
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', skillsCtrl.index);

// GET skills/:id (SHOW functionality/action -> display the detail of a single todo)
// * add to controller
router.get('/:id', skillsCtrl.show);


module.exports = router;
