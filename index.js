import express from "express";
import dotenv from "dotenv";
import mongoDB from "./db/mongoDB.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.log('Unable to connect to the database', error);
})