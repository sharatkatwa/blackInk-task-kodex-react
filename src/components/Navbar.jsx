import { LayoutDashboard, LogOut, PenLine } from "lucide-react";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { UseAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { LoggedInUser, logoutFun } = UseAuth();
  const navigate = useNavigate();
  const [openDD, setOpenDD] = useState(false);
  return (
    <div className="sticky  top-0 z-20 inset-x-0 backdrop-blur-xl border-b border-gray-500/40 h-16  ">
      <div className="max-w-7xl px-6 h-full mx-auto flex items-center justify-between">
        <div className="left flex items-center gap-2">
          <PenLine className="text-primary" size={28} />
          <h2 onClick={() =>navigate('/')} className="cursor-pointer text-2xl font-semibold tracking-tighter capitalize">blackink</h2>
        </div>
        <div className="right flex items-center gap-2">
          <ThemeToggle />
          {LoggedInUser ? (
            <div
              onClick={() => setOpenDD((prev) => !prev)}
              className="flex items-center gap-2 hover:bg-primary/40 px-2 py-[2px] rounded-lg"
            >
              <div className="pic rounded-full h-8 w-8 flex items-center justify-center text-white text-center font-bold bg-primary">
                {LoggedInUser.name[0]}
              </div>
              <p className="font-semibold">{LoggedInUser.name}</p>
            </div>
          ) : (
            <>
              <button onClick={() => navigate("/auth/login")} className=" btn-sec py-2 px-4 text-sm flex items-center">
                Login
              </button>
              <button onClick={() => navigate("/auth/signup")} className="btn-primary text-sm">
                Signup
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* dropdown menu */}
      {openDD && LoggedInUser && (
        <div className="absolute right-10 mt-2 w-56 bg-[var(--bg)] rounded-lg shadow-lg border border-gray-500/40 z-50 transition-all duration-300">
          <div className="p-3 border-b border-gray-500/60">
            <p className="font-semibold">{LoggedInUser.name}</p>
            <p className="text-sm text-gray-500">{LoggedInUser.email}</p>
            <p className="text-xs text-gray-400">{LoggedInUser.role}</p>
          </div>

          <div className="p-2">
            {LoggedInUser.role === "author" && (
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full text-left px-3 py-2 hover:bg-gray-500/20 rounded flex items-center gap-5 cursor-pointer"
              >
                <LayoutDashboard size={15} /> <span>Dashboard</span>
              </button>
            )}

            <button
              onClick={logoutFun}
              className="w-full text-left px-3 py-2 hover:bg-red-500/20 text-red-500 rounded flex items-center gap-5 cursor-pointer"
            >
              <LogOut size={15} /> <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
