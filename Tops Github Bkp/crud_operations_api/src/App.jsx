import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import DeleteData from "./components/DeleteData";
import EditData from "./components/EditData";
import NotFound from "./components/NotFound";
const App=()=>{
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-data" element={<Create />} />
        <Route path="/delete-data/:id" element={<DeleteData />} />
        <Route path="/edit-data/:id" element={<EditData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  </>
  )
}
export default App
