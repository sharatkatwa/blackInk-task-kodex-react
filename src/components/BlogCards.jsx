import { CalendarDays, User } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const BlogCards = ({article}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() =>navigate(`/blog/${article.id}`)} className=" flex flex-col justify-between border border-gray-500/10 bg-gray-500/5 rounded-lg py-5 px-5 hover:border-primary shadow hover:shadow-xl hover:shadow-primary/20  group ">
      <div className="top">
      <div className="header mb-5 ">
        <div className="tags flex items-start justify-start flex-wrap gap-3 mb-5">
          {article.tags.map(elem =>(<div className="rounded bg-gray-500/20 rounded-full px-2 py-1 text-xs font-medium">{elem}</div>))}
          
        </div>
        <h2 className="text-balance text-xl font-semibold leading-tight tracking-tight group-hover:text-primary">
          {article.title}
        </h2>
      </div>
      <div className=" pb-4">
        <p className="line-clamp-3 text-muted">
          {article.excerpt}
        </p>
      </div>
      </div>
      
      <div className="  flex items-center justify-between text-sm text-muted">
        <div className="flex items-center gap-1.5">
          <User size={24} />
          <span>{article.authorName}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CalendarDays size={24} />
          <span className="whitespace-nowrap">{article.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
