import React from "react";

const EditArticlePage = () => {
  return (
    <>
      <NavLink to={"/dashboard"} className="text-muted hover:text-white flex items-center gap-2 cursor-pointer">
        <ArrowLeft size={15} /> Back to dashboard
      </NavLink>
      
    </>
  );
};

export default EditArticlePage;
