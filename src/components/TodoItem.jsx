import React, { useState } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes, FaCheck } from "react-icons/fa";

const TodoItem = ({ todo, onToggleComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [editPriority, setEditPriority] = useState(todo.priority);

  const priorityColors = {
    low: "bg-green-500/30 text-green-100 backdrop-blur",
    medium: "bg-yellow-500/30 text-yellow-100 backdrop-blur",
    high: "bg-red-500/30 text-red-100 backdrop-blur",
  };

  const handleSave = () => {
    if (editTitle.trim()) {
      onEdit(todo.id, {
        title: editTitle.trim(),
        description: editDescription.trim(),
        priority: editPriority,
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setEditPriority(todo.priority);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-white/20 backdrop-blur border border-white/30 rounded-lg p-4 mb-3 shadow-lg">
        <div className="space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-3 py-2 bg-white/20 backdrop-blur border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder="Task title"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full px-3 py-2 bg-white/20 backdrop-blur border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            rows="2"
            placeholder="Task description"
          />
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
            className="px-3 py-2 bg-white/20 backdrop-blur border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <option value="low" className="bg-gray-800">
              Low Priority
            </option>
            <option value="medium" className="bg-gray-800">
              Medium Priority
            </option>
            <option value="high" className="bg-gray-800">
              High Priority
            </option>
          </select>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 rounded-md hover:shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <FaSave /> Save
            </button>
            <button
              onClick={handleCancel}
              className="flex-1 bg-white/20 backdrop-blur text-white py-2 rounded-md hover:bg-white/30 flex items-center justify-center gap-2 transition-all"
            >
              <FaTimes /> Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white/20 backdrop-blur border border-white/30 rounded-lg p-4 mb-3 shadow-lg transition-all hover:shadow-xl ${
        todo.completed ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggleComplete(todo.id)}
          className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            todo.completed
              ? "bg-green-500 border-green-500"
              : "border-white/50 hover:border-white"
          }`}
        >
          {todo.completed && <FaCheck size={12} className="text-white" />}
        </button>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3
              className={`text-lg font-semibold text-white ${
                todo.completed ? "line-through text-white/60" : ""
              }`}
            >
              {todo.title}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="text-white/70 hover:text-red-400 transition-colors"
              >
                <FaTrash />
              </button>
            </div>
          </div>

          {todo.description && (
            <p
              className={`text-white/80 mb-2 ${todo.completed ? "line-through" : ""}`}
            >
              {todo.description}
            </p>
          )}

          <div className="flex items-center gap-2 text-sm">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[todo.priority]}`}
            >
              {todo.priority.toUpperCase()}
            </span>
            <span className="text-white/60 text-xs">
              {new Date(todo.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
