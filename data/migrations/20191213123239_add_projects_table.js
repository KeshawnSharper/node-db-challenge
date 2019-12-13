exports.up = function(knex) {
    return knex.schema.createTable('projects', function (table) {
        table.increments()
        table.string("name",128).notNullable();
        table.string("description",128)
        table.boolean("completed").notNullable()
      })
      .createTable("tasks",function (table){
          table
          .increments();
          table.string("name",128)
          .notNullable()
          table.string("description",128)
          table
          .integer("project_id",128)
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
          table.boolean("completed").notNullable()
      })
      .createTable("resources",function(table){
          table.increments()
          table
          .integer("name").notNullable()
          table
          .string("description",128)
          table
          .integer("project_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
          table
          .integer("task_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("tasks")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
         
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
};