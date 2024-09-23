import { Router } from "express";
import { HelloController } from "../controllers/hello-controller";

const helloRouter = Router();

helloRouter.get("/hello", HelloController);

export default helloRouter;
