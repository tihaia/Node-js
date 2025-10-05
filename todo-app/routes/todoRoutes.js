import express from "express";
import {
  listTasks,
  showNewForm,
  createTask,
  toggleTask,
  deleteTask,
} from "../controllers/todoController.js";
import { aboutPage } from "../controllers/aboutController.js";

const router = express.Router();

router.get("/", listTasks);
router.get("/new", showNewForm);
router.post("/new", createTask);
router.post("/:id/toggle", toggleTask);
router.post("/:id/delete", deleteTask);
router.get("/about", aboutPage);

export default router;
