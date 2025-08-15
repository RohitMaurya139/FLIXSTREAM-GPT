import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import "./index.css";

const Body = lazy(() => import("./component/Body")); // Dynamic import

const App = () => {
  return (
    <Provider store={appStore}>
      <Suspense fallback={<div>Loading...</div>}>
        <Body />
      </Suspense>
    </Provider>
  );
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
