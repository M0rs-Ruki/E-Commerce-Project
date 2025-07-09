
import mongoose from "mongoose";

mongoose
.connect("mongodb://localhost:27017/ecommerce")
.then(() => {console.log("Connected to MongoDB successfully")})
.catch((err) => {console.error("Error connecting to MongoDB:", err)});

const db = mongoose.connection;
export default db;