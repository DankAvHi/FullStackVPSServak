var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.static(__dirname + "/client/build"));
app.use(express.json());
app.use(cors());
app.use("/", express.static(path.join(__dirname, "client", "build")));
app.post("/api", (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log(req.body);
    res.json({ message: "HI" });
}));
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
//# sourceMappingURL=index.js.map