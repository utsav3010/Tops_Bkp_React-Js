import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Contant() {

  return (
    <>
      <Container fluid className='mt-5'>
        <Row>
          <div className='col-md-5 shadow ms-5 p-4 mt-5'>
            <img src="https://www.godfrey.com/application/files/2516/5594/4141/sg-blog-trdshw-pr-p1.gif" alt="" className='img-fluid'/>
          </div>

          <div className='col-md-6 shadow p-4 mt-5'>
            <h1 className='text-center mt-5'> <ins>Home</ins> </h1>
            <p className='mt-4 text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt at ad consequatur delectus tempora cumque veritatis autem, vel laboriosam voluptate placeat mollitia voluptatem. Soluta quaerat odit doloribus deserunt sint! Dignissimos? </p>

          </div>
        </Row>
      </Container>
    </>
  )
}

export default Contant
