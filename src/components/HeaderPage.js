import { Link } from "react-router-dom";
import React from 'react'
import { Button } from 'semantic-ui-react'
import Navbar from "./Navbar";
function HeaderPage (){

    return (
        <header>
             <Navbar/>
        <div className="header">
            <h1 id="title1">New York</h1>
            <h3 id="title2">BOBA TEA FACTORY</h3>
            <p>Voted The New Yorks Best Boba Tea in 2020</p>
            <br></br>
            <Link to="/orders">
                <Button color='orange'>Order Now!</Button>
            </Link>
        </div>
    </header>
  
      )
  
  }
  export default HeaderPage;