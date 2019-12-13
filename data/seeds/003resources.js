
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Computer',project_id:1,task_id:1},
        {id: 2, name: 'Hammer',project_id:2,task_id:3},
        {id: 3, name: 'Regret',project_id:3,task_id:5},
        {id: 4, name: 'More than just a hammer ',project_id:2,task_id:2},
      ]);
    });
};
