
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { log } from 'console';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';


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


app.get('/', (req, res) =>  {
    res.send('Hello World')
})


app.listen(port, () => {
    log('This app is running Sucessfully');
    log(`http://localhost:${port}`);
});
