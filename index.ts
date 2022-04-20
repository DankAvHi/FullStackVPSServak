const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.static(__dirname + "/client/build"));
app.use(express.json());
app.use(cors());

app.use("/", express.static(path.join(__dirname, "client", "build")));

app.post("/api", async (req, res) => {
     console.log(req.body);
     res.json({ message: "HI" });
});

app.get("*", (req, res) => {
     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.use(function (req, res, next) {
     res.status(404);
     res.redirect("/");
});

app.listen(PORT, () => {
     console.log(`Server listening on ${PORT}`);
});