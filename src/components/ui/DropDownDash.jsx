import { Eye, EyeClosed, Pencil, Trash2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import { UseArt } from "../../context/ArticleContext";

const DropDownDash = ({ article }) => {
  const { updateArticle, deleteArticle } = UseArt();

  const handleUpdate = () => {
    const updatedArticle = { ...article, published: !article.published };
    updateArticle(updatedArticle);
  };

  const navigate = useNavigate();
  return (
    <div className="absolute top-[60%] right-0   mt-2 w-40 bg-[var(--bg)] rounded-lg shadow-lg border border-gray-500/40 z-50 transition-all duration-300 text-[var(--text)]">
      <div className="p-2">
        {article.published && (
          <button
            onClick={() => navigate(`/blog/${article.id}`)}
            className="w-full text-left px-3 py-2 hover:bg-primary/50 rounded flex items-center gap-5 cursor-pointer border-b border-gray-500/20"
          >
            <Eye size={15} /> View
          </button>
        )}
        <button
          onClick={() => navigate(`/dashboard/edit/${article.id}`)}
          className="w-full text-left px-3 py-2 hover:bg-primary/50 rounded flex items-center gap-5 cursor-pointer border-b border-gray-500/20"
        >
          <Pencil size={15} /> <span>Edit</span>
        </button>

        <button
          onClick={handleUpdate}
          className="w-full text-left px-3 py-2 hover:bg-primary/50 rounded flex items-center gap-5 cursor-pointer border-b border-gray-500/20"
        >
          {!article.published ? (
            <>
              {" "}
              <Eye size={15} /> <span>Publish</span>
            </>
          ) : (
            <>
              <EyeClosed size={15} />
              <span>Unpublish</span>{" "}
            </>
          )}
        </button>

        <button
          onClick={() => deleteArticle(article.id)}
          className="w-full text-left px-3 py-2 hover:bg-primary/50 text-red-500 rounded flex items-center gap-5 cursor-pointer"
        >
          <Trash2 size={15} /> <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default DropDownDash;
