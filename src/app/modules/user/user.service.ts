import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (payload:IUser):Promise<IUser> => {
    const user = await new User(payload);
    await user.save();
    console.log(user);
    return user;
};

// get all users from DB
export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
};

// get one user from DB
export const getOneUserFromDB = async (payload:string):Promise<IUser | null> => {
    const user = await User.findOne({ id: payload });
    return user;
}
