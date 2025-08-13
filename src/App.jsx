import React from "react";
import Body from "./component/Body";
import { createRoot } from "react-dom/client";
import "./index.css"
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const App = () => {

    return (
    <Provider store={appStore}>
    <Body />
  </Provider>  
  )};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
