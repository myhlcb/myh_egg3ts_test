import jwt from 'jsonwebtoken';
module.exports = (options, app) => {
  return async function verify(ctx, next) {
    if (!ctx.request.header.authorization) {
      ctx.body = {
        code: -666,
        message: '用户没有登录',
      };
      return;
    }
    const token = ctx.request.header.authorization.replace('Bearer ', '');
    try {
      const ret = await jwt.verify(token, app.config.jwt.secret);
      ctx.state.user = { uid: ret.uid };
      await next();
    } catch (err:any) {
      console.log(err);
      if (err.name === 'TokenExpiredError') {
        ctx.body = {
          code: 401,
          message: 'Token Expired',
        };
      } else {
        ctx.body = {
          code: -1,
          message: 'user info error',
        };
      }
    }
  };
};
