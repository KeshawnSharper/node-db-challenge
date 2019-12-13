
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Sprint Challenge', description:"A code challenge for the end of the week to test your skills",completed:false},
        {id: 2, name: 'House remodeling',completed:false},
        {id: 3, name: 'Science Fair', description:"5th grade science fair that you never won", completed:false}
      ]);
    });
};
