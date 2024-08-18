import React,{useState,useRef,useEffect} from "react";
import { Container,Row,Form } from "react-bootstrap";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import FlashMessage from 'react-flash-message'
import Swal from "sweetalert2";
const EditData=()=>{
// destructuring of state 
const[data,setData]=useState([]);
const[flash,setFalsh]=useState([]);
// for edit data
const name=useRef("");
const email=useRef("");
const phone=useRef("");
const address=useRef("");
const pincode=useRef("");
const Navigate=useNavigate();
const{id}=useParams();
useEffect(()=>{

    axios.get(`http://localhost:4000/add-data/${id}`).then((response)=>{
    setData(response.data);
    name.current.value=response.data.name,
    email.current.value=response.data.email,
    phone.current.value=response.data.phone,
    address.current.value=response.data.address,
    pincode.current.value=response.data.pincode

    })
},[]);

// update data via update employee axios.put()
// create a formHandeler functions 
const updFormData=(e)=>{

    e.preventDefault();
     var upd={

        name:name.current.value,
        email:email.current.value,
        phone:phone.current.value,
        address:address.current.value,
        pincode:pincode.current.value

    }
    // update via axios api call

    axios.put(`http://localhost:4000/add-data/${id}`,upd).then(()=>{

        Swal.fire({
            
            title: "success!",
            text: "Your data successfully Updated!",
            icon: "success"
          });
        Navigate('/');


    });

}





return (
<>
<Container className="p-5 mt-5 w-75 mx-auto shadow">
<Row>
<div className="col-md-5">
<img src="https://th.bing.com/th/id/OIP.zxvbAilXBmmuoU-15JmHIwHaFj?rs=1&pid=ImgDetMain" alt="create" className="img-fluid" />   
</div>

<div className="col-md-7">
<h3>Update all Data </h3>
<hr className="w-50 border border-1 border-dark" />
{/* pass a flash data messages  */}

{/* {flash && <FlashMessage duration={3000}><div className="alert alert-success p-2 text-dark">Your Data successfully Updated!</div></FlashMessage>} */}

<Form>
<div className="form-group mt-3">
<input type="text" ref={name} placeholder="Name *" className="form-control" />
</div>

<div className="form-group mt-3">
<input type="text" ref={email} placeholder="Email *" className="form-control" />
</div>

<div className="form-group mt-3">
<input type="text" ref={phone} placeholder="Phone *" className="form-control" />
</div>

<div className="form-group mt-3">
<input type="text" ref={address} placeholder="Address *" className="form-control" />
</div>

<div className="form-group mt-3">
<input type="text" ref={pincode} placeholder="PinCode *" className="form-control" />
</div>

<div className="form-group mt-3">
<button type="button" onClick={updFormData}  className="btn bg-dark text-white btn-md">Update Data</button>
</div>
</Form>
</div>
</Row>

</Container>



</>
)

}

export default EditData