import { Router } from "express";

import { index } from "../controllers/profile.controller.js";

const router = Router();

router.get("/", index);

export default router;
