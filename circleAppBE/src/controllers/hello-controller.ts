import { sayHello } from "../services/hello-service";
import { Request, Response } from "express";

export function HelloController(req: Request, res: Response) {
  const hello = sayHello();

  res.send(`${hello}`);
}
