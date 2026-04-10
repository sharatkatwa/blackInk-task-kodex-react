import { CalendarDays, User } from "lucide-react";
import React from "react";

const BlogCards = () => {
  return (
    <div className="border border-gray-500/10 bg-gray-500/5 rounded-lg py-5 px-5 hover:border-primary shadow hover:shadow-xl hover:shadow-primary/20 group">
      <div className="header mb-5 ">
        <div className="tags flex items-start justify-start flex-wrap gap-3 mb-5">
          <div className="rounded bg-gray-500/20 rounded-full px-2 py-1 text-xs font-medium">noting</div>
          <div className="rounded bg-gray-500/20 rounded-full px-2 py-1 text-xs font-medium">noting lksjfdl</div>
          <div className="rounded bg-gray-500/20 rounded-full px-2 py-1 text-xs font-medium">noting lksjfdl</div>
          <div className="rounded bg-gray-500/20 rounded-full px-2 py-1 text-xs font-medium">noting lksjfdl</div>
          <div className="rounded bg-gray-500/20 rounded-full px-2 py-1 text-xs font-medium">noting lksjfdl</div>
        </div>
        <h2 className="text-balance text-xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary">
          Getting Started with React Hooks
        </h2>
      </div>
      <div className=" pb-4">
        <p className="line-clamp-3 text-muted">
          Learn how React Hooks can simplify your component logic and make your code more reusable.
        </p>
      </div>
      <div className="  flex items-center justify-between text-sm text-muted">
        <div className="flex items-center gap-1.5">
          <User size={24} />
          <span>Sarah Chen</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CalendarDays size={24} />
          <span>January 15, 2024</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
