import * as Todo from "../models/todo.js";

export const listTasks = (req, res) => {
  const tasks = Todo.getAll();
  res.render("index", { title: "Список задач", tasks });
};

export const showNewForm = (req, res) => {
  res.render("new", { title: "Новая задача" });
};

export const createTask = (req, res) => {
  const { title } = req.body;
  if (title.trim()) Todo.addTask(title);
  res.redirect("/");
};

export const toggleTask = (req, res) => {
  Todo.toggleTask(Number(req.params.id));
  res.redirect("/");
};

export const deleteTask = (req, res) => {
  Todo.deleteTask(Number(req.params.id));
  res.redirect("/");
};
