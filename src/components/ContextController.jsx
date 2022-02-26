import {createContext, useState } from "react";

export const ThemeContext = createContext();

function ContextController({ children }) {
  const [theme, setTheme] = useState("white");

  const changeTheme = () => {
    setTheme((prevTheme) => getReverseTheme(prevTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );

  function getReverseTheme(bgTheme) {
    if (bgTheme === "black") return "white";
    else return "black";
  }
}

export default ContextController;
