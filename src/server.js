// const app = require('./app');
import app from './app.js';
import config from './common/config.js';

const { PORT } = config;

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
