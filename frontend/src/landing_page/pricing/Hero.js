import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>Charges</h1>
        <h3 className="text-muted">List of all charges and taxes</h3>
        <div className="col-4">
          <img src="images/pricingEquity.svg " style={{width:"80%"}}></img>
          <h1 className="fs-3">Free equity delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="images/intradayTrades.svg" style={{width:"80%"}}></img>
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 ">
          <img src="images/pricingEquity.svg" style={{width:"80%"}}></img>
          <h1 className="fs-3">Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
