import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; // Correct import statement
import "./CategoryCard.css";
import { BiChevronRight } from "react-icons/bi";

function CategoryCard({ categoryName, img }) {
  return (
    <div className="Category-Card mb-5">
      <Card>
        <Card.Img variant="top" src={img} width={"70%"} />
        <Card.Body className="card-body">
          <Button variant="primary" className="btn">
            {categoryName} <span><BiChevronRight className="next-arrow" /></span>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CategoryCard;
