import React from 'react'
import Header from './Header'
import { Button, Container, Row } from 'react-bootstrap'

const shopnow = [
  {
    id: "1-Shirt",
    photo: "https://spykar.com/cdn/shop/files/Q6OXsPY8F-8905566097841_1.webp?v=1717408313",
    brand: "Spyker",
    oldprice: "1550/-Rs",
    newprice: "1300/-Rs"
  },
  {
    id: "2-T-Shirt",
    photo: "https://assets.ajio.com/medias/sys_master/root/20231214/xIDk/657ad736afa4cf41f5cff63e/-473Wx593H-464531848-navy-MODEL.jpg",
    brand: "Ajio",
    oldprice: "1500/-Rs",
    newprice: "1300/-Rs"
  },
  {
    id: "3-Shirt",
    photo: "https://images-cdn.ubuy.co.in/63400407ad052c2c656c7cd6-lelebear-stretch-anti-wrinkle-shirt-men.jpg",
    brand: "Ubuy India",
    oldprice: "1000/-Rs",
    newprice: "800/-Rs"
  },
  {
    id: "4-T-Shirt",
    photo: "https://images.meesho.com/images/products/324446592/b9nml_512.jpg",
    brand: "Meesho",
    // oldprice: "2000/-Rs",
    newprice: "1500/-Rs"
  },
  {
    id: "5-Shirt",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTczcuaUMWfgktvjfJFJBcTSjVAq85K2igMQ&s",
    brand: "London Prints",
    oldprice: "2500/-Rs",
    newprice: "2000/-Rs"
  },
  {
    id: "6-T-Shirt",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tfNTtGrzYVeeNGmBUUdjscCvaCwFKFQMnQ&s",
    brand: "Tradeindia",
    oldprice: "800/-Rs",
    newprice: "500/-Rs"
  },
]

function Shop() {

  return (
    <>
      <Header />
      <h1 className='bg-dark text-white mt-5 w-50 p-2 text-center mx-auto redius-3'> Buy Now Shirts And T-Shirts </h1>

      <Container>

        <Row>
          {shopnow && shopnow.map((items) => {
            return (
              <>
                <div className='col-md-4 mt-3'>
                  <div className="card bg-primary border border-dark border-3">
                    <h1 className='text-white text-center'>{items.id}</h1>
                      <div className="card-body bg-white">
                      <img src={items.photo} alt="t-shirt" style={{width:"100%",height:"300px"}}/>
                      <h2 className='text-center mt-2 bg-dark text-white p-2'>{items.brand}</h2>
                      <h3 className='text-center mt-2 bg-secondary p-2 text-white'><del>{items.oldprice}</del> {items.newprice}</h3>
                      </div>
                      <div className="card-footer bg-primary">
                        <h1 className='text-center text-white fs-3'> Buy Now </h1>
                      </div>
                  </div>
                </div>
              </>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Shop
