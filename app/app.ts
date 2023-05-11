import express, { Application, NextFunction, Request, Response } from "express"
import cors from "cors"
import userRouter from "../routes/user.route";

const app: Application  = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Server is working fine!")
})

// user route

app.use("/user",userRouter)

export default app



