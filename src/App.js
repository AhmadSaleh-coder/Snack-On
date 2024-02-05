// App.js
import React from "react";
import "./App.css";
import useSheetData from "./useSheetData.tsx";
import FoodCard from "./FoodCard.tsx";

const App = () => {
  const { sheetData, loading } = useSheetData();

  return (
    <div className="app-container">
      <h1>Data from Google Sheet</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="food-list">
          {sheetData.map((food, index) => (
            <FoodCard
              key={index}
              foodName={food.Name}
              price={food.Price}
              category={food.Category}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
