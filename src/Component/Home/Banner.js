import { Button } from "bootstrap";
import React from "react";
import banner from "../../Images/Black-Friday-Social-Media-Banner-06.jpg";

const Banner = () => {
  return (
    <section class="container-fluid p-5 d-flex bg-dark text-info align-items-center">
      <div className="row">
        <div class="text-start col-lg-6">
          <h1>
            We have the World Class <br /> Best products
            <br />
            {/* <span> of Winter</span> */}
          </h1>
          <p className="text-white">Buy your favourite product right now !</p>
          {/* <Button></Button> */}
        </div>
        <div className="mb-5 col-lg-6">
          <img className="img-fluid w-50" src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
