import express from "express";
import cors from "cors";
import { db } from "./database/db.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
