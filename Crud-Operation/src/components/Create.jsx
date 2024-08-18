import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Create = () => {
  const fname = useRef("");
  const lname = useRef("");
  const email = useRef("");
  const password = useRef("");
  const Mobile = useRef("");
  const state = useRef("");
  const Navigate = useNavigate();

  const addFormData = (e) => {
    e.preventDefault();
    var ins = {
      fname: fname.current.value,
      lname: lname.current.value,
      email: email.current.value,
      password: password.current.value,
      Mobile: Mobile.current.value,
      state: state.current.value,
    };

    axios.post(`http://localhost:5000/add-data`, ins).then(() => {
      Swal.fire({
        title: "Wow!",
        text: "Your data successfully Added!",
        icon: "success",
      });

      fname.current.value = ""
      lname.current.value = ""
      email.current.value = ""
      password.current.value = ""
      Mobile.current.value = ""
      state.current.value = ""

      // e.target.reset();
    });
  };

  return (
    <>
      <div className="modal fade" id="addemp" role="dialog">
        <div className="modal-dialog" style={{ minWidth: "60%", marginTop: "5%" }}>
          <div className="modal-content mt-5 p-0">
            <div className="row">
              <div className="col-md-6 bg-dark p-5">
                <h3 className="text-white">Why join with us</h3>
                <hr className="border border-white border-1 w-50" />
                <ul className="sidebar">
                  <li> <a href="#">24x7 support</a> </li>
                  <li> <a href="#">Return policy</a> </li>
                  <li> <a href="#">Customers care support</a> </li>
                  <li> <a href="#">Secured payments</a> </li>
                  <li className="mt-5"> <a href="#"> <img src="https://cdn-icons-png.flaticon.com/512/1256/1256628.png" className="img-fluid w-50" /> </a></li>
                </ul>
              </div>
              <div className="col-md-6 bg-white p-5">
                <h2> Add Employee <span className="bi bi-person" />
                  <button type="button" className="btn btn-sm border border-0 btn-danger float-end" data-bs-dismiss="modal"> × </button>
                </h2>

                <hr className="border border-dark border-1 w-50" />
                <form onSubmit={addFormData}>
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
                    <input type="submit" name="add-employee" defaultValue="AddEmployee" className="btn btn-md btn-dark text-white" />
                    <input type="reset" name="reset" defaultValue="Reset" className="btn btn-md btn-danger text-white ms-2" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Create;
