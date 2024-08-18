import React,{useState,useRef,useEffect} from "react"
import axios from "axios"
import { useParams,useNavigate } from "react-router-dom"
import Swal from "sweetalert2"


const Edit=()=>{

    const[data,setData]=useState([]);

    const fname = useRef("");
    const lname = useRef("");
    const email = useRef("");
    const password = useRef("");
    const Mobile = useRef("");
    const state = useRef("");
    const Navigate = useNavigate();
    const{id}=useParams();

    useEffect(()=>{

        axios.get(`http://localhost:5000/add-data/${id}`).then((response)=>{
            setData(response.data);

            fname.current.value=response.data.fname,
            lname.current.value =response.data.lname,
            email.current.value =response.data.email,
            password.current.value = response.data.password,
            Mobile.current.value = response.data.Mobile,
            state.current.value = response.data.state
        })
    },[]);

    const EditData=(e)=>{

        e.preventDefault();

        var upd={

            fname: fname.current.value,
            lname: lname.current.value,
            email: email.current.value,
            password: password.current.value,
            Mobile: Mobile.current.value,
            state: state.current.value

        }

        axios.put(`http://localhost:5000/add-data/${id}`,upd).then(()=>{

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

      
                  <div className="col-md-6 bg-white p-5">
                    <h2> Add Employee <span className="bi bi-person" />
                      <button type="button" className="btn btn-sm border border-0 btn-danger float-end" data-bs-dismiss="modal"> × </button>
                    </h2>
    
                    <hr className="border border-dark border-1 w-50" />
                    <form>
                      <div className="form-group mt-3">
                        <input type="text" ref={fname} placeholder="FirstName *" className="form-control" />
                      </div>
                      <div className="form-group mt-3">
                        <input type="text" ref={lname} placeholder="LastName *"
                          className="form-control" />
                      </div>
                      <div className="form-group mt-3">
                        <input type="text" ref={email} placeholder="Email *" className="form-control" />
                      </div>
                      <div className="form-group mt-3">
                        <input type="password" ref={password} placeholder="Password *" className="form-control" />
                      </div>
                      <div className="form-group mt-3">
                        <input type="text" ref={Mobile} placeholder="Mobile *" className="form-control" />
                      </div>
                      <div className="form-group mt-3">
                        <select ref={state} placeholder="State *" className="form-control">
                          <option value="">-select state-</option>
                          <option value="Gujrat">Gujrat</option>
                          <option value="Mahrastra">Mahrastra</option>
                        </select>
                      </div>
                      <div className="form-group mt-3">
                        <input type="button" onClick={EditData} name="Update" defaultValue="Update-Data" className="btn btn-md btn-dark text-white" />
                        <input type="reset" name="reset" defaultValue="Reset" className="btn btn-md btn-danger text-white ms-2" />
                      </div>
                    </form>
                  </div>
              
        </>
      );
}
export default Edit