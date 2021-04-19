import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Employeelist from "./components/Employeelist";

function App() {
  return(
    <div>
      <Navbar />
      <Wrapper>

       <Employeelist />
      </Wrapper>
      <Footer />
   
    </div>
  )
};

export default App;
