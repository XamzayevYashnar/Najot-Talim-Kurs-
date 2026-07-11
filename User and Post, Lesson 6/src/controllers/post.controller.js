import { Post } from "../schema/post.schema.js";
import { BaseController } from "./base.controller.js";

class PostController extends BaseController {}

export default new PostController(Post, 'author')