import React, { useState, useMemo } from "react";

function Themes() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("white");
  const doubleNumber = useMemo(() => {
    return slowFunc(number)
  }, [number]);

  const themeStyles = {
    backgroundColor: theme,
    color: getReverseTheme(theme),
  };

  return (
    <>
      <input
        type={"number"}
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <button onClick={() => setTheme(prevTheme => getReverseTheme(prevTheme))}>Change theme</button>
      <br />
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );

  function getReverseTheme(bgTheme) {
    if (bgTheme === "black") return "white";
    else return "black";
  }

  function slowFunc(num) {
    console.log("Doubling number...");
    for (let i = 0; i < 1000000000; i++);
    console.log("Doubled!");
    return num * 2;
  }
}

export default Themes;
