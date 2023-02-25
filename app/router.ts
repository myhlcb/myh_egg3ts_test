import { Application } from 'egg';
import usersRouter from './router/user';
export default (app: Application) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  usersRouter(app);
};
