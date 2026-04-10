import { Ellipsis } from "lucide-react";
import React, { useState } from "react";
import DropDownDash from "./ui/DropDownDash";

const DashboardCard = ({ article }) => {
  const [openDD, setOpenDD] = useState(false);

  return (
    <div className="relative w-full border rounded-xl bg-gray-500/5 border-gray-500/20 flex items-center justify-between p-4">
      <div className="right space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-xl font-semibold">{article.title}</h3>
          {article.published ? (
            <span className="flex items-center justify-center bg-primary rounded-md font-medium text-black text-sm px-2 ">
              Published
            </span>
          ) : (
            <span className="flex items-center justify-center bg-muted rounded-md font-medium text-black text-sm px-2 ">
              draft
            </span>
          )}
        </div>
        <h4 className="truncate text-muted text-md">{article.excerpt}</h4>
        <p className=" text-xs text-muted">Last updated: {article.date}</p>
      </div>
      <div
        onClick={() => setOpenDD((prev) => !prev)}
        className="left p-2 hover:bg-primary/70 hover:text-black rounded-xl"
      >
        <Ellipsis size={20} />
      </div>
      {openDD && <DropDownDash article={article} />}
    </div>
  );
};

export default DashboardCard;
