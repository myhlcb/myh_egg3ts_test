import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  console.log(controller.users, 1111111);
  router.get('/', controller.home.index);
  router.get('/users', controller.users.index);
};
