import React from "react";
import "./input.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Error from "./routes/Error";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}
export default App;