### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```
Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once
### 使用pm2
* npm run ci
* cp server.js package.json ./dist/
* cd ./dist
* yarn install
* EGG_SERVER_ENV=dev pm2 start server.js

### Requirement

- Node.js >= 16.x
- Typescript >= 4.x

### sequelize
```
初始化数据库日志：npx sequelize migration:generate --name=init-users
升级数据库：npx sequelize db:migrate --env=dev
回滚 npx sequelize db:migrate:undo
回滚到初始状态npx sequelize db:migrate:undo:all
```