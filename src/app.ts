import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';

import './config/config';
import routes from './routes/index';
import * as swaggerFile from './swagger.json';


const app: Application = express();
app.use(express.json({ limit: '50mb' }));
app.use(helmet());
app.use(cookieParser());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN, credentials: true }));

app.use('/api/v1', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/', routes);

export default app;
