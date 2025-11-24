import fs from "fs";

export const getNoteById = (req, res) => {
  const { id } = req.params;

  fs.readFile("notes.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });

    const notes = JSON.parse(data);
    const note = notes.find((n) => n.id === parseInt(id));

    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json(note);
  });
};
