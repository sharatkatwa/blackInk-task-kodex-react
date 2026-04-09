import React from "react";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return <>
    <div className="bg-[var(--bg)] text-4xl text-[var(--text)]  transition-colors duration-300">Hello World</div>
    <ThemeToggle/>
  </>;
};

export default App;
