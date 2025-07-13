
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { log } from 'console';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import db from './src/db/connect.db.js';
import expressSession from 'express-session';
import flash from 'connect-flash';



const app = express();
dotenv.config({ path: '../.env' });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET
}))
app.use(flash());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));


import ownersRouter from './src/routes/ownersRouter.js';
import productsRouter from './src/routes/productsRouter.js';
import usersRouter from './src/routes/userRouter.js';
import indexRouter from './src/routes/indexRouts.js';

app.use('/api/owners', ownersRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/', indexRouter);



app.listen(port, () => {
    log('This app is running Sucessfully');
    log(`http://localhost:${port}`);
});
