import React from 'react'

function Seen() {
  return (
        <div className="Seen">
      <div className="container text-center pt-5 mt-0">
        <div>
          <h3>As Seen on</h3>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3 col-12">
            <div>
              <img src="Assests/yahoo.png" alt="" width={"50%"} />
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div>
              <img src="Assests/logo-bloomberg.svg" alt="" width={"50%"} />
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div>
              <img src="Assests/logo-benzinga.webp" alt="" width={"50%"} />
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div>
              <img src="Assests/news-btc.png" alt="" width={"50%"} />
            </div>
          </div>
        </div>
        <br/>
        <hr />
      </div>
    </div>
  )
}

export default Seen