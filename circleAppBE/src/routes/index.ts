import { Router } from "express";
import userRouter from "./user";
import authRouter from "./auth";
import threadRouter from "./thread";

const router = Router();

router.use("/", userRouter);
router.use("/", authRouter);
router.use("/", threadRouter);

export default router;
