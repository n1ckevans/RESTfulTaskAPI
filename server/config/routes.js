const tasksController = require('../controllers/tasks');

module.exports = function (app) {
  app.get('/api/tasks', tasksController.index);
  app.post('/api/tasks', tasksController.create);
  app.put('/api/tasks/:id', tasksController.update);
  app.get('/api/tasks/:id', tasksController.getById);
  app.delete('/api/tasks/:id', tasksController.delete);
}