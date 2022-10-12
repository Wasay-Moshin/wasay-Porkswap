import React from "react";
import { GrMedium } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
function Footers() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div>
              <img src="Assests/forkswap.png" alt="" width={"30%"}></img>
            </div>
            <br/>
            <div>
              <p>
                Decentralized Spot and Futures <br />
                Trading on Binance Smart Chain
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <GrMedium size={"30px"} />&nbsp;&nbsp;
              <AiOutlineTwitter size={"30px"} />&nbsp;&nbsp;
              <FaFacebookF size={"30px"} />&nbsp;&nbsp;
              <BsYoutube size={"30px"} />&nbsp;&nbsp;
              <FaTelegram size={"30px"} />
            </div>
            <br/>
            <div>
              <a href="mailto:exchange@porkswap.finance">
                exchange@porkswap.finance
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>Copyright © 2022 PorkSwap.finance</p>
        </div>
      </div>
    </div>
  );
}

export default Footers;
