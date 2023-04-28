import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar";
import Home from "./Components/Home";
import SingleArticle from "./Components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/article/:id" element={<SingleArticle/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
