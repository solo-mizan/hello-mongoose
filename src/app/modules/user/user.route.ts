import express from "express";
import { createUser, getOneUser, getUsers } from "./user.controller";
const router = express.Router();

router.get('/', getUsers);
router.get('/get-user/:id', getOneUser)
router.post('/create-user', createUser);

export default router;