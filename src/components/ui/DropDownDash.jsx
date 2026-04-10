import { Eye, Pencil, Trash2 } from "lucide-react";
import React from "react";

const DropDownDash = () => {
  return (
    <div className="absolute top-[60%] right-0   mt-2 w-40 bg-[var(--bg)] rounded-lg shadow-lg border border-gray-500/40 z-50 transition-all duration-300 text-[var(--text)]">
      <div className="p-2">
        <button className="w-full text-left px-3 py-2 hover:bg-primary/50 rounded flex items-center gap-5 cursor-pointer border-b border-gray-500/20">
          <Pencil size={15} /> <span>Edit</span>
        </button>

        <button className="w-full text-left px-3 py-2 hover:bg-primary/50 rounded flex items-center gap-5 cursor-pointer border-b border-gray-500/20">
          <Eye size={15} /> <span>Publish</span>
        </button>
        <button className="w-full text-left px-3 py-2 hover:bg-primary/50 text-red-500 rounded flex items-center gap-5 cursor-pointer">
          <Trash2 size={15} /> <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default DropDownDash;
