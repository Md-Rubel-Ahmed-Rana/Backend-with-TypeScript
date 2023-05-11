import { Request, Response } from "express";
import User from '../models/user.model';

const getUsers = async(req: Request, res: Response) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.send(error.message)
    }
}

const createUser = async(req: Request, res: Response) =>{
    try {
        const {name, email, password} = req.body;
        const newUser = new User({name, email, password});
        const result = await newUser.save();
        res.send(result)
    } catch (error) {
        res.send(error.message)
    }
}


export {
    getUsers,
    createUser
}