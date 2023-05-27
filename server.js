const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('db.json', { static: true, delay: 500 });
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'build'),
});

server.use(middlewares);
server.use(router);

const port = 5000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});