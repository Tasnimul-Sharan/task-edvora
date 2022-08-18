import React, { useEffect, useState } from "react";
import { Carousel } from "bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "react-bootstrap/Card";
import "swiper/css";
import { EffectFade } from "swiper";
import Marquee from "react-fast-marquee";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="my-5">
      <h1 className="text-primary">All Users</h1>
      <Marquee>
        {users.map((user) => (
          <Card className="g-2 border-0" style={{ width: "13rem" }}>
            <Card.Body>
              <Card.Title>User_id: {user.user_id}</Card.Title>

              <h5>{user.name}</h5>
            </Card.Body>
          </Card>
        ))}
      </Marquee>
    </div>
  );
};

export default Users;
