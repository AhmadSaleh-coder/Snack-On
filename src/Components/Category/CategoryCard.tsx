import React from "react";
import Card from "react-bootstrap/Card";
import "./CategoryCard.css";

function CategoryCard({ categoryName, img }) {
  return (
    <div className="Category-Card">
      <Card>
        <Card.Img variant="top" src={img} width={"50%"} />
        <Card.Body>
          <Card.Title>{categoryName}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CategoryCard;
