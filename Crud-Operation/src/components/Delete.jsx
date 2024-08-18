import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Delete=()=>{

    const[data,setData]=useState([]);
    const{id}=useParams();
    const Navigate=useNavigate();

    useEffect(()=>{http://localhost:5173/
        axios.delete(`http://localhost:5000/add-data/${id}`).then(()=>{
        Swal.fire({
            title: "success!",
            text: "Your data successfully deleted!",
            icon: "success"
          });

          Navigate('/');
    });
},[]);

}

export default Delete