import React from 'react'
import { Container,Row } from 'react-bootstrap'
// our services
const service=[
    {
        id:1,
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOy8jZR6eVODiR_yFDKWzDhComUgHulBEZKrBnkl4j3aRymj2MbL2_74P7B1eDS_dfhPw&usqp=CAU",
        servicename:"Plumbering service",
        cost:"minimum fee is 500-/ all taxes included",
        bookingdate:"27-06-2024 12:52pm"
        

    },
    {
        id:2,
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUZ0vpBm8tTHL6vHVz8gxmbV_TwEMEuMYXQ&s",
        servicename:"Mobile repairing",
        cost:"minimum fee is 300-/ all taxes included",
        bookingdate:"27-06-2024 12:52pm"
        

    },
    {
        id:3,
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tnXMREhkPGTcxAqwn3etpPxJBnzE1Yx9wQ&s",
        servicename:"Hrms Training",
        cost:"minimum fee is 1500-/ all taxes included",
        bookingdate:"27-06-2024 12:52pm"
        

    },

    {
        id:4,
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNNLTt7X5pRDsrNCKTD64BLKzflsDW0KPSg&s",
        servicename:"Management traning",
        cost:"minimum fee is 800-/ all taxes included",
        bookingdate:"27-06-2024 12:52pm"
        

    },

    {
        id:5,
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IoIz0PBub-RdoL7pUkMaMwAnT1xSjMdgmw&s",
        servicename:"Angular traning",
        cost:"minimum fee is 8000-/ all taxes included",
        bookingdate:"27-06-2024 12:52pm"
        

    },

    {
        id:6,
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hbSFeMku5EgqRCv_Of81P8PDYSwGh4PSQg&s",
        servicename:"React js tarning 25000",
        cost:"minimum fee is 800-/ all taxes included",
        bookingdate:"27-06-2024 12:52pm"
        

    }
]
function Services()
{
    return (
        <>
        <Container>
        <h1 className='text-center bg-dark text-white w-50 mt-5 mx-auto p-2 fs-5'>This is Our Services Page</h1>
            <Row>
            
            {/* we applied loop for display all services */}
            {service && service.map((items)=>{
                return (
                    <>
            <div className='col-md-4'>
              <div className='list-group'>
                <div className='list-group-item bg-dark text-white'>Our services</div>
                <div className='list-group-item'>
                <p><img src={items.photo} alt='photo' className='img-fluid' style={{width:"100%", height:"250px"}} /></p> 
                <p className='fs-3'>{items.servicename}</p>
                <p className=''>services Cost:{items.cost}</p>
                <p className='fs-6'>booking date :{items.bookingdate}</p> 
                <p><button type='button' className='btn btn-dark bg-dark text-white'>Book Now</button></p>
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
export default Services