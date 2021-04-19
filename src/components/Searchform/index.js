import React from "react";
import "./style.css";


function SearchForm(props) {
    return (
<div className="searchBar text-center">
<input type="search" onKeyUp={props.filterTableBySearch} ref={props.inputValueRef}></input>
</div>
    )}
  
  export default SearchForm;