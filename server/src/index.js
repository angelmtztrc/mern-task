import app from './app';

async function main() {
  await app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`SERVER RUNNING - PORT: ${process.env.PORT}`);
  });
}
main();
