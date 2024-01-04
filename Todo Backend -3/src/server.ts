import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { genericErrorHandler, notFoundError } from './middleware/errorHandler';

import { logger } from './middleware/logger';

const app = express();
app.use(express.json());
// app.use(logger);

dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(routes);

app.use(genericErrorHandler);

app.use(notFoundError);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
