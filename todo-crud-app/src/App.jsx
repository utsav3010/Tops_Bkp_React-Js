import React from "react"
import './index.css'
import { Container } from "react-bootstrap"
function App() {
 

  return (
    <>
    <Container className="w-50 mx-auto bg-white mt-5 border border-success border-3">
      <h1> To Do List <button type="button" className="btn btn-dark text-white"> Total <span className="badge badge bg-danger">0</span> </button>

      <button type="button" className="btn btn-dark text-white ms-5"> Add Task <span className="bi bi-list-task"></span> </button>

      </h1>
      <hr/>
    </Container>
    </>
  )
}

export default App
