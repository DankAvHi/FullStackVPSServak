import { Router } from "express";
import authRouter from "./auth/auth.api";

const apiRouter = Router();

apiRouter.use("/auth", authRouter);

export default apiRouter;
