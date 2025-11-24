const express = require("express");
const app = express();
const notasRoutes = require("./routes/notas.routes");

app.use(express.json());
app.use("/notas", notasRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log("Servidor corriendo en puerto " + PORT));
