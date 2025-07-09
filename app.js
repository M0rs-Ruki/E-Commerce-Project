
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { log } from 'console';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import db from './src/db/connect.db.js';


const app = express();
dotenv.config({ path: './.env' });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));


import ownersRouter from './src/routes/ownersRouter.js';
import productsRouter from './src/routes/productsRouter.js';
import usersRouter from './src/routes/userRouter.js';

app.use('/api/owners', ownersRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);



app.listen(port, () => {
    log('This app is running Sucessfully');
    log(`http://localhost:${port}`);
});
