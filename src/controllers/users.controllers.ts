import { Request, Response } from "express";
import { UsersService } from "../services/users.service";
import {
  TUserRequest,
  TUserUpdateResquest,
} from "../interfaces/users.interfaces";

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

  async getUserById(req: Request, res: Response) {
    const userId = req.params.id;
    console.log(userId);

    const user = await this.userService.getUserById(userId);
    console.log(user);

    return res.status(200).json({
      name: user.name,
      email: user.email,
      userId: user.id,
    });
  }

  async list(_: Request, res: Response) {
    const users = await this.userService.list();

    return res.json(users);
  }

  async remove(req: Request, res: Response) {
    const userId = req.params.id;
    await this.userService.remove(userId);

    res.status(204).send();
  }

  async update(req: Request, res: Response) {
    const updatedValues: TUserUpdateResquest = req.body;

    const userId = req.params.id;

    const updateUser = await this.userService.update(updatedValues, userId);

    return res.json(updateUser);
  }
}

export { UsersController };
