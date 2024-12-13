// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Index.jsx";
import {useState} from "react";
import Loader from "./components/Loader.jsx";

const App = () => {
  // To test the showLoading state, set the setShowLoading to true. The loader will be displayed.
  const [showLoading, setShowLoading] = useState(false);

//   return <h1>App Component</h1>;

  return (
      <BrowserRouter>
          {/*ShowLoading condition is true, show the Loader component*/}
          { showLoading ? <Loader /> : null }
          <Routes>
              <Route path="/" element={<Landing />} />
          </Routes>
      </BrowserRouter>
  );
};
export default App;
