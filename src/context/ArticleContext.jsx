import { createContext, useContext, useState } from "react";
import { UseAuth } from "./AuthContext";

const Art = createContext();

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState(JSON.parse(localStorage.getItem("all arts")) || []);

  const { LoggedInUser } = UseAuth();
  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const saveArticle = (data) => {
    const artData = { ...data, date: formattedDate, authorName: LoggedInUser.name, authorId: LoggedInUser.id };
    const updatedArts = [...articles, artData];
    console.log("publish data ==>", updatedArts);
    setArticles(updatedArts);
    localStorage.setItem("all arts", JSON.stringify(updatedArts));
    
    return
  };

  const updateArticle = (data) => {
    const artData = { ...data, date: formattedDate };
    const updatedArts = articles.map((elem) => (artData.id === elem.id ? artData : elem));
    setArticles(updatedArts);
    localStorage.setItem("all arts", JSON.stringify(updatedArts));
    
    return;
  };
  const deleteArticle = (id) => {
    const updatedArts = articles.filter((elem) => elem.id !== id);
    setArticles(updateArticle);
    localStorage.setItem("all arts", JSON.stringify(updatedArts));
    return;
  };

  const getArticle = (id) => {
    return articles.find((elem) => elem.id === id);
  };
  //   const saveDraftFun = (data) => {
  //     const artData = { ...data, date: formattedDate, author: LoggedInUser };
  //     const updatedDraft = [...draftArt, artData];
  //     console.log("draft data ==>", updatedDraft);
  //     setDraftArt(updatedDraft);
  //     localStorage.setItem("draft art", JSON.stringify(updatedDraft));
  //   };
  return (
    <Art.Provider value={{ saveArticle, articles, setArticles, getArticle, updateArticle, deleteArticle }}>
      {children}
    </Art.Provider>
  );
};

export const UseArt = () => useContext(Art);
