import React from "react";
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import image1 from '../assets/image/1.png'
import image2 from '../assets/image/p1.png'
import image3 from '../assets/image/p2.png'
import image4 from '../assets/image/p3.png'
import image5 from '../assets/image/p4.png'
import image6 from '../assets/image/p5.png'
import image7 from '../assets/image/p6.png'


function Contant() {
    return (
        <>
            <MDBContainer className="mt-5">
                <MDBRow>
                    <div className="col-md-4 bg-dark text-white p-4 box">
                        <center>
                            <span className="bi bi-fire"></span>
                            <h1>Popular Product</h1>
                            <p>For more details visit Our branch</p>
                        </center>
                    </div>
                    <div className="col-md-7 bg-primary ms-5 text-white">
                        <MDBRow>
                            <div className="col-md-6">
                                <h1 className="mt-5 ms-2">New Lifestyle</h1>
                                <h4 className="mt-2 ms-2">Buy Now</h4>
                                <a className="text-dark p-2 btn btn-sm btn-white bg-white w-50 ms-2 mt-2">Order Now</a>
                            </div>
                            <div className="col-md-6">
                                <img src={image1} alt="" style={{ width: "90%", height: "300px" }} />
                            </div>
                        </MDBRow>
                    </div>
                </MDBRow>

                <MDBRow>
                    <div className="col-md-4 bg-white shadow p-4 mt-5 border border-2 dark">
                        <center>
                            <img src={image2} alt="" style={{ width: "70%", height: "250px" }} />
                            <h2 className="mt-2">Addidas t-shirts</h2>
                            <h4 className="mt-2"> <del> Rs.5000 </del> &nbsp; Rs.2500 </h4>
                            <button type="button" className="btn btn-sm btn-dark text-white p-2 mt-2">Click for Details</button>
                        </center>
                    </div>


                    <div className="col-md-4 bg-white shadow p-4 mt-5 border border-2 dark">
                        <center>
                            <img src={image3} alt="" style={{ width: "70%", height: "250px" }} />
                            <h2 className="mt-2">Addidas t-shirts</h2>
                            <h4 className="mt-2"> <del> Rs.5000 </del> &nbsp; Rs.2500 </h4>
                            <button type="button" className="btn btn-sm btn-dark text-white p-2 mt-2">Click for Details</button>
                        </center>
                    </div>


                    <div className="col-md-4 bg-white shadow p-4 mt-5 border border-2 dark">
                        <center>
                            <img src={image4} alt="" style={{ width: "70%", height: "250px" }} />
                            <h2 className="mt-2">Addidas t-shirts</h2>
                            <h4 className="mt-2"> <del> Rs.5000 </del> &nbsp; Rs.2500 </h4>
                            <button type="button" className="btn btn-sm btn-dark text-white p-2 mt-2">Click for Details</button>
                        </center>
                    </div>


                    <div className="col-md-4 bg-white shadow p-4 mt-5 border border-2 dark">
                        <center>
                            <img src={image5} alt="" style={{ width: "70%", height: "250px" }} />
                            <h2 className="mt-2">Addidas t-shirts</h2>
                            <h4 className="mt-2"> <del> Rs.5000 </del> &nbsp; Rs.2500 </h4>
                            <button type="button" className="btn btn-sm btn-dark text-white p-2 mt-2">Click for Details</button>
                        </center>
                    </div>


                    <div className="col-md-4 bg-white shadow p-4 mt-5 border border-2 dark">
                        <center>
                            <img src={image6} alt="" style={{ width: "70%", height: "250px" }} />
                            <h2 className="mt-2">Addidas t-shirts</h2>
                            <h4 className="mt-2"> <del> Rs.5000 </del> &nbsp; Rs.2500 </h4>
                            <button type="button" className="btn btn-sm btn-dark text-white p-2 mt-2">Click for Details</button>
                        </center>
                    </div>

                    <div className="col-md-4 bg-white shadow p-4 mt-5 border border-2 dark">
                        <center>
                            <img src={image7} alt="" style={{ width: "70%", height: "250px" }} />
                            <h2 className="mt-2">Addidas t-shirts</h2>
                            <h4 className="mt-2"> <del> Rs.5000 </del> &nbsp; Rs.2500 </h4>
                            <button type="button" className="btn btn-sm btn-dark text-white p-2 mt-2">Click for Details</button>
                        </center>
                    </div>
                </MDBRow>

            </MDBContainer>
        </>
    )
}
export default Contant