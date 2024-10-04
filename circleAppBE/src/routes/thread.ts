import { Router } from "express";
import threadController from "../controllers/thread-controller";

const threadRouter = Router();

threadRouter.get("/threads", threadController.find);
threadRouter.post("/threads", threadController.create);
threadRouter.get("/threads/:id", threadController.findById);
threadRouter.post("/threads/:id", threadController.update);
threadRouter.delete("/threads/:id", threadController.delete);

export default threadRouter;
