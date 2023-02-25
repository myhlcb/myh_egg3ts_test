// app/controller/users.js
import { Controller } from 'egg';

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async info() {
    const { ctx } = this;
    const user = ctx.state.user;
    if (!user) {
      ctx.throw(400, 'permission denied');
    }
    ctx.body = await ctx.model.User.findOne({ where: { id: user.uid },
      attributes: { exclude: [ 'password' ] },
    });
  }

  async login() {
    const { ctx, app } = this;
    const { nickname, password } = ctx.request.body;
    const user = await ctx.model.User.findOne({ nickname, password });
    const token = app.jwt.sign({ uid: user.id }, app.config.jwt.secret);
    ctx.body = { token };
  }

  async create() {
    const ctx = this.ctx;
    const { nickname, password, cellphone, email } = ctx.request.body;
    const user = await ctx.model.User.create({ nickname, password, cellphone, email });
    ctx.body = user;
  }

  async update() {
    const { ctx } = this;
    const user = ctx.state.user;
    if (!user) {
      ctx.throw(401, 'permission denied');
    }
    const userInfo = await ctx.model.User.findByPk(user.id);
    if (!userInfo) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await user.update({ name, age });
    ctx.body = user;
  }

}

module.exports = UserController;
