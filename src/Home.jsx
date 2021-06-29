import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';
//import Monogram from './Monogram';

// function ncard(val){
//   return(
// <Cards
//     imgsrc={val.imgsrc}
//     title={val.title}
//     paragraph={val.paragraph}
// />          
//   )
// }

const Home = () => {
  
  return (
    <>
    <div className="container-fluid">
    <div className="row forpadding mt-5">
      <div className="col-lg-5 col-sm-12 sizeofheading">
        <h1 className="text-primary ">Create <br/>Personalize <br/>Mental Docor</h1>
        <p>Lorem Ipsum is simply dummy text <br/>of the printing and typesetting industry.</p>
        <button type="button" class="btn btn-primary mt-5">Create Now</button>
      </div>
      
      <div className="col-lg-7 col-sm-12">
        <img src="Header_Image.jpg" alt="not found" className="imghw"/>
      </div>
    </div>
</div>


{/* -------------Top Products code----------- */}
<div className="container-fluid sizeofheading">
      <h3 className="newsCard"><b>Top Products</b></h3>
           
    <div className='row mt-5'>
            
          {/* {Sdata.map(ncard)}; */}
          
            <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[0].imgsrc}
                 title={Sdata[0].title}
                 paragraph={Sdata[0].paragraph}  
           />
           </div>
           
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
           </div>
           </div>
          {/* ----Top products End---- */}

        {/* ----Own Design Start---- */}
      <div className="row">
      <div className="col-lg-7 col-sm-12">
      <img src="own_design.PNG" alt="not found" className="imghw  "/>
      </div>
      <div className="col-lg-5 col-sm-12 sizeofheading">
      <div className="container-fluid sizeofheading ">
      <h3 className="newsCard"><b>Own Design?</b></h3>
      <p>Lorem Ipsum is simply dummy text <br/>of the printing and typesetting industry.</p>
      <button type="button" class="btn btn-primary btn-lg mt-5 p-3">Create Custom Design</button>
      </div>
      </div>
      </div>
        {/* ----Own Design End---- */}


      {/*-----Featured Products code-----*/}
      <div className="container-fluid sizeofheading">
      <h3 className="newsCard"><b>Featured Products</b></h3>
      {/*----Row 1 Start----*/}
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
           </div>
{/*-------Featured Products End ------ */}


           <div className="row">
           <div className="col-lg-12 sm-col-12">
           <img src="bannerrr.PNG" alt="not found" className="bimg"/> 
            </div> 
            </div> 
        

 {/* -------Gallery code------- */}
      <div className="container-fluid sizeofheading">
      <h3 className="newsCard"><b>Gallery</b></h3>
      <div className="row">
      <div className="col-lg-4 col-sm-12 ">
      <a href="https://www.qries.com/">
         <img alt="not found" src="Gr1.png" className="imgradius pt-5"/>
      </a>
      </div>
      <div className="col-lg-4 col-sm-12 ">
      <a href="https://www.qries.com/">
         <img alt="not found" src="Gr2.png" className="imgradius pt-5"/>
      </a>
      </div>
      <div className="col-lg-4 col-sm-12">
      <a href="https://www.qries.com/">
         <img alt="not found" src="Gr3.png" className="imgradius pt-5"/>
      </a>
      </div>
      </div>

      <div className="row">
      <div className="col-lg-4 col-sm-12">
      <a href="https://www.qries.com/">
         <img alt="not found" src="Gr3.png" className="imgradius pt-5"/>
      </a>
      </div>
      <div className="col-lg-4 col-sm-12">
      <a href="https://www.qries.com/">
         <img alt="not found" src="Gr5.png" className="imgradius pt-5"/>
      </a>
      </div>
      <div className="col-lg-4 col-sm-12">
      <a href="https://www.qries.com/">
         <img alt="not found" src="Gr2.png" className="imgradius pt-5"/>
      </a>
      </div>
      </div>

      <div className="row">
      <div className="col-lg-4 col-sm-12">
      <a href="https://www.qries.com/">
         <img alt="not found" src="Gr2.png" className="imgradius pt-5"/>
      </a>
      </div>
      <div className="col-lg-4 col-sm-12">
      <a href="https://www.qries.com/">
         <img alt="not found" src="Gr1.png" className="imgradius pt-5"/>
      </a>
      </div>
      <div className="col-lg-4 col-sm-12">
      <a href="https://www.qries.com/">
         <img alt="not found" src="Gr3.png" className="imgradius pt-5"/>
      </a>
      </div>
      </div>

      </div> 
    </>
  );
}

export default Home;
