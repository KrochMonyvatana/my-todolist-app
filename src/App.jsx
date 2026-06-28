import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import SearchBar from "./components/SearchBar";
import useLocalStorage from "./hooks/useLocalStorage";
import { generateId, getCurrentTimestamp } from "./utils/helpers";

function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [groups, setGroups] = useLocalStorage("groups", [
    { id: "work", name: "Work" },
    { id: "personal", name: "Personal" },
    { id: "shopping", name: "Shopping" },
  ]);
  const [currentGroup, setCurrentGroup] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const addTodo = (todoData) => {
    const newTodo = {
      id: generateId(),
      ...todoData,
      groupId: currentGroup === "all" ? groups[0]?.id : currentGroup,
      createdAt: getCurrentTimestamp(),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const editTodo = (id, updatedData) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedData } : todo,
      ),
    );
  };

  const addGroup = () => {
    const groupName = prompt("Enter group name:");
    if (groupName && groupName.trim()) {
      const newGroup = {
        id: generateId(),
        name: groupName.trim(),
      };
      setGroups([...groups, newGroup]);
    }
  };

  const deleteGroup = (groupId) => {
    if (
      window.confirm(
        "Delete this group? All tasks in this group will also be deleted.",
      )
    ) {
      setGroups(groups.filter((g) => g.id !== groupId));
      setTodos(todos.filter((todo) => todo.groupId !== groupId));
      if (currentGroup === groupId) {
        setCurrentGroup("all");
      }
    }
  };

  const getFilteredTodos = () => {
    let filtered = todos;
    if (currentGroup !== "all") {
      filtered = filtered.filter((todo) => todo.groupId === currentGroup);
    }
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (todo) =>
          todo.title.toLowerCase().includes(term) ||
          todo.description.toLowerCase().includes(term),
      );
    }
    return filtered;
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-800">
      <Sidebar
        groups={groups}
        currentGroup={currentGroup}
        onGroupChange={setCurrentGroup}
        onAddGroup={addGroup}
        onDeleteGroup={deleteGroup}
      />

      <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
        <div className="max-w-4xl mx-auto">
          <header className="mb-6 md:mb-8 backdrop-blur-lg bg-gray-800/50 rounded-2xl p-4 md:p-6 shadow-xl border border-gray-700">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">
              {currentGroup === "all"
                ? "All Tasks"
                : groups.find((g) => g.id === currentGroup)?.name || "Tasks"}
            </h1>
            <p className="text-gray-300 text-sm md:text-lg">
              Organize your tasks efficiently with style
            </p>
          </header>

          <div className="backdrop-blur-lg bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700 mb-4 md:mb-6">
            <TodoForm onAddTodo={addTodo} />
          </div>

          <div className="backdrop-blur-lg bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700 p-3 md:p-4 mb-4 md:mb-6">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>

          <div className="backdrop-blur-lg bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700 p-4 md:p-6">
            <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
              <h2 className="text-lg md:text-xl font-semibold text-white">
                Tasks ({filteredTodos.length})
              </h2>
              <button
                onClick={() => {
                  if (window.confirm("Delete all completed tasks?")) {
                    setTodos(todos.filter((todo) => !todo.completed));
                  }
                }}
                className="text-xs md:text-sm text-gray-300 hover:text-white bg-gray-700/50 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-lg transition-all"
              >
                Clear Completed
              </button>
            </div>

            <TodoList
              todos={filteredTodos}
              onToggleComplete={toggleComplete}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
