import React from 'react';
import './App.css';
import { Carousel } from 'react-bootstrap';


const Productdetails = () =>{
      return(
            <>
            <div className="container mtop">
            <div className="row">
            <div className="col-lg-8">
            <h4>Shopping Cart
            </h4>
            <hr className="mt-4"/>
            <div className="row">
            <div className="col-lg-6 col-sm-12">
            <p >Product Details</p>
            </div>
            <div className="col-lg-3 col-sm-12">
            <p>Quantity</p>
            </div>
            <div className="col-lg-3 col-sm-12">
            <p>Price</p>
            </div>
            </div>

            <hr/>
            <div className="row">
            <div className="col-lg-3 col-sm-12 mt-4">
            <img src="2nd.jpg" alt="not found"/>
            </div>
            <div className="col-lg-3 col-sm-12 mt-4">
            <h5>Monogram</h5>
            <p className="fontsize">Color:Black</p>
            <p className="fontsize">Size:15cm</p>
            <p className="fontsize">Product Code: 12435</p>
            </div>
            <div className="col-lg-3 col-sm-4 mt-5 fpad">
            <Carousel className="carsol" > 
            <Carousel.Item>
                  <p>1</p>
            </Carousel.Item>
            <Carousel.Item>
                  <p>2</p>
            </Carousel.Item>
            <Carousel.Item>
                  <p>3</p>
            </Carousel.Item>
           </Carousel>
            </div>
            <div className="col-lg-3 col-sm-12 mt-5">
                  <h3>250</h3>
            </div>
            
            
            </div>
            </div>


            <div className="col-lg-4 col-sm-12 osumry">
           
            <h3>Order Summary</h3>
            <br/>

            <div className="row">
            <div className="col-lg-8 col-sm-6">
            <h4>item 1</h4>
            </div>
            <div className="col-lg-4 col-sm-6">
            <h4>AED 259</h4>
            </div>
            </div>

            <br/>
            <div className="row">
            <div className="col-lg-8 col-sm-6">
            <h4>Shipping</h4>
            </div>
            <div className="col-lg-4 col-sm-6">
            <h4>AED 50</h4>
            </div>
            </div>

            <hr/>
            <div className="row">
            <div className="col-lg-8 col-sm-6">
            <h3>Total</h3>
            </div>
            <div className="col-lg-4 col-sm-6">
            <h3>AED 300</h3>
            </div>
            </div>
            <button type="button" className="btn btn-primary btn-lg pdbtn">Go to Checkput</button>

            </div>
            </div>
            </div>
            
            </>
      )
}

export default Productdetails;