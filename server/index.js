const app = require('./src/app');

function main() {
  app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`SERVER RUNNING - PORT: ${process.env.PORT}`);
  });
}
main();
