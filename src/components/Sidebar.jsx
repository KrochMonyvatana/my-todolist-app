import React from "react";
import { FaHome, FaFolder, FaPlus, FaTrash } from "react-icons/fa";

const Sidebar = ({
  groups,
  currentGroup,
  onGroupChange,
  onAddGroup,
  onDeleteGroup,
}) => {
  return (
    <div className="w-64 bg-black/30 backdrop-blur-xl text-white h-screen fixed left-0 top-0 overflow-y-auto border-r border-white/20">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          <FaFolder /> Todo Lists
        </h2>

        <div className="mb-6">
          <button
            onClick={onAddGroup}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <FaPlus size={14} /> New Group
          </button>
        </div>

        <div className="space-y-2">
          <div
            onClick={() => onGroupChange("all")}
            className={`p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 ${
              currentGroup === "all"
                ? "bg-gradient-to-r from-purple-500/50 to-pink-500/50 backdrop-blur border border-white/30"
                : "hover:bg-white/10"
            }`}
          >
            <FaHome /> All Tasks
          </div>

          <div className="pt-4 border-t border-white/20">
            <h3 className="text-sm uppercase text-white/60 mb-3 px-2">
              My Groups
            </h3>
            {groups.map((group) => (
              <div
                key={group.id}
                className={`group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                  currentGroup === group.id
                    ? "bg-gradient-to-r from-purple-500/50 to-pink-500/50 backdrop-blur border border-white/30"
                    : "hover:bg-white/10"
                }`}
              >
                <div
                  className="flex items-center gap-3 flex-1"
                  onClick={() => onGroupChange(group.id)}
                >
                  <FaFolder /> {group.name}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteGroup(group.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 hover:text-red-400 transition-all"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
