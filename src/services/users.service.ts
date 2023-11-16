import { hash } from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User.entity";
import { TUserResponse, TUserRequest } from "../interfaces/users.interfaces";
import {
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/users.schema";
import { AppError } from "../errors/AppError";

class UsersService {
  async create({
    name,
    email,
    password,
    telephone,
  }: TUserRequest): Promise<TUserResponse> {
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOne({
      where: { email },
    });

    if (findUser) {
      throw new AppError("User already exists, please login!", 409);
    }

    const hashedPassword = await hash(password, 10);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
      telephone,
    });

    await userRepository.save(user);

    return userSchemaResponse.parse(user);
  }

  async list() {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    return usersSchemaResponse.parse(users);
  }

  async destroy(user: User): Promise<void> {
     
  }

  async update() {

  }
}

export { UsersService };
