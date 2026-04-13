import React from "react";
import { NavLink, useParams } from "react-router";
import { UseArt } from "../context/ArticleContext";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import Markdown from "react-markdown";

const Blogs = () => {
  const { id } = useParams();
  const { getArticle } = UseArt();
  const currentArticle = getArticle(id);
  return (
    <>
      <NavLink to={"/"} className="text-muted hover:text-white flex items-center gap-2 cursor-pointer mb-10">
        <ArrowLeft size={15} /> Back to Articles
      </NavLink>
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          {currentArticle.tags.map((elem, idx) => (
            <div
              key={idx}
              className="tag rounded-full text-sm px-3 py-1 bg-gray-500/20 flex items-center justify-center"
            >
              {elem}
            </div>
          ))}
        </div>

        {/* title */}
        <h1 className="text-3xl font-bold font-geist tracking-tight">{currentArticle.title}</h1>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1">
            <User size={20} /> {currentArticle.authorName}
          </span>
          <span className="flex items-center gap-1">
            <CalendarDays size={20} /> {currentArticle.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={20} /> 1 min read
          </span>
        </div>
        <div className="prose max-w-none font-geist dark:prose-invert">
          <Markdown>{currentArticle.content}</Markdown>
        </div>
      </div>
    </>
  );
};

export default Blogs;
