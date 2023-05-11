import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const user = process.env.DB_USER
const pass = process.env.DB_PASS
// 
const databaseConnection = () => {
    mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.n72f5gi.mongodb.net/typescriptDB`)
    .then(()  => {
    console.log({
        message: "Database connected",
        error: null
    });
})
.catch((err) => {
    console.log({
        message: "Database is not connected",
        error: err.message
    });
})
}

export default databaseConnection