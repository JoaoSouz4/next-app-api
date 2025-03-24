import express from 'express';
import { startDB } from './config/startDb.js';
import { routes } from './routes.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes)

app.listen(8080, () => {
    startDB();
    console.log('server runing at http://localhost:8080')
})