import fs from "fs";

export const deleteNote = (req, res) => {
  const id = parseInt(req.params.id);

  fs.readFile("notes.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ message: "Error reading file" });

    let notes = JSON.parse(data);
    const exists = notes.some(n => n.id === id);

    if (!exists) {
      return res.status(404).json({ message: "Note not found" });
    }

    notes = notes.filter(n => n.id !== id);

    fs.writeFile("notes.json", JSON.stringify(notes, null, 2), (err) => {
      if (err) return res.status(500).json({ message: "Error updating file" });

      return res.json({ message: "Note deleted successfully" });
    });
  });
};
