import { createContext, useContext, useState } from "react";
import { UseAuth } from "./AuthContext";

const Art = createContext();

const defaultArticles = [
  {
    authorId: "a1B2c3D4e5",
    authorName: "Liam Carter",
    content:
      "# The Rise of Artificial Intelligence\n\nArtificial Intelligence (AI) is transforming the world rapidly.\n\n## What is AI?\nAI refers to machines that can perform tasks that typically require human intelligence.\n\n## Key Benefits\n- Automation of tasks\n- Improved efficiency\n- Better decision making\n\n## Conclusion\nAI is not the future — it is the present.",
    date: "April 10, 2026",
    excerpt: "A quick overview of how AI is changing the world.",
    id: "1a2b3c4d5e",
    published: true,
    tags: ["AI", "technology", "future"],
    title: "The Rise of Artificial Intelligence",
  },
  {
    authorId: "f6G7h8I9j0",
    authorName: "Sophia Bennett",
    content:
      "# Healthy Lifestyle Tips\n\nLiving a healthy lifestyle is essential for long-term well-being.\n\n## Daily Habits\n- Drink plenty of water\n- Exercise regularly\n- Get enough sleep\n\n## Mental Health\nTake breaks and practice mindfulness.\n\n## Conclusion\nSmall habits make a big difference.",
    date: "April 10, 2026",
    excerpt: "Simple tips to improve your daily lifestyle.",
    id: "2b3c4d5e6f",
    published: true,
    tags: ["health", "lifestyle", "wellness"],
    title: "Healthy Lifestyle Tips",
  },
  {
    authorId: "k1L2m3N4o5",
    authorName: "Ethan Walker",
    content:
      "# Introduction to Web Development\n\nWeb development is the backbone of the internet.\n\n## Frontend\n- HTML\n- CSS\n- JavaScript\n\n## Backend\nHandles server logic and databases.\n\n## Conclusion\nStart small and keep building projects.",
    date: "April 10, 2026",
    excerpt: "Beginner guide to web development.",
    id: "3c4d5e6f7g",
    published: true,
    tags: ["web", "development", "programming"],
    title: "Introduction to Web Development",
  },
  {
    authorId: "p6Q7r8S9t0",
    authorName: "Olivia Martinez",
    content:
      "# Travel the World\n\nTraveling opens your mind and soul.\n\n## Benefits of Traveling\n- Learn new cultures\n- Meet new people\n- Gain experiences\n\n## Tips\nPlan ahead and travel light.\n\n## Conclusion\nTravel is the best education.",
    date: "April 10, 2026",
    excerpt: "Why traveling is important for personal growth.",
    id: "4d5e6f7g8h",
    published: true,
    tags: ["travel", "adventure", "lifestyle"],
    title: "Travel the World",
  },
  {
    authorId: "u1V2w3X4y5",
    authorName: "Noah Thompson",
    content:
      "# The Power of Reading\n\nReading books expands your knowledge.\n\n## Why Read?\n- Improves vocabulary\n- Enhances imagination\n- Reduces stress\n\n## Types of Books\n- Fiction\n- Non-fiction\n- Self-help\n\n## Conclusion\nMake reading a daily habit.",
    date: "April 10, 2026",
    excerpt: "Discover the importance of reading books.",
    id: "5e6f7g8h9i",
    published: true,
    tags: ["books", "education", "learning"],
    title: "The Power of Reading",
  },
];

export const ArticleProvider = ({ children }) => {
 
  const [articles, setArticles] = useState(JSON.parse(localStorage.getItem("all arts")) || defaultArticles);

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

    return;
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
    setArticles(updatedArts);
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
