import { Router } from "express";

import login from "../controllers/auth/login.controller.js";
import logout from "../controllers/auth/logout.controller.js";
import register from "../controllers/auth/register.controller.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

export default router;
