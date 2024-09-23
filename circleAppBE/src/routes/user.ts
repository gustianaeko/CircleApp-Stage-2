import { Router } from "express";
import userController from "../controllers/user-controller";

const userRouter = Router();

userRouter.get("/users", userController.find);
userRouter.post("/users", userController.create);
userRouter.get("/users/:id", userController.findById);
userRouter.get("/users/email/:email", userController.findByEmail);

export default userRouter;
