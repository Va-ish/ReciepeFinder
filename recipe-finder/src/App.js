
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Recipe from "./screens/RecipePage";

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<Recipe />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;

