//Taylor Zweigle, 2024
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
  recurring: {
    type: Boolean,
    required: true,
  },
  every: {
    type: String,
    required: false,
  },
  frequency: {
    type: String,
    required: false,
  },
  creationTime: {
    type: Date,
    required: true,
  },
  creationUser: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
  checkedTime: {
    type: Date,
    required: false,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
