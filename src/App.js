// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import statement

import Homepage from "./Pages/HomePage/HomePage.tsx";
import FoodPage from "./Pages/FoodPage/FoodsPage.tsx";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {" "}
          {/* Change from Switch to Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/Food/:categoryName" element={<FoodPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
