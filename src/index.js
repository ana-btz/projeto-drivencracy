import express from "express";
import cors from "cors";
import { db } from "./database/db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const { test } = req.body;
  try {
    const result = await db.collection("teste").insertOne({ test });
    
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
