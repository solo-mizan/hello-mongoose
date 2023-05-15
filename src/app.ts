import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import userRoute from './app/modules/user/user.route';
import { createUserToDB } from "./app/modules/user/user.service";

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);

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

// save - save() method --> Method --> data validate --> schema  