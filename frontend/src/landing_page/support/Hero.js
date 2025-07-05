import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="">Track Tickets</a>
      </div>
      <div className="row  " id="featureToken">
        <div className="col-7 p-5 mb-3">
          <h5 className="mb-4">Search for an answer or browse help topics to create a ticket</h5>

          <input placeholder="Eg. how do I acctivate F&O" />
          <br />
          <a href="">
            Track account opening{" "}
          </a>
          <a href="" className="mx-3" >Track segment activation</a>
          <a href="" className="mx-3"> Intraday margins </a><br></br>
          <a href=""> Kite user manual</a>
        </div>
        <div className="col-5 p-5">
          <h5>Featured</h5>
          <ol>
            <li className="mt-3">
              <a href="" >
                {" "}
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
            </li >
            <li className="mt-4">
              {" "}
              <a href="" >
                Revision in expiry day of Index and Stock derivatives contracts
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
