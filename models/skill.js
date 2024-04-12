// Create skills array
const devSkills = [
    { 
      id: 1,
      name: 'HTML',
      description: 'Hypertext Markup Language for creating web pages.'
    },
    {
      id: 2,
      name: 'CSS',
      description: 'Cascading Style Sheets for styling web pages.'
    },
    {
      id: 3,
      name: 'JavaScript',
      description: 'A programming language used to create interactive effects within web browsers.'
    },
    {
      id: 4,
      name: 'Git',
      description: 'A version control system for tracking changes in source code during software development.'
    },
    {
      id: 5,
      name: 'GitHub',
      description: 'A web-based platform for version control using Git.'
    }
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,

  };

  function deleteOne(id) {
    id = parseInt(id);
    const idx = devSkills.findIndex(skill => skill.id === id);
    devSkills.splice(idx, 1);
  };

  function create(skill){
    const newSkill = {
      id: devSkills.length + 1,
      name: skill.name,
      description: skill.description
    };
    devSkills.push(newSkill);
    return newSkill;
  };

  function getOne(id) {
    id = parseInt(id);
    return devSkills.find((skill) => skill.id === id)
  }

  function getAll() {
    return devSkills;
  }