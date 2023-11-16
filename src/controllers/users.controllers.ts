import { Request, Response } from "express";
import { UsersService } from "../services/users.service";
import { TUserRequest } from "../interfaces/users.interfaces";

class UsersController {
  constructor(private userService: UsersService) {}

  async create(req: Request, res: Response) {
    const { name, email, password, telephone }: TUserRequest = req.body;

    const newUser = await this.userService.create({
      name,
      email,
      password,
      telephone,
    });

    return res.status(201).json(newUser);
  }

  async list(_: Request, res: Response) {
    const users = await this.userService.list();

    return res.json(users);
  }
}

export { UsersController }