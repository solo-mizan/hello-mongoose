import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema } from "mongoose";

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
// inserting a test data into mongodb
    
    /*
    step 1: Interface
    step 2: Schema
    Step 3: Model
    Step 4: Database Query
    */


    // res.send("Hello World!");
    // next();
  });

  // creating an interface
    interface IUser {
        id: string;
        role: "student" | "teacher";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }

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
  })

export default app;