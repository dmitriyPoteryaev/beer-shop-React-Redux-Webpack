import React from "react";
import Content from "./pages/Content/Content";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Opportunities from "./pages/Opportunities/Opportunities";
import BeerPage from "./pages/BeerPage/BeerPage.jsx";

import "../style/style.scss";

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route exact path={"/beer/:currentPage"} element={<Content />} />
          <Route exact path={"/beer/:currentPage/:name"} element={<BeerPage />} />
          <Route path="*" element={<About />} />
        </Routes>
      </HashRouter >
    </div>
  );
}

export default App;
