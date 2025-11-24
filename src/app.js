
// DELETE NOTE
import { deleteNote } from "./controllers/deleteNote.js";
app.delete("/notes/:id", deleteNote);
