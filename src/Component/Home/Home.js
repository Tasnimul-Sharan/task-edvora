import React from "react";
import Orders from "../Orders/Orders";
import Users from "../Users/Users";
// import Products from "../";
import Banner from "./Banner";
import Products from "./Products";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Products />
      <Orders />
      <Users />
    </div>
  );
};

export default Home;
