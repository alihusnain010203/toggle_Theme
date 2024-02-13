import React, { useState } from "react";
import { useContext } from "react";
import themeContext from "../../context/themeContext";
import "./Navbar.css";
const Navbar = () => {
  const { theme, setTheme } = useContext(themeContext);
  const [icon, setIcon] = useState("🌞");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setIcon("🌚");
    } else {
      setTheme("light");
      setIcon("🌞");
    }
  };
  return (
    <div className={`${theme}nav nav`}>
      <div className="logo">
        <h1>Tech OverFlow</h1>
      </div>
      <div className={`${theme}links`}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      <div className="toggleButton" style={{ paddingRight: "20px" }}>
        <button onClick={toggleTheme}>{icon}</button>
      </div>
    </div>
  );
};

export default Navbar;
