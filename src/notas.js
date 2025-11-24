const express = require("express");
const app = express();
app.use(express.json());

let notas = [];
let idCounter = 1;


app.post("/notas", (req, res) => {
  const { titulo, contenido } = req.body;

  const nuevaNota = {
    id: idCounter++,
    titulo,
    contenido
  };

  notas.push(nuevaNota);
  res.status(201).json(nuevaNota);
});

module.exports = app;
