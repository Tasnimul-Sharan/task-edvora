import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Product = ({ product }) => {
  const { order_id } = useParams();
  const { product_id, name, stock, selling_price } = product;

  return (
    <CardGroup className="g-3 col-sm-12 col-md-4 col-lg-3 mb-3">
      <Card className="border-0 shadow-lg" style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Title>Product id: {product_id}</Card.Title>
          <h5>{name}</h5>
          <p>Stock: {stock}</p>
          <p>Selling price: {selling_price}</p>
        </Card.Body>
        <Card.Footer className="border-0">
          <Button variant="success">Add to Cart</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default Product;
