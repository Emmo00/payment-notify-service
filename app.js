import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import config from './config/config';
import { webHookCallbackRouter } from './routes';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: config.cors.cors_origin }));
app.use(morgan('combined'));

app.use('/api', webHookCallbackRouter);

app.get('/api/status', (req, res) => {
  res.status(200);
  res.json({ status: 'active' });
});

export default app;
