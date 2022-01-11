import React from "react";
import { Link } from "react-router-dom";

import {useSelector,useDispatch} from"react-redux"
import { logoutUser } from "../store/action/auth";



function Header(){
  const dispatch= useDispatch()
  const auth = useSelector(state=>state.auth)
  const handleLogout = ( ) => {
    dispatch(logoutUser())
  }
    return (


    <nav class="navbar navbar-expand-lg navbar-light bg-white nav-tabs ">
  <div class="container-fluid">
    <a class="navbar-brand" href="">🌀 TECH-OGO</a>
    

    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" ><Link to="/home">Home</Link></a>
        </li>
        {auth.isAuthenticated ?
        <li class="nav-item">
        <a class="nav-link" onClick={handleLogout}>Logout</a> 
       </li>
        :
        <div class="d-flex">
        <li class="nav-item">
         <a class="nav-link" ><Link to="/sign">Sign Up</Link></a> 
        </li>
        <li class="nav-item">
         <a class="nav-link" ><Link to="/login">Login</Link> </a>
        </li>
    </div>
        }
        {/* <li class="nav-item">
          <a class="nav-link disabled"  tabindex="-1" aria-disabled="true">About us</a>
        </li> */}
      </ul>
    </div>
    </div>
 
</nav>

  )
}

export default Header;