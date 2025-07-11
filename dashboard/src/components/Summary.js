import React from "react";

function Summary() {
  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>
      <div className="section">
        <span>
          <p><i class="ri-time-line"></i>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.4k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.04k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div>
        <span className="section">
          <p><i class="ri-bank-card-line"></i>Holdings(13)</p>
        </span>
        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>
            </p>
            <p>
              Investment <span>29.49k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
}

export default Summary;
