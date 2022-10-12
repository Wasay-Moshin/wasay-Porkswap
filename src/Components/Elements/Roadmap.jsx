import React from "react";

function Roadmap() {
  return (
    <div className="roadmap">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12">
            <h1>
              Product&nbsp;
              <span className="color">Road</span>
            </h1>
          </div>
          <div>
            <img
              className="img-fluid"
              src="Assests/porkswap-timeline.png"
              alt=""
              width={"70%"}
            />
          </div>
          <hr />
          <div className="col-lg-8 mt-5">
            <img src="Assests/gov.png" alt="" width={"80%"} />
          </div>
          <div className="col-lg-4 mt-5">
            <div>
              <h2>Governance Platform</h2>
              <div>
                <a
                  className="btn btn-warning btn-md pl-3 pr-3 "
                  href="https://voting.porkswap.finance/"
                >
                  Launched, Start Voting Now
                </a>
                <br/>
                <div className="text-start">
                <b>You'll be able to vote for:</b>
                  <ul >
                    <li>Change in underlying protocol</li>
                    <li>Change in pricing oracle</li>
                    <li>Change in futures funding rate</li>
                    <li>Change in platform fees</li>
                    <li>Change inlist/de-list tokens</li>
                    <li>Propose new features</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
