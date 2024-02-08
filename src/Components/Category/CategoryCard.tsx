import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; // Correct import statement
import "./CategoryCard.css";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function CategoryCard({ categoryName, img }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the corresponding food category page
    navigate(`/food/${categoryName}`);
  };
  
  return (
    <div className="Category-Card mb-5">
      <Card>
        <Card.Img variant="top" src={img} width={"70%"} />
        <Card.Body className="card-body">
          <Button variant="primary" className="btn" onClick={handleButtonClick}>
            {categoryName} <span><BiChevronRight className="next-arrow" /></span>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CategoryCard;
