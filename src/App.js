import "./App.css";
import React from "react";
// import Counter from "./components/Counter_useState";
import NavBar from "./components/NavBar_useEffect";
import Themes from "./components/Themes_useMemo";
import Form from "./components/Form_useRef";
import ContextController from "./components/ContextController";
import ThemeWithContext from "./components/ThemeWithContext";
import ToDo from "./components/ToDo_useReducer";
import Nums from "./components/Nums_useCallBack";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <NavBar/> */}
      {/* <Themes /> */}
      {/* <Form /> */}
      {/* <ContextController>
        <ThemeWithContext/>
      </ContextController> */}
      {/* <ToDo /> */}
      {/* <Nums /> */}
    </div>
  );
}

export default App;
