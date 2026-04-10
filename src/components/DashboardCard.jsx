import { Ellipsis } from "lucide-react";
import React, { useState } from "react";
import DropDownDash from "./ui/DropDownDash";

const DashboardCard = () => {
  const [openDD, setOpenDD] = useState(false);

  return (
    <div className="relative w-full border rounded-xl bg-gray-500/5 border-gray-500/20 flex items-center justify-between p-4">
      <div className="right space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-xl font-semibold">this is the title of the article </h3>
          <span className="flex items-center justify-center bg-primary rounded-md font-medium text-black text-sm px-2 ">
            Published
          </span>
        </div>
        <h4 className="truncate text-muted text-md">this is small description of blog site</h4>
        <p className=" text-xs text-muted">Last updated: Apr 8, 2026</p>
      </div>
      <div
        onClick={() => setOpenDD((prev) => !prev)}
        className="left p-2 hover:bg-primary/70 hover:text-black rounded-xl"
      >
        <Ellipsis size={20} />
      </div>
      {openDD && <DropDownDash />}
    </div>
  );
};

export default DashboardCard;
