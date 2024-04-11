
// REQUIRE from MODELS
const Skill = require('../models/skill')

// EXPORT TO BE REFERENECED
module.exports = {
    index,
    show
};


// Create show() to find single id
function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'
    })
};

// Find index
function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'My Dev Skills'
    })
}