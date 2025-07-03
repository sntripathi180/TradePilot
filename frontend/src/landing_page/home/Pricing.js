import React from "react";

function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-4">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            See Pricing <i class="ri-arrow-right-long-line"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 text-center">
          <div className="row">
            <div className="col-4 border p-2">
              <h1>₹0</h1>
              <p>Free account opening</p>
            </div>
            <div className="col-4 border p-2">
              <h1>₹0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-4 border p-2">
              <h1>₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
