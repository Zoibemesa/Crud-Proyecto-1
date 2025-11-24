const express = require("express");
const app = express();
app.use(express.json());

// Memoria temporal
let notas = [];
let idCounter = 1;

// =========================
// 1️⃣  CREAR NOTA
// =========================
app.post("/notas", (req, res) => {
  const { titulo, contenido } = req.body;
  const nuevaNota = {
    id: idCounter++,
    titulo,
    contenido,
    fecha: new Date().toISOString(),
  };
  notas.push(nuevaNota);
  res.status(201).json(nuevaNota);
});

// =========================
// 2️⃣  LISTAR TODAS LAS NOTAS
// =========================
app.get("/notas", (req, res) => {
  res.json(notas);
});

module.exports = app;
