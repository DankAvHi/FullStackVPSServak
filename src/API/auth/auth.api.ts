import { PrismaClient, user } from "@prisma/client";
import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ICandidate } from "./../../interfaces/account/IUser";

const authRouter = Router();

const prisma = new PrismaClient();

authRouter.post("/login", async (req, res) => {
     try {
          const { login, password }: ICandidate = req.body;

          const getCandidate = async () => {
               const candidate = await prisma.user.findUnique({
                    where: {
                         login: login,
                    },
               });
               if (!candidate) return null;
               const candidateId = candidate.id;
               const candidateLogin = candidate.login;
               const candidatePassword = await bcrypt.hash(candidate.password, 12);
               return { id: candidateId, login: candidateLogin, password: candidatePassword };
          };

          const candidate: user = await getCandidate();

          if (!candidate) {
               return res.status(400).json({ message: "Логин или пароль не верны" });
          }

          const isMatch = await bcrypt.compare(password, candidate.password);

          if (!isMatch) {
               return res.status(400).json({ message: "Логин или пароль не верны" });
          }

          const token = jwt.sign({ userId: candidate.id }, process.env.SECRET, { expiresIn: "1h" });

          res.json({ token, userID: candidate.id });
     } catch (e) {
          console.log(e);
          return res.status(500).json({ message: "Ошибка сервера" });
     }
});

export default authRouter;
