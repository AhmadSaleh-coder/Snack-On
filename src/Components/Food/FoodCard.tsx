// FoodCard.tsx
import React from 'react';
import './FoodCard.css'; // Import your CSS file for styling

interface FoodCardProps {
  foodName: string;
  price: number;
  category: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ foodName, price, category }) => {
  return (
    <div className="food-card">
      <div className="food-header">
        <h3 className="food-name">{foodName}</h3>
        <p className="food-price">${price}</p>
      </div>
      <p className="food-description">{category}</p>
    </div>
  );
};

export default FoodCard;
