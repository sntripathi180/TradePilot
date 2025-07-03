import React from "react";

function Universe() {
  return (
    <div className="container text-center">
      <div className="row mt-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 d-flex flex-column gap-5 mt-5 mb-5">
          <div>
            <img src="images/smallcaselogo.png"></img >
          <p className="text-small text-muted mt-4" style={{fontSize:"13px"}}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
          </div>
          <div>
            <img src="images/zerodhafundhouse.png" style={{width:"40%"}}></img>
          <p className="text-small text-muted mt-4" style={{fontSize:"13px"}}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          </div>
        </div>
        <div className="col-4 d-flex flex-column gap-5 mt-5 mb-5">
          <div>
            <img src="images/sensibullLogo.svg"></img>
          <p className="text-small text-muted mt-4" style={{fontSize:"13px"}}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          </div>
          <div>
            <img src="images/streakLogo.png " style={{ width: "40%" }}></img>
          <p className="text-small text-muted mt-4" style={{fontSize:"13px"}}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
          </div>
        </div>
        <div className="col-4 d-flex flex-column gap-5 mt-5 mb-5" >
          <div>
            <img src="images/goldenpiLogo.png"></img>
          <p className="text-small text-muted mt-4"  style={{fontSize:"13px"}}>Bond trading platform</p>
          </div>
          <div>
            <img src="images/ditto-logo.png" style={{ width: "40%" }}></img>
          <p className="text-small text-muted mt-4" style={{fontSize:"13px"}}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
          </div>
        </div>
         <button className='p-3 fs-5 btn btn-primary  mb-5' style={{width:"20%",margin:"0 auto"}}>
      SignUp for free
    </button>
      </div>
    </div>
  );
}

export default Universe;
