const fs = require("fs-extra");
const { v4: uuidv4 } = require("uuid");
const dbPath = "./data/notas.json";

async function obtenerNotas(req, res) {
    const notas = await fs.readJSON(dbPath);
    res.json(notas);
}

async function crearNota(req, res) {
    const { titulo, contenido } = req.body;

    if (!titulo || !contenido)
        return res.status(400).json({ error: "Título y contenido requeridos" });

    const notas = await fs.readJSON(dbPath);

    const nuevaNota = { id: uuidv4(), titulo, contenido, fecha: new Date() };
    notas.push(nuevaNota);

    await fs.writeJSON(dbPath, notas, { spaces: 2 });

    res.json({ mensaje: "Nota creada", nota: nuevaNota });
}

async function actualizarNota(req, res) {
    const { id } = req.params;
    const { titulo, contenido } = req.body;

    const notas = await fs.readJSON(dbPath);
    const indice = notas.findIndex((n) => n.id === id);

    if (indice === -1)
        return res.status(404).json({ error: "Nota no encontrada" });

    notas[indice] = {
        ...notas[indice],
        titulo: titulo || notas[indice].titulo,
        contenido: contenido || notas[indice].contenido,
    };

    await fs.writeJSON(dbPath, notas, { spaces: 2 });

    res.json({ mensaje: "Nota actualizada", nota: notas[indice] });
}

async function eliminarNota(req, res) {
    const { id } = req.params;
    const notas = await fs.readJSON(dbPath);
    const nuevasNotas = notas.filter((n) => n.id !== id);

    await fs.writeJSON(dbPath, nuevasNotas, { spaces: 2 });

    res.json({ mensaje: "Nota eliminada" });
}

module.exports = {
    obtenerNotas,
    crearNota,
    actualizarNota,
    eliminarNota,
};
