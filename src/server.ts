import app from './app';
import config from './common/config';

const PORT = config.PORT ? config.PORT : '4000';
app.listen(PORT, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});
