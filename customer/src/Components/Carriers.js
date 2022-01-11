import React from "react";
import { Link } from "react-router-dom";



function Carriers(){
    return(
        
        <div>
            <div>
              <header>
                  <div class="px-3 py-2">
                       <div class="align-items-center justify-content-between justify-content-lg-start">
                          <a href="/" class="d-flex align-items-center ">
                         </a>
                          <ul class=" line nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                               <li >
                               <Link to="home"><a class="nav-link text-secondary text-decoration-none">Home</a></Link>
                               </li>

                               <li>
                                <Link to="/"> <a class="nav-link text-secondary">New Customer</a></Link> 
                               </li>
                               
                               <li>
                               <Link to="carry"><a class="nav-link text-secondary">Carriers</a></Link>
                               </li>
                           </ul>
                       </div>
                  </div>
             </header>
         </div>

        {/* <h1 className="text-center mt-3">Carries Page loading
        <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
           </div></h1> */}

<div class="text-center">
<div class="spinner-border text-primary " role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>
        </div>
    )
}



export default Carriers;