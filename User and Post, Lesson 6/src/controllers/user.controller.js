import { User } from "../schema/user.schema.js";
import { BaseController } from "./base.controller.js";

class UserController extends BaseController {}

export default new UserController(User, 'posts')