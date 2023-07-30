import { Router } from "express";

import login from "../controllers/auth/login.controller.js";
import logout from "../controllers/auth/logout.controller.js";
import register from "../controllers/auth/register.controller.js";
import validateSchema from "../middlewares/validateSchema.js";
import loginSchema from "../schemas/auth/login.schema.js";
import registerSchema from "../schemas/auth/register.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

export default router;
