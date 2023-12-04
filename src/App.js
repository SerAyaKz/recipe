import React from "react";
import { Home, Random, Trend, Recipe } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/random" element={<Random />} />
      <Route path="/trend" element={<Trend />} />
      <Route path="/recipe/:recipe_id" element={<Recipe />} />
    </Routes>
  </BrowserRouter>
);

export default App;
