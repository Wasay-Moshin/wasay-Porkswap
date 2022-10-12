import React from 'react'

function Features() {
  return (
    <div>
      <div className="conatiner pb-5 mb-4">
        <div className="row feature">    
          <div className="col-lg-12 mt-5 mb-5"></div>
          <div className="row text-center">
            <div className="col-lg-4 boxes">
              <img
                className="mb-4"
                src="Assests/f1.svg"
                alt=""
                width={"80px"}
              />
              <h5>Deflationary</h5>
              <p>
                While other spot platform tokens mint 750,000 tokens per day,
                we're aiming to burn 10% everyday through the revenue generated
                from the platform. Increasing the value of token over 30X within
                a year.
              </p>
            </div>
            <div className="col-lg-4 boxes shad">
              <img
                className="mb-4"
                src="Assests/f2.svg"
                alt=""
                width={"80px"}
              />
              <h5>Community Governance</h5>
              <p>
                We believe in democratizing access to finance, what else can be
                a better way to give entire power to the community. Create
                custom polls, vote for good ones, bring new ideas to the table,
                change the world for better.
              </p>
            </div>
            <div className="col-lg-4 boxes">
              <img
                className="mb-4"
                src="Assests/f3.svg"
                alt=""
                width={"80px"}
              />
              <h5>Future Trading</h5>
              <p>
                Bringing forward the true meaning of De-Fi that's decentralizing
                current financial products, bringing derivatives through futures
                trading so you can increase your returns on profit. Buy long or
                sell short, it's on you.
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-4 boxes shad">
              <img
                className="mb-4"
                src="Assests/f6.svg"
                alt=""
                width={"80px"}
              />
              <h5>Spot Trading</h5>
              <p>
                Improved automated market maker to provide instant fulfillment
                of orders with less slippage, exchange your favourite tokens
                with 10 times less gas than Ethereum.
              </p>
            </div>
            <div className="col-lg-4 boxes">
              <img
                className="mb-4"
                src="Assests/f4.svg"
                alt=""
                width={"80px"}
              />
              <h5>Lottery</h5>
              <p>
                Try your luck by gambling the extra tokens that you made by
                providing liquidity, with a chance to 100X your investment.
              </p>
            </div>
            <div className="col-lg-4 boxes shad">
              <img
                className="mb-4"
                src="Assests/f5.svg"
                alt=""
                width={"80px"}
              />
              <h5>Security</h5>
              <p>
                While other projects are getting DNS hijacked, we ensure the
                security of our platform from DNS all the way to Smart Contract
                are state-of-the-art secured
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features