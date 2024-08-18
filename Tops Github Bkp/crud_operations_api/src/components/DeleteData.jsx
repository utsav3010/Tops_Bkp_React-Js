import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const DeleteData=()=>{

    const[data,setData]=useState([]);
    const{id}=useParams();
    const Navigate=useNavigate();

    useEffect(()=>{http://localhost:5174/
      axios.delete(`http://localhost:4000/add-data/${id}`).then(()=>{
        Swal.fire({
            title: "success!",
            text: "Your data successfully deleted!",
            icon: "success"
          });
        Navigate('/');

      });
    },[]);//

    return (
        <>
            {/* view load via jsx */}
        </>
    )
}

export default DeleteData