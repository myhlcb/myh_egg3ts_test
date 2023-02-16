// import { Controller } from 'egg';

// export default class HomeController extends Controller {
//   public async index() {
//     const { ctx } = this;
//     await ctx.body = {"a":1}
//   }
// }


import { Controller } from 'egg';
// MVC
// model(service)
// Controller
// view
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
