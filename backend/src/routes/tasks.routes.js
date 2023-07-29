import { Router } from "express";

import {
  index,
  remove,
  show,
  store,
  update,
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/", index);

router.get("/:id", show);

router.post("/store", store);

router.put("/update/:id", update);

router.delete("/:id", remove);

export default router;
