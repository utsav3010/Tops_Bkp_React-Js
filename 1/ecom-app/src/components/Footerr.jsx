import React from "react";
import { MDBFooter, MDBRow, MDBContainer } from 'mdb-react-ui-kit'

function Footerr() {
    return (
        <>
            <MDBFooter className="bg-dark mt-5">
                <MDBContainer>
                    <MDBRow>
                        <div className="col-md-4 text-white mt-5">
                            <h1>Ecom-App</h1>
                            <span className="bi bi-whatsapp fs-1"></span>
                            <span className="bi bi-twitter fs-1 ms-2"></span>
                            <span className="bi bi-instagram fs-1 ms-2"></span>
                            <span className="bi bi-facebook fs-1 ms-2"></span>
                        </div>
                        <div className="col-md-4 text-white mt-5">
                            <ul className="nav navbar">
                                <li className=""><a href="" className="text-white"> Home </a></li>
                                <li className=""><a href="" className="text-white"> Womens </a></li>
                                <li className=""><a href="" className="text-white">  Mens </a></li>
                                <li className=""><a href="" className="text-white"> Contact </a></li>
                                <li className=""><a href="" className=" text-white"> Privacy Terms </a></li>
                                <input type="text" placeholder="Enter email for subscribe *" className="form-control" />
                            </ul>
                        </div>
                        <div className="col-md-4 text-white mt-5">
                            <center>
                                <h1>Contact Us</h1>
                                <p>San Francisco, California 400 <br></br>Castro St, San Francisco, CA (+1) <br></br>686-868-9999</p>
                            </center>
                        </div>
                    </MDBRow>
                </MDBContainer>
            </MDBFooter>
        </>
    )
}
export default Footerr