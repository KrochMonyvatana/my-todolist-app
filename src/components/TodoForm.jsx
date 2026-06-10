import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTodo({
      title: title.trim(),
      description: description.trim(),
      priority,
      completed: false,
    });

    setTitle("");
    setDescription("");
    setPriority("medium");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Create New Task</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">
            Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title..."
            className="w-full px-4 py-2 bg-white/20 backdrop-blur border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description..."
            rows="3"
            className="w-full px-4 py-2 bg-white/20 backdrop-blur border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-white/90 text-sm font-medium mb-2">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-2 bg-white/20 backdrop-blur border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <option value="low" className="bg-gray-800">
              Low
            </option>
            <option value="medium" className="bg-gray-800">
              Medium
            </option>
            <option value="high" className="bg-gray-800">
              High
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
        >
          <FaPlus /> Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
