import { Router } from "express";
import { userRoutes } from "../modules/User/user.route";
import { BlogRoute } from "../modules/Blog/blog.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: userRoutes,
  },
  {
    path: "/blog",
    route: BlogRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
