import React, { useContext } from "react";
import ContextController, {ThemeContext} from "./ContextController";

function ThemeWithContext() {
  
  const {theme, changeTheme} = useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: theme,
    color: getReverseTheme(theme),
  };
  
  return (
    <>
      <div style={themeStyle}>function theme</div>
      <button onClick={changeTheme}>Change theme</button>
    </>
  );

  function getReverseTheme(bgTheme) {
    if (bgTheme === "black") return "white";
    else return "black";
  }
}
export default ThemeWithContext;
