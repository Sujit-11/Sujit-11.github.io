import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

dotenv.config();

app.use('/todos', todoRoutes);
app.use('/users', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
