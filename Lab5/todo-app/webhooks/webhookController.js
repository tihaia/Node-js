import { registerWebhook } from "./webhookService.js";

export const register = (req, res) => {
  const { url } = req.body;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "URL обязателен и должен быть строкой" });
  }

  registerWebhook(url);

  res.json({
    message: "WebHook успешно зарегистрирован",
    url,
  });
};
