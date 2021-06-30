import React,{useState} from 'react';
import './App.css';
import Cards from './Cards';
import Sdata from './Sdata';




const Products = () => {
      const [show,setShowproducts]=useState(false)
   return(
    <>

<div className="row">
    <div className="col-lg-12 col-sm-12 float-sm-left mt-5">
    <h1 className="pph text-center">Our Metal Decor</h1>
    </div>
    </div>

    <div class="container mt-5 mr-5">
    <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#home">All Products</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#menu1">House Number</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#menu2">Love&Family</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#menu3">Monogram</a>
    </li>
  </ul>
  
  <div class="tab-content">
    <div id="home" class="tab-pane active">
    <br/>
    <div id="Products" className="city ">
<div className="container-fluid sizeofheading text">
           
    <div className='row'>

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
    </div>

    <div id="menu1" class="tab-pane fade"><br/>
    
    <div id="Products" className="city ">
<div className="container-fluid sizeofheading text">
           
    <div className='row'>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[1].imgsrc}
                 title={Sdata[1].title}
                 
                 paragraph={Sdata[1].paragraph}
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
                 imgsrc={Sdata[5].imgsrc}
                 title={Sdata[5].title}
                 paragraph={Sdata[5].paragraph}
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
                 imgsrc={Sdata[1].imgsrc}
                 title={Sdata[1].title}
                 paragraph={Sdata[1].paragraph}
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
                 imgsrc={Sdata[5].imgsrc}
                 title={Sdata[5].title}
                 paragraph={Sdata[5].paragraph}
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
           :null
         }
       <button onClick={()=>setShowproducts(!show)} type="button" className="btn btn-outline-primary showall mb-5 mt-5" >Show All</button>
           {/* </div> */}
           </div>
 </div>
 </div>

    </div>
    
      
<div id="menu2" class="tab-pane fade"><br/>
    <div id="Products" className="city ">
<div className="container-fluid sizeofheading text">
           
    <div className='row'>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[4].imgsrc}
                 title={Sdata[4].title}
                 
                 paragraph={Sdata[4].paragraph}
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
                 imgsrc={Sdata[4].imgsrc}
                 title={Sdata[4].title}
                 paragraph={Sdata[4].paragraph}
           />
           </div>

           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[6].imgsrc}
                 title={Sdata[6].title}
                 paragraph={Sdata[6].paragraph}
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
                 imgsrc={Sdata[6].imgsrc}
                 title={Sdata[6].title}
                 paragraph={Sdata[6].paragraph}
           />
           </div>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[4].imgsrc}
                 title={Sdata[4].title}
                 paragraph={Sdata[4].paragraph}
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
                 imgsrc={Sdata[4].imgsrc}
                 title={Sdata[4].title}
                 paragraph={Sdata[4].paragraph}
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

    

    </div>

    
      
    <div id="menu3" class="tab-pane fade"><br/>
    
    <div id="Products" className="city ">
<div className="container-fluid sizeofheading text">
           
    <div className='row'>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[0].imgsrc}
                 title={Sdata[0].title}
                 
                 paragraph={Sdata[0].paragraph}
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
                 imgsrc={Sdata[0].imgsrc}
                 title={Sdata[0].title}
                 paragraph={Sdata[0].paragraph}
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
                 imgsrc={Sdata[0].imgsrc}
                 title={Sdata[0].title}
                 paragraph={Sdata[0].paragraph}
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
                 imgsrc={Sdata[0].imgsrc}
                 title={Sdata[0].title}
                 paragraph={Sdata[0].paragraph}
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

    </div>

    </div>
  </div>


  
    </>
  );
}
export default Products;
