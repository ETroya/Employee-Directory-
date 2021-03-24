import { useState, useEffect } from "react";
import "./App.css";
import Searchform from "./components/Searchform";
import API from "./utils/API.JS";
import axios from "axios";

function App() {
  //defining a var called state. The Hook
  const [state, setState] = useState({
    search: "",
    Earray: [],
  });

  useEffect(() => {
    //define the function
    const getEmployees = async () => {
      const employees = await axios.get("https://randomuser.me/api/?results=20");
      console.log(employees)
      //saving the list of employees
      setState({
        //maintains the var state and only changes employee arrray ( Spread operator)
        ...state,
        Earray: employees.data.results,
      });
    };
    //calling the function
    getEmployees()
  }, []);

  function handleInputChange(event) {
    setState({ search: event.target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(state.search);
  }

  return (
    <div className="App">
      <Searchform
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;
