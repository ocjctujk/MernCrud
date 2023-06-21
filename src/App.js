import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { Home } from "./components/Home";
import { AddMember } from "./components/AddMember";
import { EditMember } from "./components/EditMember";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMember />} />
        <Route path="/edit" element={<EditMember />} /> 
      </Routes>
    </div>
  );
}

export default App;
