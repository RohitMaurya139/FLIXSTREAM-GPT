import Body from "./component/Body";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import "./index.css";


const App = () => {
  return (
    <Provider store={appStore}>
   
        <Body />
      
    </Provider>
  );
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
