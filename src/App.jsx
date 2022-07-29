import React from 'react';
import Content from "./pages/Content.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About.jsx";
import Navbar from "./components/UI/Navbar/Navbar.jsx";
import BeerPage from './components/UI/BeerPage/BeerPage.jsx';


function App() {
  


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path={"/beer/:currentPage"} element={<Content />} />
          <Route exact path={"/beer/:currentPage/:id"} element={<BeerPage />} />

          <Route path="*" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
