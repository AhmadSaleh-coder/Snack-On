import React from "react";
import useSheetData from "../../useSheetData.tsx";
import FoodCard from "../../Components/Food/FoodCard.tsx";

interface FoodItem {
  id: number; // Adjust the type of id based on your data
  Name: string;
  Price: number;
  Category: string;
  // Add other properties as needed
}

const FoodPage = () => {
  const { sheetData, loading } = useSheetData();

  console.log("sheetData", sheetData);
  return (
    <div>
      <h1>Helllllooooo</h1>
      {loading && <p>Loading...</p>}
      {!loading && sheetData && (
        <div>
          {sheetData.map((foodItem: FoodItem) => (
            <FoodCard
              key={foodItem.id} // Make sure to use a unique key for each item
              foodName={foodItem.Name}
              price={foodItem.Price}
              category={foodItem.Category}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default FoodPage;
