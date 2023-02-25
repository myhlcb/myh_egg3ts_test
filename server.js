const egg = require('egg');
const wokers = Number(process.argv[2] || require('os').cpus().length);
egg.startCluster({
  wokers,
  baseDir: __dirname,
});
