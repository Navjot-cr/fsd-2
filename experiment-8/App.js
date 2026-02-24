const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Sample data
let students = [
  { id: 1, name: "Navjot", course: "CSE" },
  { id: 2, name: "Aman", course: "IT" }
];

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// GET student by ID
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student || { message: "Not found" });
});

// POST add student
app.post("/students", (req, res) => {
  students.push(req.body);
  res.json({ message: "Student added" });
});

// PUT update student
app.put("/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  if (index !== -1) {
    students[index] = req.body;
    res.json({ message: "Student updated" });
  } else {
    res.json({ message: "Not found" });
  }
});

// DELETE student
app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.json({ message: "Student deleted" });
});

// ⭐ Render-compatible server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});