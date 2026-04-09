import { Ellipsis, Plus } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-muted font-medium">Manage your articles, Rae Guzman</p>
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
            <div className="font-bold text-3xl">2</div>
          </div>
        </div>
        <div className="bg-muted/10 flex flex-col gap-6 rounded-xl border border-gray-500/20 py-6 shadow-sm">
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 pb-2">
            <div className="text-muted font-medium text-sm">published</div>
            <div className="font-bold text-green-500 text-3xl">2</div>
          </div>
        </div>
        <div className="bg-muted/10 flex flex-col gap-6 rounded-xl border border-gray-500/20 py-6 shadow-sm">
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 pb-2">
            <div className="text-muted font-medium text-sm">Drafts</div>
            <div className="font-bold text-muted text-3xl">2</div>
          </div>
        </div>
      </div>
      
      
      <div className="flex flex-col gap-5">
          {/* <div className="w-full border rounded-xl bg-gray-500/10 border-gray-500/20 flex items-center justify-between p-4">
            <div className="right space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-xl font-semibold">this is the title of the article </h3>
              <span className="flex items-center justify-center bg-primary rounded-md font-medium text-black text-sm px-2 ">Published</span>
            </div>
            <h4 className="truncate text-muted text-md">this is small description of blog site</h4>
            <p class=" text-xs text-muted">Last updated: Apr 8, 2026</p>
            </div>
            <div className="left p-2 hover:bg-primary/70 hover:text-black rounded-xl"><Ellipsis size={20} /></div>
          </div>
          <div className="w-full border rounded-xl bg-gray-500/10 border-gray-500/20 flex items-center justify-between p-4">
            <div className="right space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-xl font-semibold">this is the title of the article </h3>
              <span className="flex items-center justify-center bg-primary rounded-md font-medium text-black text-sm px-2 ">Published</span>
            </div>
            <h4 className="truncate text-muted text-md">this is small description of blog site</h4>
            <p class=" text-xs text-muted">Last updated: Apr 8, 2026</p>
            </div>
            <div className="left p-2 hover:bg-primary/70 hover:text-black rounded-xl"><Ellipsis size={20} /></div>
          </div>
          <div className="w-full border rounded-xl bg-gray-500/10 border-gray-500/20 flex items-center justify-between p-4">
            <div className="right space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-xl font-semibold">this is the title of the article </h3>
              <span className="flex items-center justify-center bg-primary rounded-md font-medium text-black text-sm px-2 ">Published</span>
            </div>
            <h4 className="truncate text-muted text-md">this is small description of blog site</h4>
            <p class=" text-xs text-muted">Last updated: Apr 8, 2026</p>
            </div>
            <div className="left p-2 hover:bg-primary/70 hover:text-black rounded-xl"><Ellipsis size={20} /></div>
          </div> */}
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
         
      </div>
    </div>
  );
};

export default Dashboard;
