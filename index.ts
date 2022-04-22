import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import path from "path";
import apiRouter from "./src/API/api";

dotenv.config();

const PORT = process.env.PORT;

const app: Express = express();
app.use(express.static(__dirname + "/client/build"));
app.use(express.json());
app.use(cors());

app.use("/", express.static(path.join(__dirname, "client", "build")));

app.use("/api", apiRouter);

app.get("*", (req, res) => {
     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
     console.log(`Server listening on ${PORT}`);
});
