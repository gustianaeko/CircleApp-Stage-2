import { Router } from "express";
import helloRouter from "./hello";
import userRouter from "./user";

const router = Router();

router.use("/", helloRouter);
router.use("/", userRouter);

export default router;
