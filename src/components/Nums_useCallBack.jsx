import React, { useCallback, useState } from 'react'
import List from './List_useCallBack';

function Nums() {

  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState('white');

  const getItems = useCallback(() => {
    if (isNaN(number))
      return [0, 1, 2]
    return [number, number + 1, number + 2]
  }, [number]);

  const themeStyle = {
    backgroundColor: theme,
    color: getReverseTheme(theme)
  };

  return (
    <div style={themeStyle}>
      <input 
        type={"number"} value={number} 
        onChange={e => setNumber(parseInt(e.target.value))} 
      />
      <button onClick={() => setTheme(prevTheme => getReverseTheme(theme))}>
        Change theme
      </button>
      <List getItems={getItems} />
    </div>
  );

  function getReverseTheme(bgTheme) {
    if (bgTheme === "black") return "white";
    else return "black";
  }
}

export default Nums;
