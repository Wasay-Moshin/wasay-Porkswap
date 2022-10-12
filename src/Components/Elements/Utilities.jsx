import React from "react";

function Utilities() {
  return (
    <div className="utilities">
      <div className="container">
        <div className="text-center mb-5">
          <h1>
            $PSWAP&nbsp;
            <span className="color">Utilities</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-md-4 shad ">
            <div className="text-start">
              <img src="Assests/u1.png" alt="" width={"80px"} />
              <h5>Governance</h5>
              <p>
                Vote to modify underlying protocol, change in pricing oracle,
                futures funding rate, platform fees, list/de-list tokens, new
                features
              </p>
            </div>
          </div>
          <div className="col-md-4  shad">
            <div className="text-start">
              <img src="Assests/u2.png" alt="" width={"80px"} />
              <h5>Incentives</h5>
              <p>
                Liquidity providers will be incentivized in $PSWAP for their
                participation in spot and leverage liquidity pools, and LP
                tokens can be staked for ARR of around 125%.
              </p>
            </div>
          </div>
          <div className="col-md-4 shad">
            <div className="text-start">
              <img src="Assests/u3.png" alt="" width={"80px"} />
              <h5>Deflation</h5>
              <p>
                With a fixed supply of 1 million tokens, and only 200,000 in
                circulation, $PSWAP token will increase in value overtime since
                it'll be scarce and the team will buy back and burn tokens from
                platform revenue generated through spot and futures trading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utilities;
