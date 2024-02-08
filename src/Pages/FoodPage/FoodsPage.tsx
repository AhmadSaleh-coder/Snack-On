import React from "react";
import useSheetData from "../../useSheetData.tsx";
import FoodCard from "../../Components/Food/FoodCard.tsx";
import { useParams } from "react-router-dom";

interface FoodItem {
  Name: string;
  Price: number;
  Category: string;
  Image: string;
  // Add other properties as needed
}

const FoodPage = () => {
  const { categoryName } = useParams();
  console.log("categoryName", categoryName);
  const { sheetData, loading } = useSheetData();
  const filteredData = sheetData.filter(
    (foodItem: FoodItem) => foodItem.Category === categoryName
  );

  console.log("filteredData", filteredData);
  return (
    <div>
      <h1>Helllllooooo</h1>
      {loading && <p>Loading...</p>}
      {!loading && sheetData && (
        <div>
          {filteredData.map((foodItem: FoodItem, index) => (
            <FoodCard
              key={index} // Make sure to use a unique key for each item
              foodName={foodItem.Name}
              price={foodItem.Price}
              category={foodItem.Category}
              Image={foodItem.Image}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default FoodPage;
