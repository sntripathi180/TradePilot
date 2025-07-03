import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return <div className="container">
<div className="row mt-5">
<div className="col-6 ">
  <img src={imageURL}></img>
</div>
<div className="col-6 p-5 mt-5">
  <h1>{productName}</h1>
  <p>{productDescription}</p>
 <div className="mb-3">
   <a  href={tryDemo}>Try Demo</a>
  <a  href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
 </div>
 <div>
   <a  href={googlePlay}><img src="images/googlePlayBadge.svg"/></a>
  <a  href={appStore} style={{marginLeft:"50px"}}><img src="images/appstoreBadge.svg"/></a>
 </div>
</div>
</div>
  </div>;
}

export default LeftSection;
