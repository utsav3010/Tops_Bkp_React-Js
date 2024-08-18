import React,{useRef, useState} from "react";
import { Container,Row,Button,Form} from "react-bootstrap";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// import FlashMessage from 'react-flash-message'
const Create=()=>{   
// flash messages used we can destructured of data
// const[swal,setSwal]=useState(false);
// each values stored in variables of ref
const name=useRef("");
const email=useRef("");
const phone=useRef("");
const address=useRef("");
const pincode=useRef("");
const Navigate=useNavigate();
// add data create a formHandeler function
const addFormData=(e)=>{
e.preventDefault();
var ins={

name:name.current.value,
email:email.current.value,
phone:phone.current.value,
address:address.current.value,
pincode:pincode.current.value,

}

// call api via axios if we stored or insert data via axios using axios.post(`apiurl`).then(()=>{pass a message})

axios.post(`http://localhost:4000/add-data`,ins).then(()=>{
// pass a messages
Swal.fire({
    title: "Wow!",
    text: "Your data successfully Added!",
    icon: "success"
  }); 

// pass messages via react flash message module or library
// setFalsh(true);
// Navigate('/create-data');
//reset our form all data
e.target.reset();

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
<h3>Add Data here      <Link to='/'><Button type="button" className="mt-3 btn btn-md btn-dark text-white float-end mb-4">Show All Data <span className="fa fa-person"></span></Button></Link>    </h3>
<hr className="w-50 border border-1 border-dark" />
{/* pass a flash data messages  */}
{/* {flash && <FlashMessage duration={3000}><div className="alert alert-success p-2 text-dark">Your Data successfully Added!</div></FlashMessage>} */}
<Form onSubmit={addFormData}>
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
<input type="submit" name="adddata" value="Add Data"  className="btn bg-dark text-white btn-md" />
</div>
</Form>
</div>
</Row>

</Container>

</>
)
}

export default Create