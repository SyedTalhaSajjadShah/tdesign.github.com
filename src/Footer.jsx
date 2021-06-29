import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () =>{
      return(
            <>
<footer className="text-center text-lg-start bg-light">
   
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div>
      <NavLink to="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </NavLink>
      <NavLink to="#" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </NavLink>
      <NavLink to="#" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </NavLink>
      <NavLink to="#" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </NavLink>
      <NavLink to="#" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </NavLink>
      <NavLink to="#" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </NavLink>
    </div>
     
  </section>
   

   
  <section className="">
    <div className="container text-left text-md-start mt-5">
       
      <div className="row mt-3">
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
          <h3 className="fw-bold mb-4">
            About Us
          </h3>
          <p>
            <NavLink to="#" className="text-reset">Our History</NavLink>
          </p>
          <p>
            <NavLink to="#" className="text-reset">FAQ Investors</NavLink>
          </p>
          <p>
            <NavLink to="#" className="text-reset">News & Updates</NavLink>
          </p>
        </div>
         
         <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
          <h3 className="fw-bold mb-4">
            Contact Us
          </h3>
          <p>
            <NavLink to="#!" className="text-reset">Membership</NavLink>
          </p>
          <p>
            <NavLink to="#!" className="text-reset">Employement</NavLink>
          </p>
          <p>
            <NavLink to="#!" className="text-reset">Donations</NavLink>
          </p>
        </div>

        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
          <h3 className="fw-bold mb-4">
            Quality
          </h3>
          <p>
            <NavLink to="#!" className="text-reset">Benifits</NavLink>
          </p>
          <p>
            <NavLink to="#!" className="text-reset">Believes</NavLink>
          </p>
          <p>
            <NavLink to="#!" className="text-reset">Compaigns</NavLink>
          </p>
        </div>

         
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
          <h3 className="fw-bold mb-4">
            Helps
          </h3>
          <p>
            <NavLink to="#!" className="text-reset">Track Order</NavLink>
          </p>
          <p>
            <NavLink to="#!" className="text-reset">Delivery & Returns</NavLink>
          </p>
          <p>
            <NavLink to="#!" className="text-reset">Student Discounts</NavLink>
          </p>
        </div>
         

         
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ml-sm-4">
           
          <h4 className="text-primary fw-bold mt-3">
            Subscribe to <br/>Our Newsletter 
          </h4>
          <input type="email" placeholder="Enter Email" className="p-3" style={{width:"100%"}}/><br/>
          <button type="button" className="btn btn-primary btnmargin  ">Send</button>
        </div>
      </div>  
    </div>
  </section>
</footer>
</>
      )
}
export default Footer;