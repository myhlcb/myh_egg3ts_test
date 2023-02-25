import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  router.get('/users/info', controller.users.info);
  router.post('/users/signUp', controller.users.create);
  router.post('/users/login', controller.users.login);
};
