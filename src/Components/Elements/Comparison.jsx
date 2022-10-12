import React from "react";
import {BsCheckLg} from "react-icons/bs";
import {MdOutlineCancel} from "react-icons/md";
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
function Comparison() {
  return (
    <div className="comparison-bg">
        <div className="text-center py-4">
            <h1>Comparison Table</h1><br />
            <h4>We are building whole ecosystem tools for future identities and data.</h4>
        </div>
      <MDBContainer className="container py-5">
        <MDBTable
          responsive
          striped
          className=" text-successtable-border border-light"
        >
          <MDBTableHead className="border-light">
            <tr>
              <th scope="col"></th>
              <th scope="col ">
                <img className="img-fluid" width={"130px"} src="Assests/uniswap.png" alt="uniswap" />
              </th>
              <th scope="col">
              <img className="img-fluid" width={"130px"} src="Assests/pancakeswap.png" alt="uniswap" />
              </th>
              <th scope="col">
              <img className="img-fluid" width={"130px"} src="Assests/forkswap.png" alt="uniswap" />
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <th scope="row">Automated Market Maker </th>
              <td>
                <BsCheckLg  icon="check" className="text-success" />
              </td>
              <td>
                <BsCheckLg  icon="check" className="text-success" />
              </td>
              <td>
                <BsCheckLg  icon="check" className="text-success" />
              </td>
            </tr>
            <tr>
              <th scope="row">Spot Trading</th>
              <td>
                <BsCheckLg  icon="check" className="text-success" />
              </td>
              <td>
                <BsCheckLg  icon="check" className="text-success" />
              </td>
              <td>
                <BsCheckLg  icon="check" className="text-success" />
              </td>
            </tr>
            <tr>
              <th scope="row">Futures Trading </th>
              <td>
                <MdOutlineCancel  icon="check" className="text-danger" />
              </td>
              <td>
                <MdOutlineCancel  icon="times" className="text-danger" />
              </td>
              <td>
                <MdOutlineCancel  icon="times" className="text-danger" />
              </td>
            </tr>
            <tr>
              <th scope="row">Governance</th>
              <td>
                <BsCheckLg  icon="check" className="text-success" />
              </td>
              <td>
                <BsCheckLg  icon="times" className="text-success" />
              </td>
              <td>
                <BsCheckLg  icon="times" className="text-success" />
              </td>
            </tr>
            <tr>
              <th scope="row">Leveraged Trading</th>
              <td>
                <MdOutlineCancel  icon="check" className="text-danger" />
              </td>
              <td>
                <MdOutlineCancel  icon="times" className="text-danger" />
              </td>
              <td>
                <BsCheckLg  icon="times" className="text-success" />
              </td>
            </tr>
            <tr>
              <th scope="row">Gas Fees</th>
              <td>
                <p className="text-danger">$71.53</p>
              </td>
              <td>
                <p className="text-danger">$0.42</p>
              </td>
              <td>
                <p className="text-success"><b>$0.42</b></p>
              </td>
            </tr>
            <tr>
              <th scope="row">Inflationary</th>
              <td>
                <BsCheckLg  icon="check" className="text-danger" />
              </td>
              <td>
                <BsCheckLg  icon="times" className="text-danger" />
              </td>
              <td>
                <BsCheckLg  icon="times" className="text-success" />
              </td>
            </tr>
            <tr>
              <th scope="row">Deflationary</th>
              <td>
                <MdOutlineCancel  icon="check" className="text-danger" />
              </td>
              <td>
                <MdOutlineCancel  icon="check" className="text-danger" />
              </td>
              <td>
                <BsCheckLg  icon="check" className="text-success" />
              </td>
            </tr>
            <tr>
              <th scope="row">Fixed Supply</th>
              <td>
                <BsCheckLg  icon="check" className="text-success" />
              </td>
              <td>
                <MdOutlineCancel  icon="times" className="text-danger" />
              </td>
              <td>
                <BsCheckLg  icon="times" className="text-success" />
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </div>
  );
}
export default Comparison;