"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.static(__dirname + "/client/build"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/", express_1.default.static(path_1.default.join(__dirname, "client", "build")));
app.post("/api", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    res.json({ message: "HI" });
}));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "client", "build", "index.html"));
});
app.use(function (req, res, next) {
    res.status(404);
    res.redirect("/");
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map