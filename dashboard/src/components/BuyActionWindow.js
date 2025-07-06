import React from "react";
import { Link } from "react-router-dom";
import './BuyActionWindow.css'
function BuyActionWindow() {
  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input type="number" name="qty" id="qty" />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input type="number" name="price" id="price" step="0.05" />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue">Buy</Link>
          <Link className="btn btn-grey">Cancel</Link>
        </div>
      </div>
    </div>
  );
}

export default BuyActionWindow;
