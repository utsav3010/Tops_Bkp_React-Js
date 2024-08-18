import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from './Header'
function Services() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  });
  return (
    <>
      {loader ? (
        <Container>
          <p className='text-center'><img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="loder" /></p>
        </Container>
      ) : (
        <>
          <Header />
          <Container fluid className='mt-5'>
            <Row>
              <div className='col-md-5 shadow ms-5 p-4 mt-5'>
                <img src="https://i.gifer.com/1NTz.gif" alt="" className='img-fluid ms-5' />
              </div>

              <div className='col-md-6 shadow p-4 mt-5'>
                <h1 className='text-center mt-4'> <ins>Services</ins> </h1>
                <p className='mt-4 text-center'> React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom. </p>
              </div>
            </Row>
          </Container>
        </>
      )
      }
    </>
  )
}

export default Services
