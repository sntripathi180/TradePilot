import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  linkName,
 
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-3">
            <a href={tryDemo}>{linkName}</a>
            
          </div>
          
        </div>
        <div className="col-6 ">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
