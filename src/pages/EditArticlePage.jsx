import { ArrowLeft } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import EditArticleForm from "../components/EditArticleForm";

const EditArticlePage = () => {
  return (
    <>
      <NavLink to={"/dashboard"} className="text-muted hover:text-white flex items-center gap-2 cursor-pointer">
        <ArrowLeft size={15} /> Back to dashboard
      </NavLink>
      <EditArticleForm/>
    </>
  );
};

export default EditArticlePage;
