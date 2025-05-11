"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 9000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    try {
        res.status(200).json({ message: "Hello World!" });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
app.listen(PORT, () => {
    console.log(`Tradez Backend has Started and running on PORT : ${PORT}`);
});
