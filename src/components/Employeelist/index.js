import React, {useState, useEffect, useRef} from "react"
import "./style.css"
import Search from "../Searchform"
import axios from "axios"

function Employeelist (){
    const[ results, setResults] = useState( [] );
    const[ sortedField, setSortedField ] = useState(null);
    const [filteredField, setfilteredField]= useState([])
 
   async function getRandomUsers(){
       try {
           const response = await axios.get('https://randomuser.me/api/?nat=ca&results=100'); 
           console.log(response)
           setResults (response.data.results )
       } catch (error){
           console.error(error); 
       }
   }

useEffect( ()=>{
    getRandomUsers()
}, [])

let sortedResults = [...results]
const inputValueRef= useRef();

function filterTableBySearch(){
    const inputValue =inputValueRef.current.value;
    console.log ('sortedResults', sortedResults)
    console.log (`[inputValue] ${inputValue}`)
    sortedResults =[...results.map(result => result)]

    const filteredList =sortedResults.filter(function(data){
        return data.name.first.toLowerCase().indexOf(inputValue.toLowerCase())>-1
    })
    
    setfilteredField(filteredList)
}
if (sortedField !== null){
    if (sortedField ==="name"){
        sortedResults =[...results.map(result=>result)]
        sortedResults.sort((a,b)=>{
            if (a.name.first<b.name.first){
                return -1;
            }
            if (a.name.first> b.name.first){
                return 1;
            }
            return 0
        })
    }
    if (sortedField === "age"){
        sortedResults = [...results.map(result=>result)]
        sortedResults.sort((a,b) =>{
            if (a.dob.date < b.dob.date) {
                return -1;
              }
              if (a.dob.date > b.dob.date) {
                return 1;
              }
              return 0;
            })
    }
    sortedResults.sort((a,b)=>{
        if (a[sortedField] < b[sortedField]){
        return -1;
          }
        if(a[sortedField] > b[sortedField]) {
            return 1;
          }
          return 0;
        })
    }
    return(
        <div>
        <Search inputValueRef={inputValueRef} filterTableBySearch={filterTableBySearch}/>
        <table className="container table table-striped" id="myTable">
            <thead>
                <tr>
                <th scope="col">
                    Image
                </th>
                <th scope="col">
                    <button type="button" onClick={() => setSortedField('name')}>Name <i className="fas fa-caret-down"></i></button>
                </th>
                <th scope="col">
                    <button type="button" onClick={() => setSortedField('cell')}>Phone <i className="fas fa-caret-down"></i></button>
                </th>
                <th scope="col">
                    <button type="button" onClick={() => setSortedField('email')}>Email <i className="fas fa-caret-down"></i></button>
                </th>
                <th scope="col">
                    <button type="button" onClick={() => setSortedField('age')}>Age <i className="fas fa-caret-down"></i></button>   
                </th>
                </tr>
            </thead>
            <tbody>
                
                {filteredField.length > 0 ? filteredField.map(result => (
                    <tr key={result.login.username}>
                        <th scope="row"><img src={result.picture.thumbnail} alt="unknown"></img></th>
                        <td id="name">{result.name.first} {result.name.last}</td>
                        <td>{result.cell}</td>
                        <td>{result.email}</td>
                        <td>{result.dob.date.substring(0,10)}</td>
                    </tr> 
                )) : sortedResults.map(result => (
                    <tr key={result.login.username}>
                        <th scope="row"><img src={result.picture.thumbnail} alt="unknown"></img></th>
                        <td id="name">{result.name.first} {result.name.last}</td>
                        <td>{result.cell}</td>
                        <td>{result.email}</td>
                        <td>{result.dob.date.substring(0,10)}</td>
                    </tr> 
                
                ))}
                
            </tbody>
        </table>
        </div>
    );
}
export default Employeelist;
