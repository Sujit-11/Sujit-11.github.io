import express from 'express';
import config from './config/config';
import routes from './routes';
import { genericErrorHandler, notFoundError } from './middlewares/ErrorHandeller';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors({
  origin: '*',
  credentials:true,
  methods:'*',
}));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(routes);

app.use(genericErrorHandler);
app.use(notFoundError);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
