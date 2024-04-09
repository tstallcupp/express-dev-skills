
// REQUIRE from MODELS
const Skill = require('../models/skill')

// EXPORT TO BE REFERENECED
module.exports = {
    index,
    // show
};

// Create show function to grab one id
// function show(req, res) {
//     res.render('skills/show', {
//         skill: Skill.get
//     })
// }

// Find index
function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}