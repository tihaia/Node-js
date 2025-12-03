import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import webhookRoutes from "./routes/webhookRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/todos", todoRoutes);
app.use("/api/auth", authRoutes);
app.use("/webhooks", webhookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
