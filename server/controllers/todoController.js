//Taylor Zweigle, 2024
const mongoose = require("mongoose");

const Event = require("../models/todoModel");

const getTodos = async (req, res) => {
  const creationUser = req.user._id;

  const todos = await Event.find({ creationUser }).sort({ dueDate: 1 });

  res.status(200).json(todos);
};

const getTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid todo id" });
  }

  const todo = await Event.findById(id);

  if (!todo) {
    return res.status(404).json({ error: "No todo found" });
  }

  res.status(200).json(todo);
};

const createTodo = async (req, res) => {
  const { todo, user, dueDate, notes, recurring, every, frequency, creationTime, checked, checkedTime } =
    req.body;

  try {
    const creationUser = req.user._id;

    const newTodo = await Event.create({
      todo,
      user,
      dueDate,
      notes,
      recurring,
      every,
      frequency,
      creationTime,
      creationUser,
      checked,
      checkedTime,
    });

    res.status(200).json(newTodo);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid todo id" });
  }

  const todo = await Event.findOneAndDelete({ _id: id });

  if (!todo) {
    return res.status(404).json({ error: "No todo found" });
  }

  res.status(200).json(todo);
};

const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid todo id" });
  }

  try {
    const todo = await Event.findOneAndUpdate({ _id: id }, { ...req.body });

    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getTodo,
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
