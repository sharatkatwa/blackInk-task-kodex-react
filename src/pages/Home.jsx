import React from "react";
import BlogCards from "../components/BlogCards";
import { UseArt } from "../context/ArticleContext";

const Home = () => {
    const {articles} = UseArt()
    const publishedArticles = articles.filter(elem => elem.published === true)
  return (
    <div>
      <section className="mb-12 text-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to <span className="text-primary">Inkwell</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted font-medium">
          Discover thoughtful articles on technology, programming, and software engineering from passionate writers.
        </p>
      </section>
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Latest Articles</h2>
          <span className="text-sm text-muted">{publishedArticles.length} articles</span>
        </div>
        
        {/* BOLG Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {publishedArticles.map(elem => <BlogCards article={elem} />)}
            {/* <BlogCards/>
            <BlogCards/>
            <BlogCards/>
            <BlogCards/>
            <BlogCards/>     */}
        </div>
      </section>
    </div>
  );
};

export default Home;
