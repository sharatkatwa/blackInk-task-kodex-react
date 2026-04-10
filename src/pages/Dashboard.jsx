import { Ellipsis, File, FileText, Plus } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import DashboardCard from "../components/DashboardCard";
import { UseAuth } from "../context/AuthContext";
import { UseArt } from "../context/ArticleContext";

const Dashboard = () => {
  const { LoggedInUser } = UseAuth();
  const { articles } = UseArt();
  const myArticles = articles.filter((elem) => elem.authorId === LoggedInUser.id);
  const publishedMyArt = myArticles.reduce((acc, elem) => {
    return acc + (elem.published === true);
  }, 0);
  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-muted font-medium">Manage your articles, {LoggedInUser.name}</p>
        </div>
        <NavLink
          to={"/dashboard/new"}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap btn-primary active:scale-[.95]"
        >
          <Plus size={24} />
          New Article
        </NavLink>
      </div>
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="bg-muted/10 flex flex-col gap-6 rounded-xl border border-gray-500/20 py-6 shadow-sm">
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 pb-2">
            <div className="text-muted font-medium text-sm">Total Articles</div>
            <div className="font-bold text-3xl">{myArticles.length}</div>
          </div>
        </div>
        <div className="bg-muted/10 flex flex-col gap-6 rounded-xl border border-gray-500/20 py-6 shadow-sm">
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 pb-2">
            <div className="text-muted font-medium text-sm">published</div>
            <div className="font-bold text-green-500 text-3xl">{publishedMyArt}</div>
          </div>
        </div>
        <div className="bg-muted/10 flex flex-col gap-6 rounded-xl border border-gray-500/20 py-6 shadow-sm">
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 pb-2">
            <div className="text-muted font-medium text-sm">Drafts</div>
            <div className="font-bold text-muted text-3xl">{myArticles.length - publishedMyArt}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {myArticles.map(elem => <DashboardCard key={elem.id} article={elem} />)}
        {/* <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard /> */}
       {myArticles.length < 1 && <div className="w-full border rounded-xl text-center bg-gray-500/5 border-gray-500/20 flex flex-col items-center justify-center gap-2 px-4 py-10">
          <FileText size={50} className="mb-5" />
          <h2 className="font-bold text-xl font-geist">No articles yet</h2>
          <p className="text-muted">Start writing your first article</p>
          <NavLink
            to={"/dashboard/new"}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap btn-primary active:scale-[.95]"
          >
            <Plus size={24} />
            Create Article
          </NavLink>
        </div>}
      </div>
    </div>
  );
};

export default Dashboard;
