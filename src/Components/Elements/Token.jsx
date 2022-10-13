import React from "react";

function Token() {
  return (
    <div className="token-bg1">
      <div className="conatiner">
        <div className="row">
          <div className="text-center mt-5 mb-5">
            <h1>
              Token&nbsp;
              <span className="color">Distribution</span>
            </h1>
          </div>

          <div className="col-md-6 m-auto">
            <div className="token-bg2">
              <div className="text-center">
                <h5>
                  <strong>50%</strong>
                </h5>
                <strong>Liquidity Rewards (Locked)</strong>
              </div>
              <div className="text-center Liquidity">
                <h5>
                  <strong>10%</strong>
                </h5>
                <strong>Liquidity</strong>
              </div>
              <div className="text-center growth-hacking">
                <h5>
                  <strong>10%</strong>
                </h5>
                <strong>Growth Hacking</strong>
              </div>
              <div className=" text-center team-locked">
                <h5>
                  <strong>10%</strong><br/>
                </h5>
                <strong>Team - locked</strong>
              </div>
              <div className=" text-center public-sale">
                <h5>
                  <strong>20%</strong><br/>
                </h5>
                <strong>Public Sale</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Token;
