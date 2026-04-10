import React from 'react'
import { useNavigate } from 'react-router'
import { UseAuth } from '../../context/AuthContext'
import { LayoutDashboard, LogOut } from 'lucide-react'

const DropDownNav = () => {
const {logoutFun, LoggedInUser} = UseAuth()
const navigate = useNavigate()
  return (
     <div className="absolute top-[130%] right-0   mt-2 w-56 bg-[var(--bg)] rounded-lg shadow-lg border border-gray-500/40 z-50 transition-all duration-300 text-[var(--text)]">
                  <div className="p-3 border-b border-gray-500/60 ">
                    <p className="font-semibold ">{LoggedInUser.name}</p>
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
  )
}

export default DropDownNav