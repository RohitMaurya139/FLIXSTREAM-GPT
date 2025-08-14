// Import React library
import React from "react";

// Import the main app body component (contains routing & authentication handling)
import Body from "./component/Body";

// Import React DOM function for rendering (React 18+ uses createRoot API)
import { createRoot } from "react-dom/client";

// Import global styles
import "./index.css";

// Import Redux's Provider component to connect React to the Redux store
import { Provider } from "react-redux";

// Import the configured Redux store
import appStore from "./utils/appStore";

/**
 * App Component
 * =============
 * This is the root-level component of your React app.
 *
 * - Wraps the entire app inside Redux <Provider> so that
 *   all components can access the Redux store.
 * - Renders the <Body /> component that contains all routing logic.
 */
const App = () => {
  return (
    // Provider makes the Redux store available to all nested components
    <Provider store={appStore}>
      {/* Body contains the main application UI including routes like Login & Browse */}
      <Body />
    </Provider>
  );
};

// Export App for possible testing/use elsewhere
export default App;

/**
 * React DOM Rendering Section
 * ---------------------------
 * - Select the HTML element with id="root" from public/index.html
 * - Create a root for rendering using React 18's createRoot API
 * - Render the <App /> component inside it
 */
const root = createRoot(document.getElementById("root"));

// Render the React app
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode> 
);
