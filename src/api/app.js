import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import userRouter from './user/router.js';
import laptopRouter from './laptop/router.js';
import orderRouter from './order/router.js';
import imageRouter from './image/router.js';
import mouseRouter from './mouse/router.js';
import keyboardRouter from './keyboard/router.js';
import displayRouter from './display/router.js';
import ramRouter from './ram/router.js';
import processorRouter from './processor/router.js';
import authRouter from './auth/router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(morgan('combined'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.options('*', cors());

app.use('/user', userRouter);
app.use('/laptop', laptopRouter);
app.use('/order', orderRouter);
app.use('/image', imageRouter);
app.use('/mouse', mouseRouter);
app.use('/keyboard', keyboardRouter);
app.use('/display', displayRouter);
app.use('/ram', ramRouter);
app.use('/processor', processorRouter);
app.use('/auth', authRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const errorResponse = {
        location: err.location,
        error: [{ msg: err.message }],
    };
    res.status(status).send(errorResponse);
});

app.use(express.static(path.join(__dirname, '../uploads/images')));

export default app;
