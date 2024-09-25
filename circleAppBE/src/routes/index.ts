import { Router } from "express";
import helloRouter from "./hello";
import userRouter from "./user";
import authRouter from "./auth";

const router = Router();

router.use("/", helloRouter);
router.use("/", userRouter);
router.use("/", authRouter);

export default router;
