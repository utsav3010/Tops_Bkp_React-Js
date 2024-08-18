import React,{useEffect,useState} from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import Create from "./Create"
import { Link } from "react-router-dom"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"
const Content=()=> { 

  const[data,setData]=useState("");
  const Navigate=useNavigate();
  useEffect(()=>{
    axios.get(`http://localhost:5000/add-data`).then((response)=>{
      setData(response.data);
    });
  },[data]);


    return (
        <>
        <Header />
        <Navbar />
  <div className="container p-5 mt-2">
    <h2>
      Add Employee <span className="bi bi-person" />
      {/* <Link to='/'> */}
      <button
        type="button"
        className="btn btn-md btn-dark text-white float-end"
        data-bs-toggle="modal"
        data-bs-target="#addemp"
      >
        Click for Add <span className="bi bi-person" />
      </button>
      {/* </Link> */}
    </h2>
    <hr />
    {/* FOR DISPLAY ALL EMPLOYEE DATA CREATE A table */}
    <table className="table table-responsive table-bordered">
      <tbody>
        <tr>
          <th>#id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>State</th>
          <th>Action</th>
        </tr>

        {data && data.map((item)=>{
          return (
            <>
             <tr>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.Mobile}</td>
          <td>{item.state}</td>
          <td>
            <a className="btn btn-sm btn-danger text-white" onclick={()=>{Navigate(`/delete-data/${item.id}`)}}>
              <span className="bi bi-trash" />
            </a>
            |
            <a className="btn btn-sm btn-primary text-white" onclick={()=>{Navigate(`/edit-data/${item.id}`)}}>
            <span className="bi bi-pencil" />
            </a>
          </td>
        </tr>
            </>
          )
        })}        
       
      </tbody>
    </table>
  </div>

  <Create />
  
  
</>
    )
}
export default Content