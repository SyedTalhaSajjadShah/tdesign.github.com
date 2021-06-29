import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const Navbar = () => {
  return (
    <>           
    

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#"><img src="mlogo.png" alt="not found" /></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
    <ul className="navbar-nav  mb-2 mb-lg-0 p-2">
     
      <li className="nav-item pl-5 ">
        <NavLink className="nav-link active " aria-current="page" to="/"><h5>Home</h5></NavLink>
      </li>
      <li className="nav-item pl-5">
        <NavLink className="nav-link active" aria-current="page" to="/products"><h5>Products</h5></NavLink>
      </li>
      <li className="nav-item pl-5">
        <NavLink className="nav-link active" aria-current="page" to="/contact"><h5>Contact</h5></NavLink>
      </li>
      <li className="nav-item pl-5">
        <NavLink className="nav-link active" aria-current="page" to="/about"><h5>AboutUs</h5></NavLink>
      </li>
      
    </ul>  
  </div>
  
  <input type="search" id="form1" className="tt"/*class="form-control"*//>
  <button type="button" class="btn">
  <SearchIcon/>
  </button>
  <h5 className="linemargin">|</h5>
  <NavLink to="/productdetails" className="smargin" >
  <ShoppingCartIcon />
  </NavLink>
</nav>
    </>
  );
}
export default Navbar;
