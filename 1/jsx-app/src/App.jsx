import React from 'react';
import image from './assets/image/ReactImage.jpg'

function App()
{
    return (
        <>
        <p style={{color:"#5c015e",fontSize:"50px",marginLeft:"5%"}}> JSX <br></br> Components <br></br> And Props</p>
        <img src={image} alt="ReactImage" style={{marginLeft:"20%"}} />
        </>
    )
}
export default App

