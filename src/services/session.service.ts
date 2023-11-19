import { compare } from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User.entity";
import { AppError } from "../errors/AppError";
import { TLoginRequest } from "../interfaces/login.interfaces";
import { sign } from "jsonwebtoken";
import "dotenv/config";

export class SessionService {
  async create({ email, password }: TLoginRequest) {

    if (!email || !password) {
      throw new AppError("Email and password are required fields", 400);
    }

    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOne({
      where: { email },
    });

    if (!findUser) {
      throw new AppError("Invalid credentials", 401);
    }

    const passwordMatch = await compare(password, findUser.password);

    if (!passwordMatch) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = sign({ userName: findUser.name }, process.env.SECRET_KEY!, {
      expiresIn: "2h",
      subject: findUser.id,
    });
    return token;
  }
}
