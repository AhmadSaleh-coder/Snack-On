// App.js
import React from "react";
import "./App.css";
import useSheetData from "./useSheetData.tsx";
import CategoryCard from "./Components/Category/CategoryCard.tsx";

const App = () => {
  const { sheetData, loading } = useSheetData();
  const uniqueCategories = Array.from(
    new Set(sheetData.map((food) => food.Category))
  ).map((category) => ({
    name: category,
    CategoryImage: sheetData.find((food) => food.Category === category)
      ?.CategoryImage,
  }));

  console.log("uniqueCategories", uniqueCategories);
  return (
    <div className="app-container">
      <h1>Data from Google Sheet</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="food-list">
          {uniqueCategories.map((category) => (
            <CategoryCard
              categoryName={category.name}
              img={category.CategoryImage}
            />
          ))}
          {/* {sheetData.map((food, index) => (
            <FoodCard
              key={index}
              foodName={food.Name}
              price={food.Price}
              category={food.Category}
            />
          ))} */}
        </div>
      )}
    </div>
  );
};

export default App;
