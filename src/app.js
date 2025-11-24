import express from "express";
import { createNote } from "./controllers/createNote.js";

const app = express();

app.use(express.json());

// List notes (dummy)
app.get("/notes", (req, res) => {
  res.json({ message: "List notes route works" });
});

// Create note
app.post("/notes", createNote);

export default app;
