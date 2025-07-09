
import mongoose from "mongoose";
import debug from "debug";
import dotenv from "dotenv";


dotenv.config({path: "./.env"});
const debgr = debug('Dev:DBConnect');

mongoose
.connect(process.env.MONGO_URI)
.then(() => {debgr("Connected to MongoDB successfully")})
.catch((err) => {debgr("Error connecting to MongoDB:", err)});

const db = mongoose.connection;
export default db;