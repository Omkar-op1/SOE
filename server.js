const { createServer } = require('http');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = false; // Important: must be false for production

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`> Ready on port ${port}`);
  });
});
