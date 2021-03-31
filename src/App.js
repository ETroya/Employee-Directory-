import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import SearchForm from "./components/Searchform";

function App() {
  return(
    <div>
      <Navbar />
      <Wrapper>
       <SearchForm />
      </Wrapper>
      <Footer />
   
    </div>
  )
};

export default App;
