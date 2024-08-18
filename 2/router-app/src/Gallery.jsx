import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from './Header'
function Gallery() {

  return (
    <>
    <Header />
    <Container fluid className='mt-5'>
        <Row>
          <div className='col-md-5 shadow ms-5 p-4 mt-5'>
            <img src="https://cdn.dribbble.com/users/183082/screenshots/4279947/illo_browse_2.gif" alt="" className='img-fluid'/>
          </div>

          <div className='col-md-6 shadow p-4 mt-5'>
            <h1 className='text-center mt-5'> <ins>Gallery</ins> </h1>
            <p className='mt-4 text-center'> React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom. </p>


          </div>
        </Row>
      </Container>
    </>
  )
}

export default Gallery
