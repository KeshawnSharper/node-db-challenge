
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name: 'Clone the repo',project_id:1,completed:true},
        {id: 2, name: 'Study',project_id:1,completed:true},
        {id: 3, name: 'Make a baking soda volcano',completed:false,project_id:3},
        {id: 4, name: 'Take off the roof',completed:false,project_id:2},
        {id:5,name:"lose the contest",description:"live in jealousy for losing to the man who made a baking soda volcano for the rest of your life",project_id:3,completed:true}
      ]);
    });
};
