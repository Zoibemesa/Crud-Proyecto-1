import express from "express";
import cors from "cors";

import { createNote } from "./controllers/createNote.js";
import { listNotes } from "./controllers/listNotes.js";
import { updateNote } from "./controllers/updateNote.js";
import { deleteNote } from "./controllers/deleteNote.js";
import { getNoteById } from "./controllers/getNoteById.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/notes", createNote);
app.get("/notes", listNotes);
app.get("/notes/:id", getNoteById);
app.put("/notes/:id", updateNote);
app.delete("/notes/:id", deleteNote);

export default app;
