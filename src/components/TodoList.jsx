import React from "react";
import TodoItem from "./TodoItem";
import { FaClipboardList } from "react-icons/fa";

const TodoList = ({ todos, onToggleComplete, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <FaClipboardList className="mx-auto text-white/40 text-5xl mb-4" />
        <p className="text-white/60 text-lg">No tasks found</p>
        <p className="text-white/40">Create a new task to get started!</p>
      </div>
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
