import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../utils/schemas/auth-schema";
import authService from "../services/auth-service";

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const value = await registerSchema.validateAsync(req.body);
      const user = await authService.register(value);

      res.json(user);
    } catch (error) {
      res.json(error);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const value = await loginSchema.validateAsync(req.body);
      const user = await authService.login(value);

      res.json(user);
    } catch (error) {
      res.json(error);
    }
  }

  async check(req: Request, res: Response) {
    try {
      const user = (req as any).user;
      res.json(user);
    } catch (error) {
      res.json(error);
    }
  }
}

export default new AuthController();
