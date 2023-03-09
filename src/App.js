import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./design-system/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Contact from "./Page/Contact/Contact";
import Home from "./Page/Home/Home";
import LOG from "./Page/LogIn/LOG";
import Services from "./Page/Services/Services";
import SignUp from "./Page/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<LOG />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
