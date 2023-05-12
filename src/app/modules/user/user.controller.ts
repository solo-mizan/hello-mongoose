import { NextFunction, Request, Response } from "express";
import { createUserToDB, getOneUserFromDB, getUsersFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    // call DB function
    const data = req.body;
    const user = await createUserToDB(data);
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
};

export const getOneUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user = await getOneUserFromDB(id);
    res.status(200).json({
        status: "success",
        data: user
    });
}
// pattern 
// Route => controller => service