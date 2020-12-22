const app = require('./src/app');

function main() {
  app.listen(5000, '0.0.0.0', () => {
    console.log('SERVER RUNNING - PORT: ' + 5000);
  });
}
main();
