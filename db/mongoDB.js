import mongoose from "mongoose";

const mongoDB = async () => {
    mongoose.connect(process.env.MONGODB_URL);
    const connection = mongoose.connection;
    connection.once("open", () => {
        console.log("MongoDB connection established successfully");
    });
    connection.on("error", () => {
        console.log("MongoDB connection failed");
    });
}

export default mongoDB;