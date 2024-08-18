import React,{useEffect, useState} from "react";
import { Container,Row,Button,Table} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams,useNavigate } from "react-router-dom";

import axios from "axios";
// import Swal from "sweetalert2";
const Home=()=>{
// destructuring of data to fetch api 
const[data,setData]=useState("");
const Navigate=useNavigate();
useEffect(()=>{
// call api for fetch using axios 
axios.get(`http://localhost:4000/add-data`).then((response)=>{
setData(response.data);
});
},[]); //[] this is a dependency of useEffect() and it meanse it will be render data once time only

return(
<>
<Container className="p-5 mt-5 w-100 mx-auto shadow">
<h3>React js CRUD(create | read |Update | delete)</h3>
<hr className="w-50 border border-1 border-dark" />

<Link to='/create-data'><Button type="button" className="mt-3 btn btn-md btn-dark text-white float-end mb-4">Add Data <span className="fa fa-person"></span></Button></Link>

{/* show all data */}
<Table className="table table-responsive mb-4 mt-3 w-100">
<thead>
<tr>
<th>#id</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Address</th>
<th>Pincode</th>
<th>Action</th>
</tr>
</thead>

<tbody>
{data && data.map((item)=>{

return (
<>
<tr>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.email}</td>
<td>{item.phone}</td>
<td>{item.address}</td>
<td>{item.pincode}</td>
<td><Button type="button" onClick={()=>{Navigate(`/delete-data/${item.id}`)}} className="btn btn-sm bg-white"><span className="bi bi-trash text-danger"></span></Button> 
| 
<Button type="button" onClick={()=>Navigate(`/edit-data/${item.id}`)} className="btn btn-sm bg-white"><span className="bi bi-pencil text-primary"></span></Button></td>
</tr>
</>
)

})}

</tbody>
</Table>
</Container>
</>
)
}
export default Home