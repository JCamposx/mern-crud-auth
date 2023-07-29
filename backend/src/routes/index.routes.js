import { Router } from "express";

import validateToken from "../middlewares/validateToken.js";
import profileRoutes from "./profile.routes.js";

const router = Router();

router.use(validateToken);

router.use("/profile", profileRoutes);

export default router;
