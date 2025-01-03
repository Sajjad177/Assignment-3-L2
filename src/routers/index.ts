import { Router } from "express";
import { userRoutes } from "../modules/User/user.route";
import { BlogRoute } from "../modules/Blog/blog.route";
import { authRoutes } from "../modules/Auth/auth.route";
import { adminRoutes } from "../modules/Admin/admin.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: userRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoute,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/admin",
    route: adminRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
