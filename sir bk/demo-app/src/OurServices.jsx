import React from "react";
import { Container,Row } from "react-bootstrap";
import Navbar from "./Navbar";
function Services()
{
    return(
        <>
        <Navbar />
        <Container className="p-5 mt-5">
            <Row>
                <div className="col-md-5 shadow p-4">
                    <img src="https://www.icegif.com/wp-content/uploads/2023/03/icegif-1622.gif" className="img-fluid" />
                </div>
                <div className="col-md-7 p-4">
                    <h2>Our services</h2>
                    <h3>Best services Provides in Rajkot area</h3>
                    <p>Brijesh Pandey is a INDIA based designer specialising in Web Developement,Web Designing,Web/UI Design, Graphic Design, Branding, Illustration & Photography. He has a worldwide client roster and his work is regulary featured in design related publications. Brijesh Pandey is also a regular speaker at design/tech conferences.</p>

                </div>
            </Row>
        </Container>
  
        </>
    )
}
export default Services