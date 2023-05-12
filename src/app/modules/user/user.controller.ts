import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUsersFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    // call DB function
    const user = await createUserToDB();
    res.status(200).json({
        status: "success",
        data: user,
    });
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const users = await getUsersFromDB();
    res.status(200).json({
        status: "success",
        data: users
    })
}
// pattern 
// Route => controller => service