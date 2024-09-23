import userService from "../services/user-service";
import { Request, Response } from "express";
import { createUserSchema } from "../utils/schemas/create-user-schema";

export class UserController {
  async find(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await userService.getUserById(Number(id));

      res.json(user);
    } catch (error) {
      res.json(error);
    }
  }

  async findByEmail(req: Request, res: Response) {
    try {
      const { email } = req.params;
      const user = await userService.getUserByEmail(email);

      res.json(user);
    } catch (error) {
      res.json(error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const value = await createUserSchema.validateAsync(req.body);
      const users = await userService.createUser(value);

      res.json(users);
    } catch (error) {
      res.json(error);
    }
  }
}

export default new UserController();
