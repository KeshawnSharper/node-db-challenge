const express = require('express');

const project = require('./projects-model')

const router = express.Router();

router.get('/projects/', (req, res) => {
  project.getProjects()
  .then(project => {
    res.status(200).json(project);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});
router.get('/projects/:id', (req, res) => {
    project.getProject(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });
router.get('/tasks', (req, res) => {
    project.getTasks()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
  });
  router.get('/tasks/:id/resources', (req, res) => {
    project.getResources(req.params.id)
    .then(project=> {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
  });
  router.get('/resources', (req, res) => {
    project.getAllResources()
    .then(project=> {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
  });
  router.get('/resources/:id', (req, res) => {
    project.getResource(req.params.id)
    .then(project=> {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
  });
  router.post('/projects', (req, res) => {
      const newProject = req.body
      newProject.completed = false 
    project.addProject(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
  });
  router.post('/projects/:id/task', (req, res) => {
    const newTask = req.body
    newTask.completed = false 
    newTask.project_id = req.params.id
  project.addTask(newTask)
  .then(project => {
    res.status(201).json(project);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});
router.get('/tasks/:id', (req,res) => {
project.getTask(req.params)
.then(i => res.status(200).json(i))
})
router.post('/tasks/:id/resources', (req, res) => {
    const newResource = req.body
    newResource.task_id = req.params.id
    newResource.project_id = 0
  project.addResource(newResource)
  .then(project => {
    res.status(201).json(project);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});
router.get('/tasks', (req,res) => {
    project.getAllTasks()
    .then(i => res.status(200).json(i))
    })


  

module.exports = router