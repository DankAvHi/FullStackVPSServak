import express, { response } from "express";
const path = require("path");
const jsonParser = express.json;

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.static(__dirname + "/client/build"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.options("*", (request, response) => {
     response.set("Access-Control-Allow-Origin", "*");
     response.set("Access-Control-Allow-Headers", "Content-Type");
     response.send("ok");
});

app.post("/api", (request, response) => {
     response.set("Access-Control-Allow-Origin", "*");
     response.set("Access-Control-Allow-Methods", "GET, OPTIONS");
     response.set("Access-Control-Allow-Headers", "Content-Type");

     const client = request.body.client;

     if (client === "site") {
          response.json({ message: "Hello ReactJS!" });
     }
});

app.get("/", (request, response) => {
     response.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.use(function (req, res, next) {
     res.status(404);
});

app.listen(PORT, () => {
     console.log(`Server listening on ${PORT}`);
});
