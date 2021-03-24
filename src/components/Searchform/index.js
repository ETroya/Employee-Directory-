import React from "react";

function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="employee">Employee Name:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="employee"
            type="text"
            className="form-control"
            placeholder="Employee"
            id="employee"
          />
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;