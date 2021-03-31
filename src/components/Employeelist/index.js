import React, {useState, useEffect} from "react"
import API from "../../utils/API.JS"
import Search from "../../components/Searchform"

function Employeelist (props){
   const[ results, setResults]=useState([]);
   const[ sortedField, setSortedField ] = state(null);

   async function getRandomUsers(){
       try{
           const response =await API.search();
           setResults ( response.data.results )
       }catch (error){
           console.error(error); 
       }
   }
}

useEffect( ()=>{
    getRandomUsers()
}, [])
