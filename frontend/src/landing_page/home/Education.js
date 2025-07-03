import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img src="images/education.svg" style={{width:"70%"}}></img>
        </div>

        <div className="col-6 ">
          <h1 className="fs-2 mb-5">Free and open market education</h1>
          <div className="mb-5">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              Varsity<i class="ri-arrow-right-long-line"></i>
            </a>
          </div>
          <div >
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              TradingQ&A<i class="ri-arrow-right-long-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
