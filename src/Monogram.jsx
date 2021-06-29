import React, {useState} from 'react';
import ReactStars from 'react-rating-stars-component';
import Cards from './Cards';
import Sdata from './Sdata';



const Monogram = () =>{   
              
     const [show,setShow]=useState(false)
      return(
            <>
            <div className="container mb-5">
            <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="2nd.jpg" alt="not found"/>
            {/* <img src= {props.imgsrc}  alt="..."/> */}
            <div className="row float-center">
            <div className="col-lg-3 col-md-3 col-sm-3 ml-5 shadow mb-5 bg-white rounded">
            <img src="2nd.jpg" alt="not found"/>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 ml-1 shadow mb-5 bg-white rounded">
            <img src="2nd.jpg" alt="not found"/>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 ml-1 shadow mb-5 bg-white rounded">
            <img src="2nd.jpg" alt="not found"/>
            </div>
            </div>
            </div>




            <div className="col-lg-6 col-md-6 col-sm-12">
            <h2>Monogram-classic</h2>
            <ReactStars size={38} isHalf={true} />
            <h2>AED 250</h2>
            <br/>
            <form>
            <p className="inputnames form-label">Size</p>
                  <select className="col-lg-8 col-md-8 col-sm-12 p-3">
                        <option>5cm</option>
                        <option>10cm</option>
                        <option>15cm</option>
                        <option>20cm</option>
                  </select>
                  <br/>
                  <br/>
            <p className="inputnames form-label">Color</p>
            <input type="text" placeholder="color name" className="col-lg-8 col-md-8 col-sm-12 p-3"/>
                  <br/>
                  <br/>
            <p className="inputnames form-label">Capital Letter</p>
            <input type="letter" placeholder="Letter" className="col-lg-8 col-md-8 col-sm-12 p-3"/>
                  <br/>
                  <br/>
            <p className="inputnames form-label">Text</p>
            <input type="text" placeholder="type text" className="col-lg-8 col-md-8 col-sm-12 p-3"/>
            <br/>
            <div className="row">
            <div className="col-lg-4 col-md-4 ">
            <button type="button" class="btn btn-primary btn-lg mt-5 btn-block">Preview</button>
            </div>
            <div className="col-lg-4 col-md-4">
            <button type="button" class="btn btn-primary btn-lg mt-5 btn-block">Add to Cart</button>
            </div>
            </div>
            </form>



            </div>
            </div>
            </div>

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
           


            <div className="Monogram">
            {
                  show?
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
           
           /* third row start */
           
                       :null
            }
           <button onClick={()=>setShow(!show)} type="button" className="btn btn-outline-primary showall mb-5 mt-5" >Show All</button>
           </div>
           </div>
            </>
      )
}

export default Monogram;