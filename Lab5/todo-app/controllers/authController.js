import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Проверяем уникальность
    const existing = await prisma.user.findFirst({
      where: { OR: [{ username }, { email }] },
    });

    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Хэшируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаём пользователя
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User registered", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Проверка пароля
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Генерация токена
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const profile = async (req, res) => {
  res.json(req.user);
};
