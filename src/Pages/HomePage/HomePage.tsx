// homepage.tsx
import React from "react";
import useSheetData from "../../useSheetData.tsx";
import CategoryCard from "../../Components/Category/CategoryCard.tsx";

type FoodData = {
  Category: string;
  CategoryImage: string;
  // Add other properties as needed
};

const Homepage = () => {
  const { sheetData, loading } = useSheetData();
  const uniqueCategories = Array.from(
    new Set((sheetData as FoodData[]).map((food) => food.Category))
  ).map((category) => ({
    name: category,
    CategoryImage: (sheetData as FoodData[]).find(
      (food) => food.Category === category
    )?.CategoryImage,
  }));

  return (
    <div className="app-container">
      <h1>Data from Google Sheet</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="food-list">
          {uniqueCategories.map((category) => (
            <CategoryCard
              key={category.name} // Make sure to use a unique key
              categoryName={category.name}
              img={category.CategoryImage}
            />
          ))}
          {/* Additional code can be added here if needed */}
        </div>
      )}
    </div>
  );
};

export default Homepage;
