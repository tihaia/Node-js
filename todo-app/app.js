import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import todoRoutes from "./routes/todoRoutes.js";
import { notFound } from "./controllers/errorController.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", todoRoutes);

app.use(notFound);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`${process.env.APP_NAME} запущен на порту ${PORT} в режиме ${process.env.NODE_ENV}`);
});
