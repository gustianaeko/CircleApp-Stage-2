import { Request, Response } from "express";
import { createThreadSchema } from "../utils/schemas/thread-schema";
import threadService from "../services/thread-service";

class ThreadController {
  async find(req: Request, res: Response) {
    try {
      const threads = await threadService.getAllThreads();
      res.json(threads);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const thread = await threadService.getThreadById(Number(id));
      res.json(thread);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async create(req: Request, res: Response) {
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/CreateThreadDTO"
                    }  
                }
            }
        } 
    */
    try {
      const value = await createThreadSchema.validateAsync(req.body);

      const thread = await threadService.createThread(value);
      res.json(thread);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req: Request, res: Response) {
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UpdateThreadDTO"
                    }  
                }
            }
        } 
    */

    const { id } = req.params;

    try {
      const thread = await threadService.updateThread(Number(id), req.body);
      res.json(thread);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const thread = await threadService.deleteThread(Number(id));

      res.json(thread);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ThreadController();
