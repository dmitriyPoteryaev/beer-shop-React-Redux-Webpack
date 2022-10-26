import React from "react";
import Content from "./pages/Content/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Opportunities from "./pages/Opportunities/Opportunities";
import BeerPage from "./components/UI/BeerPage/BeerPage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route exact path={"/beer/:currentPage"} element={<Content />} />

          <Route exact path={"/beer/:currentPage/:name"} element={<BeerPage />} />

          <Route path="*" element={<About />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
