import { UsersService } from "../services/users.service";
import { UsersController } from "./users.controllers";

const userService = new UsersService()
const usersController = new UsersController(userService)

export { usersController }