import express from "express";
import dotenv from "dotenv";
import mongoDB from "./db/mongoDB.js";
import categoryRouter from "./routes/category.routes.js";
import itemRouter from "./routes/items.routes.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.use('/api/category', categoryRouter);
app.use('/api/item', itemRouter);

const port = process.env.PORT || 3000;

mongoDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.log('Unable to connect to the database', error);
})