const express = require("express");
const app = express();
app.use(express.json());

// Memoria temporal
let notas = [];
let idCounter = 1;

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

app.get("/notas", (req, res) => {
  res.json(notas);
});

module.exports = app;
