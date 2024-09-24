import { Router } from "express";
import userController from "../controllers/user-controller";

const userRouter = Router();

userRouter.get("/users", userController.find);
userRouter.post("/users", userController.create);
userRouter.patch("/users", userController.update);
userRouter.get("/users/:id", userController.findById);
userRouter.get("/users/email/:email", userController.findByEmail);
userRouter.delete("/users/:id", userController.deleteUserById);

export default userRouter;
