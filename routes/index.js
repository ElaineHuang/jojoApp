const UserController = require('../controllers/users_controller');
const ActivityController = require('../controllers/activities_controller');

module.exports = (app) => {
  app.post('/api/v1/users', UserController.create);
  app.put('/api/v1/users/:id', UserController.edit);
  app.delete('/api/v1/users/:id', UserController.delete);
  app.get('/api/v1/users', UserController.index);
  app.get('/api/v1/users/:id', UserController.get);

  app.post('/api/v1/activities', ActivityController.create);
  app.put('/api/v1/activities/:id', ActivityController.edit);
  app.delete('/api/v1/activities/:id', ActivityController.delete);
  app.get('/api/v1/activities', ActivityController.index);
  app.get('/api/v1/activities/:id', ActivityController.get);
};
