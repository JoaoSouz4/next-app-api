import express from 'express';
import { startDB } from './config/startDb.js';
import { routes } from './routes.js';
import cors from 'cors';

const app = express();

app.use(cors(
    {
      origin: ['https://next-app-nu-neon.vercel.app/', 'http://localhost:3000'], // Permitir apenas este domínio
      methods: 'GET,POST,PUT,DELETE',
      allowedHeaders: 'Content-Type,Authorization'
    },
  ));
app.use(express.json());

app.use(routes)

app.listen(8080, () => {
    startDB();
    console.log('server runing at http://localhost:8080')
})