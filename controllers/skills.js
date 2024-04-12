
// REQUIRE from MODELS
const Skill = require('../models/skill')

// EXPORT TO BE REFERENECED
module.exports = {
    index,
    show,
    new: newSkill,
    create,
};

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');

};

function newSkill(req, res){
    res.render('skills/new', { title : 'New Skill'});
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