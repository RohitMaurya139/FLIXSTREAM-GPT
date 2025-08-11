import React from "react";
import Body from "./component/Body";
import { createRoot } from "react-dom/client";
import "./index.css"
const App = () => {
  return <Body />;
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
