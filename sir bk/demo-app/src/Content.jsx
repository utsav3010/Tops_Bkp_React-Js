import React from "react";
import { Container,Row } from "react-bootstrap";
function Content()
{
    return(
        <>
        <Container className="p-5 mt-5">
            <Row>
                <div className="col-md-5 shadow p-4">
                    <img src="https://www.icegif.com/wp-content/uploads/2023/03/icegif-1622.gif" className="img-fluid" />
                </div>
                <div className="col-md-7 p-4">
                    <h2>Welcome Home Page</h2>
                    <p>GIPHY is the platform that animates your world. Find the GIFs, Clips, and Stickers that make your conversations more positive, more expressive, and more </p>

                    <p>Download this free GIF of Welcome Greeting Text from Pixabay's vast library of royalty-free stock images,</p>
                </div>
            </Row>
        </Container>
  
        </>
    )
}
export default Content