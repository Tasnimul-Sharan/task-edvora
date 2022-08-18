import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary text-white p-3">
      <p>
        <b>
          Copyright © {new Date().getFullYear()} All rights reserved. <br />
          Dream Shop
        </b>
      </p>
    </div>
  );
};

export default Footer;
