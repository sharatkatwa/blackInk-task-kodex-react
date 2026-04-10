import { Save, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UseArt } from "../context/ArticleContext";
import { nanoid } from "nanoid";
import { useParams } from "react-router";

const EditArticleForm = () => {
  const { id } = useParams();
  const { saveArticle, getArticle } = UseArt();

  const article = getArticle(id);

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
    },
  });

  const [isPublish, setIsPublish] = useState(true);
  const [tags, setTags] = useState(article.tags || []);
  const [tagValue, setTagValue] = useState("");
  const [tagError, setTagError] = useState(null);

  //   console.log(tags);
  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagValue.trim() !== "") {
      e.preventDefault();
      if (tags.length >= 5) {
        setTagError("Max 5 tags allowed");
        return;
      }

      const newTag = tagValue.trim();

      if (!tags.includes(newTag)) setTags((prev) => [...prev, newTag]);

      setTagValue("");
    }
  };
  const removeTag = (elem) => {
    const filteredTags = tags.filter((tag) => tag !== elem);
    setTags(filteredTags);
    setTagError(null);
  };

  useEffect(() => {
    setValue("tags", tags);
  }, [tags, setValue]);

  const handleData = (data) => {
    const id = nanoid();
    const articleData = { ...data, id, published: isPublish };
    saveArticle(articleData);
  };

  return (
    <div className="article-form-card">
      <h4 className="text-xl font-bold tracking-tighter">Create New Article</h4>
      <form className="space-y-6" onSubmit={handleSubmit(handleData)}>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="title" className="input-label">
            Title
          </label>
          <input
            {...register("title", { required: "title is required" })}
            type="text"
            name="title"
            className="input"
            placeholder="Enter compelling Title..."
          />
          {errors.title && <p className="text-red-500 text-semibold text-sm">{errors.title.message}</p>}
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="title" className="input-label">
            Excerpt
          </label>
          <textarea
            {...register("excerpt", { required: "excerpt is required" })}
            name="excerpt"
            className="input"
            placeholder="Write a brief summary of your article..."
          />
          <p className="text-xs text-muted">A short description that appears on the blog listing</p>
          {errors.excerpt && <p className="text-red-500 text-semibold text-sm">{errors.excerpt.message}</p>}
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="title" className="input-label">
            Content
          </label>
          <textarea
            {...register("content", { required: "content is required" })}
            name="content"
            className="input font-geist-mono text-sm"
            placeholder="Write your article content here... (MarkDown supported)"
          />
          <p className="text-xs text-muted">Supports Markdown: ## for headers, **bold**, *italic*, `code`, etc.</p>
          {errors.content && <p className="text-red-500 text-semibold text-sm">{errors.content.message}</p>}
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="tags" className="input-label">
            Tags
          </label>
          <div className="flex flex-wrap items-center gap-4">
            {tags.length > 0 &&
              tags.map((e, idx) => (
                <div key={idx} className=" flex items-center w-fit bg-gray-500/10 rounded-full px-2 py-1 text-xs">
                  {e}
                  <X size={12} onClick={() => removeTag(e)} />
                </div>
              ))}
          </div>
          {tagError && <p className="text-sm text-red-500 font-medium">{tagError}</p>}
          <input
            value={tagValue}
            onChange={(e) => setTagValue(e.target.value)}
            onKeyDown={handleTagKeyDown}
            type="text"
            className="input"
            placeholder="Add tags (press Enter to add)"
          />
          <p className="text-xs text-muted">Add up to 5 tags to help readers find your article</p>
        </div>

        <input type="hidden" {...register("tags")} />

        <div className="flex items-center justify-end gap-5">
          <button
            onClick={() => setIsPublish(false)}
            type="submit"
            className="btn gap-2 border border-gray-500/20 hover:bg-gray-500/10 font-semibold"
          >
            <Save size={20} /> Save to Draft
          </button>
          <button
            type="submit"
            onClick={() => {
              setIsPublish(true);
            }}
            className="btn btn-primary gap-2 "
          >
            <Send size={20} /> Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditArticleForm;
