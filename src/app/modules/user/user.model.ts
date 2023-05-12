import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

 // creating a schema using interface
const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ["student", "teacher"]
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    dateOfBirth: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    email: {
        type: String,
        required: false
    },
    contactNo: {
        type: String,
        required: true
    },
    emergencyContactNo: {
        type: String,
        required: true
    },
    presentAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    }
});

export const User = model<IUser>("User", userSchema);