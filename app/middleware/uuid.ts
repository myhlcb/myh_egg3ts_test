import { EggAppConfig } from 'egg';

export default function uuidMiddleWare(
  options: EggAppConfig['uuid'],
): any {
  return async (next: () => Promise<any>) => {
    // name 就是 config.default.js 中 uuid 下的属性
    console.info(options.name);
    await next();
  };
}
