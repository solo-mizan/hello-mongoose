import {IUser} from "./app/modules/user/user.interface";
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
import { User } from "./app/modules/user/user.model";

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

      // creating an interface

const createUserToDB = async () => {
    const user = new User({
        id: "9092",
        role: "teacher",
        password: "123456",
        name: {
            firstName: "Mrs.",
            middleName: "Rahima",
            lastName: "Khatun",
        },
        dateOfBirth: "14-August-1998",
        gender: "male",
        email: "mizanbd.eee@gmail.com",
        contactNo: "01719402933",
        emergencyContactNo: "01723100818",
        presentAddress: "Vodra, Rajshahi Sadar, Rajshahi, Bangladesh",
        permanentAddress: "Vill: Dighirpar, Post: Palsha, Thana: Atrai, District: Naogaon, Bangladesh"
    });
    await user.save();
    console.log(user);
};

createUserToDB();
  });

export default app;

// There are two types of pattern for managing backend codes
// 1. MVC (Model, View, Controller) pattern.
// 2. Modular pattern

/*
Interface        => interface.ts
Schema, Model    => model.ts
route
router function  => controller.ts
Database Query   => service.ts
*/