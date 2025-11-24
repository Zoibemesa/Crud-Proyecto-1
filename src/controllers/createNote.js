export const createNote = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const newNote = {
    id: Date.now(),
    title,
    content,
  };

  res.status(201).json({
    message: "Note created successfully",
    data: newNote,
  });
};
