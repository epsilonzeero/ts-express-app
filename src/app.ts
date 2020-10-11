import express, {Application} from 'express';
import morgan from 'morgan';
import indexRouter from './routes/index';

const app: Application = express();

app.use(morgan('dev'));

app.use('/', indexRouter);

app.listen(5000, () => console.log('Server running'));
