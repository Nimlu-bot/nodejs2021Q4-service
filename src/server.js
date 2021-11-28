const { PORT } = require('./common/config');
const app = require('./app');



app.listen(
  PORT,
  (err, address) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    console.log(`Server is now listening on ${address}`);
  }

  // console.log(`App is running on http://localhost:${PORT}`)
);
