import { Router } from "express";

import {
  index,
  remove,
  show,
  store,
  update,
} from "../controllers/tasks.controller.js";
import validateSchema from "../middlewares/validateSchema.js";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/", index);

router.get("/:id", show);

router.post("/store", validateSchema(createTaskSchema), store);

router.put("/update/:id", validateSchema(updateTaskSchema), update);

router.delete("/:id", remove);

export default router;
