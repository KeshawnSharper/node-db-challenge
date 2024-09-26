const db = require('../data/dbConfig');



function getProjects() {
    return db("projects").then(projects => {
      return projects.map(project => {
        project.completed = project.completed ? true : false;
        return project;
      });
    });
  }
  function addProject(project) {
    return db("projects")
      .insert(project)
  }
function getTasks(){
    return db("tasks").join('projects', {'projects.id': 'project_id'}).select("tasks.id","projects.name","projects.description")
    .then(tasks => {
        return tasks.map(task => {
            task.completed = task.completed ? true :false
            return task
        })
    })
}function getAllResources(){
    return db("resources").select("id","name","description","task_id")
}
function getResources(id){
    return db("resources").select("id","name","description","task_id").where({"task_id":id})
}
function addTask(task){
    return db("tasks").insert(task)
}
function getTask(id){
    return db("tasks").where(id)
    .then(tasks => {
        return tasks.map(task => {
            task.completed = task.completed ? true :false
            return task
        })
    })
}
function getResource(id){
    return db("resources").select("id","name","description","task_id").where({"id":id})
}
function getProject(id){
    return db("projects").where({"id":id}).then(projects => {
        return projects.map(project => {
          project.completed = project.completed ? true : false;
          return project;
        });
      });
}
function addResource (resource){
    return db("resources").insert(resource)
}


module.exports = {
    getProject,
    getResource,
    getProjects,
    getTasks,
    getResources,
    addProject,
    addTask,
    getTask,
    addResource,
    getAllResources,

}

