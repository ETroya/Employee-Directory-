import React from "react"
import "./style.css";

function Navbar(){
    return(
        <div>
            <nav className ="navbar flex-column">
                <a className ="navbar-brand text-center m1-3" href= "/">Employee Directory</a>
            </nav>

        </div>
    )
}

export default Navbar;