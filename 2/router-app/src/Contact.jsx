import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from './Header'
function Contact() {

  return (
    <>
    <Header />
    <Container fluid className='mt-5'>
        <Row>
          <div className='col-md-5 shadow ms-5 p-4 mt-5'>
            <img src="https://static.wixstatic.com/media/fa1267_8d5e4df280eb42f496d1c6544a8eee8b~mv2.gif" alt="" className='img-fluid'/>
          </div>

                <div className="col-md-6 shadow p-4 mt-5">
                <h1 className='text-center mt-2'> <ins>Contact</ins> </h1>
                    <h6 className='mt-4 text-center'>Best services Provides in Rajkot area</h6>
                     <form>
                        <div className="form-group mt-3">
                            <input type="text" placeholder="Name *" className="form-control border border-dark" />
                        </div>

                        <div className="form-group mt-3">
                            <input type="text" placeholder="Email *" className="form-control border border-dark" />
                        </div>

                        <div className="form-group mt-3">
                            <input type="text" placeholder="Phone *" className="form-control border border-dark" />
                        </div>

                        <div className="form-group mt-3">
                            <input type="text" placeholder="Subject *" className="form-control border border-dark" />
                        </div>

                        <div className="form-group mt-3">
                            <textarea type="text" placeholder="Address *" className="form-control border border-dark"></textarea>
                        </div>
                        <div className="form-group mt-3 text-center">
                            <input type="submit"  className="w-100 btn btn-md btn-dark bg-dark text-white" value="Send" />
                        </div>
                     </form>
                </div>
        </Row>
      </Container>
    </>
  )
}

export default Contact
