import React from "react";
import { NavLink} from "react-router-dom";
import ReactStars from 'react-rating-stars-component';
import './App.css';

const Cards = (props) => {
  // const Ratingstars = (rating) =>{
  //   document.write(`${rating} Reviews`)
  // }
  
  return (

    
    <>
<NavLink to="/monogram" className="txtdeco">
  <div className="card">
  <h6 className="newtext">New</h6>
  <img src= {props.imgsrc}  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <ReactStars size={30} isHalf={true} />
    {/* <h1>{props.$rating}</h1> */}
    <p className="card-text">{props.paragraph}</p>
    
  </div>
    
</div>
</NavLink>



    {/* <div className="card">
    <img
      className="card-img-top"
      src={props.imgsrc}
      alt="First slide"
    />
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h5>{props.quesincard}</h5>
    <p className="card-text">{props.paragraph}</p>
    <NavLink to={props.link}>
    <img src="Button (2).png" alt="not found" className="btncard"/>
    </NavLink>
    </div>
    </div> */}


      
    </>
  );
};

export default Cards;
