import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1676530005910_8638';

  // add your egg config in here
  config.middleware = [ 'jwtDecode' ];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  config.security = {
    csrf: {
      // headerName: 'x-csrf-token', // 自定义请求头
      enable: false,
    },
  };
  config.jwt = {
    secret: '123456',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
