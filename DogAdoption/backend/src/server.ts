import express from 'express';
import config from './config/config';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
