import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Content from "./components/Content";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
const App=()=>{
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/create-data" element={<Create />} />
        <Route path="/edit-data/:id" element={<Edit />} />
        <Route path="/delete-data/:id" element={<Delete />} />

      </Routes>
    </Router>

  </>
  )
}
export default App
