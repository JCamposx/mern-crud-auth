import { Router } from "express";

import validateToken from "../middlewares/validateToken.js";
import profileRoutes from "./profile.routes.js";
import tasksRoutes from "./tasks.routes.js";

const router = Router();

router.use(validateToken);

router.use("/profile", profileRoutes);

router.use("/tasks", tasksRoutes);

export default router;
