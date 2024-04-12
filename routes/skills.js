const express = require('express');
const router = express.Router();

const skillsCtrl = require('../controllers/skills');


// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);

// GET /skills/:id (SHOW functionality/action -> display the detail of a single todo)
router.get('/:id', skillsCtrl.show);
// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);

// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);

// PUT /skills/:id
router.put('/:id', skillsCtrl.update);


module.exports = router;
