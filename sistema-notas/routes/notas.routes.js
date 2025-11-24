const express = require("express");
const router = express.Router();
const controlador = require("../controllers/notas.controller");

router.get("/", controlador.obtenerNotas);
router.post("/", controlador.crearNota);
router.put("/:id", controlador.actualizarNota);
router.delete("/:id", controlador.eliminarNota);

module.exports = router;
