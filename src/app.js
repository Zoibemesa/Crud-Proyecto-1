const express = require("express");
const app = express();
app.use(express.json());

// Datos en memoria
let notas = [];
let idCounter = 1;

// Controladores
const createNote = require("./controllers/createNote");
const listNotes = require("./controllers/listNotes");
const updateNote = require("./controllers/updateNote");

// RUTAS
app.post("/notas", (req, res) => createNote(req, res, notas, () => idCounter++));
app.get("/notas", (req, res) => listNotes(req, res, notas));
app.put("/notas/:id", (req, res) => updateNote(req, res, notas));

module.exports = app;
// cambio mínimo para permitir los Pull Requests
