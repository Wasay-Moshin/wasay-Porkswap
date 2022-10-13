import React from "react";

function Hero() {
  return (
  <div>
    <div className="Hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h1>
                Decentralized Spot and
                <br /> Futures Trading on BSC
              </h1>
            </div>
            <div>
              <p>
                Automated market maker powered, taking De-Fi game to the next
                level. Make instant spot exchange, leveraged trades, provide
                liquidity to earn returns and rewards.
              </p>
            </div>
            <div>
              <a
                className="btn btn-warning btn-lg pl-4 pr-4 "
                href="https://app.porkswap.finance/swap?network=56"
              >
                Spot Trading Platform Launched 🚀
              </a>
            </div>
            <hr />
            <div>
              <a
                className="btn btn-danger"
                href="https://staking.porkswap.finance/"
              >
                Earn PSWAP
              </a>
              &nbsp;&nbsp;
              <a
                className="btn btn-danger"
                href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x42539f50c5f8a0c929e7895eb265391f58b22a19"
              >
                Trade on PCS
              </a>
              &nbsp;&nbsp;
              <a
                className="btn btn-danger"
                href="https://voting.porkswap.finance/"
              >
                Governance
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img
                className="img-fluid"
                src="Assests/porkswap-pink.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
