import React from "react";

function Coins() {
  return (
    <div className="coins">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-3 col-12">
            <img src="Assests/cmc-logo.png" alt="" width={"50%"} />
          </div>
          <div className="col-md-3 col-12">
            <img src="Assests/cg-logo.webp" alt="" width={"50%"} />
          </div>
          <div className="col-md-3 col-12">
            <img src="Assests/hb-logo.png" alt="" width={"50%"} />
          </div>
          <div className="col-md-3 col-12">
            <img src="Assests/cb-logo.png" alt="" width={"50%"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coins;
