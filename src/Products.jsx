import React,{useState} from 'react';
import './App.css';
import Cards from './Cards';
import Sdata from './Sdata';




const Products = () => {

//       function ncard (val){

            
//       return(
//             <div className='row d-flex d-lg-table-row'>
//           <div className='col-lg-3 col-sm-12 '>
//             <Cards
//             imgsrc={val.imgsrc}
//             title={val.title}
//             paragraph={val.paragraph}  
//       />
//       </div>
// </div>
//       )
      
//       }

//const [showallpro,setShowallpro]=useState(true)
const [show,setShowproducts]=useState(true)
// const [showhouseno,setShowhouseno]=useState(false)
// const [showfamily,setShowfamily]=useState(false)
// const [showmonogram,setShowmonogram]=useState(false)

  return (
    <>
    <div className="row">
    <div className="col-lg-12 col-sm-12 float-sm-left mt-5">
    <h1 className="pph text-center">Our Metal Decor</h1>
    </div>
    </div>
    
<div className="row">
<div className="col col-lg-12 col-sm-12 pnavbar mt-5">
  <button className="w3-bar-item w3-button"><p >All products</p></button>
  <button className="w3-bar-item w3-button"><p>House Number</p></button>
  <button className="w3-bar-item w3-button"><p>Love&Family</p></button>
  <button className="w3-bar-item w3-button"><p>Monogram</p></button>

</div>
</div>
<hr className="hrl"/>



{/* <div className="Products"> */}
  {/* { 
    showallpro? */}
    <div id="Products" className="w3-container city ">
<div className="container-fluid sizeofheading text">
           
    <div className='row'>
          {/* <div className='col-lg-3 col-sm-12'> */}
           {/* {Sdata.map(ncard)} */}
           {/* </div>
           </div> */}





           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[1].imgsrc}
                 title={Sdata[1].title}
                 
                 paragraph={Sdata[1].paragraph}
           />
           </div>

           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[2].imgsrc}
                 title={Sdata[2].title}
                 paragraph={Sdata[2].paragraph}
           />
           </div>

           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[3].imgsrc}
                 title={Sdata[3].title}
                 paragraph={Sdata[3].paragraph}
           />
           </div>

           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[3].imgsrc}
                 title={Sdata[3].title}
                 paragraph={Sdata[3].paragraph}
           />
           </div>
           </div>
           
           <div className='row mt-5'>
     <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[4].imgsrc}
                 title={Sdata[4].title}
                 paragraph={Sdata[4].paragraph}
           />
           </div>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[5].imgsrc}
                 title={Sdata[5].title}
                 paragraph={Sdata[5].paragraph}
           />
           </div>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[6].imgsrc}
                 title={Sdata[6].title}
                 paragraph={Sdata[6].paragraph}
           />
           </div>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[7].imgsrc}
                 title={Sdata[7].title}
                 paragraph={Sdata[7].paragraph}
           />
           </div>
           </div> 

         {/*----Row 2 Start----*/}
         <div className="Products">
         {
           show?
        <div className='row forpadding mt-5'>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[2].imgsrc}
                 title={Sdata[2].title}
                 paragraph={Sdata[2].paragraph}
           />
           </div>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[2].imgsrc}
                 title={Sdata[2].title}
                 paragraph={Sdata[2].paragraph}
           />
           </div>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[2].imgsrc}
                 title={Sdata[2].title}
                 paragraph={Sdata[2].paragraph}
           />
           </div>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[2].imgsrc}
                 title={Sdata[2].title}
                 paragraph={Sdata[2].paragraph}
           />
           </div>
           </div>
           :null
         }
       <button onClick={()=>setShowproducts(!show)} type="button" className="btn btn-outline-primary showall mb-5 mt-5" >Show All</button>
           {/* </div> */}
           </div>
 </div>
 </div>


{/* <div className="Products">
{
      showhouseno?
      <h1>house Number products page</h1>
      :null
}
</div>

<div className="Products">
{
      showfamily?
      <h1>Live&Family products page</h1>
      :null
}
</div>

<div className="Products">
{
      showmonogram?
      <h1>Monogram products page</h1>
      :null
}
</div> */}
    </>
  );
}
export default Products;
