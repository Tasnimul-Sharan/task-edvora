import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Table } from "react-bootstrap";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="container my-5">
      <h1 className="text-primary">All Orders</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Order_id</th>
            <th>Product_id</th>
            <th>User_id</th>
            <th>Quantity</th>
            <th>Order_date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} order={order}>
              <td>{order.order_id}</td>
              <td>{order.product_id}</td>
              <td>{order.user_id}</td>
              <td>{order.quantity}</td>
              <td>{order.order_date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
