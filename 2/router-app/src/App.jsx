import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Container } from 'react-bootstrap';
import Contant from './Contant';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
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
          <Contant />
        </>
      )
      }
    </>

  )
}

export default App
