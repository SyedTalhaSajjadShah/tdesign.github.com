import React from 'react';
import './App.css';

const Contact = () => {
  return (
    <>
    <div className="row">
    <div className="col-lg-12 col-sm-12 float-sm-left mt-5">
    <h1 className="pph text-center">Contact Us</h1>
    </div>
    </div>
    <hr className="hrl"/>
    <div className="maindiv">
    <div className="conatiner mt-5 parentbox">
    <div className="marginparentbox">
    <h2>Get In touch</h2>
    <p>Drop a message below</p>
    <br/>
    <input type="text" placeholder="Name" className="inputt"/>
    <input type="email" placeholder="Email Address" className="inputt2"/>
    {/* <input type="message" placeholder="Type your message here" className="inputt3"/> */}
    <textarea name="message" rows="6" cols="44" placeholder="Type your text here" className="textarea"></textarea>
    <br/>
    <br/>
    <button type="button" class="btn btn-primary conbtn">Send</button>
    </div>
    </div>
    <div className="conatiner childbox">
    
    
    	<div className=" bg-primary h-100 p-lg-5 p-4 radiuse">
									<h3 className="mb-4 mt-md-4">Contact us</h3>
				        	<div className="dbox w-100 d-flex align-items-start">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-map-marker"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-phone"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Phone:</span> + 1235 2355 98</p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-paper-plane"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Email:</span> info@yoursite.com</p>
					          </div>
                    
				          </div>
                  <div className="row mt-5">
                    <div className="col-3 ">
                    <a href="https://www.facebook.com/TechozonSoftwareHouse/?ref=page_internal">
                    <img alt="not found" src="fb.jpg" className="rdaiuss pt-5"/>
                    </a>
                    </div>
                    <div className="col-3">
                    <a href="https://www.facebook.com/TechozonSoftwareHouse/?ref=page_internal">
                  
                    <img alt="not found" src="insta.jpg" className="rdaiuss pt-5"/>
                    </a>
                    </div>
                    <div className="col-3">
                    <a href="https://www.facebook.com/TechozonSoftwareHouse/?ref=page_internal">
                    <img alt="not found" src="twiter.png" className="rdaiuss pt-5"/>
                    </a>
                    </div>
                    </div>
				        	</div>


    </div>
    </div>


    {/* <section className="ftco-section mb-5 mt-5">
		<div className="container shadoww">
			<div className="row justify-content-center">
			</div>
			<div className="row justify-content-center">
				<div className="col-lg-10 col-md-12">
					<div className="wrapper">
						<div className="row no-gutters">
            <div className="col-md-5 d-flex align-items-stretch">
								<div className="info-wrap bg-primary w-100 p-lg-5 p-4 radiuse">
									<h3 className="mb-4 mt-md-4">Contact us</h3>
				        	<div className="dbox w-100 d-flex align-items-start">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-map-marker"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-phone"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Phone:</span> + 1235 2355 98</p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-paper-plane"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Email:</span> info@yoursite.com</p>
					          </div>
                    
				          </div>
                  <div className="row mt-5">
                    <div className="col-3 ">
                    <a href="https://www.facebook.com/TechozonSoftwareHouse/?ref=page_internal">
                    <img alt="not found" src="fb.jpg" className="rdaiuss pt-5"/>
                    </a>
                    </div>
                    <div className="col-3">
                    <a href="https://www.facebook.com/TechozonSoftwareHouse/?ref=page_internal">
                  
                    <img alt="not found" src="insta.jpg" className="rdaiuss pt-5"/>
                    </a>
                    </div>
                    <div className="col-3">
                    <a href="https://www.facebook.com/TechozonSoftwareHouse/?ref=page_internal">
                    <img alt="not found" src="twiter.png" className="rdaiuss pt-5"/>
                    </a>
                    </div>
                    </div>
				        	</div>
                  
							</div>


							<div className="col-md-7 d-flex align-items-stretch">
								<div><div className="contact-wrap w-100 p-md-5 p-4">
									<h3 className="mb-4">Get in touch</h3>
									<div id="form-message-warning" className="mb-4"></div> 
				      		<div id="form-message-success" className="mb-4">
				            Drop a message below
				      		</div>
									<form method="POST" id="contactForm" name="contactForm">
										<div className="row">
											<div className="col-md-12">
												<div className="form-group">
													<input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div className="col-md-12 mt-4"> 
												<div className="form-group">
													<input type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
												</div>
											</div>
											<div className="col-md-12 mt-4">
												<div className="form-group">
													<textarea name="message" className="form-control" id="message" cols="30" rows="7" placeholder="Type your Message here"></textarea>
												</div>
											</div>
											<div className="ml-lg-5 ml-md-5 mt-4">
												<div className="form-group  contactbtn">
													<input type="submit" value="Send" className="btn btn-primary"/>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
                </div>
							</div>
              
						
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> */}
    </>
  );
}

export default Contact;


































// import React from 'react';
// import './App.css';

// const Contact = () => {
//   return (
//     <>
//     <div className="row">
//     <div className="col-lg-12 col-sm-12 float-sm-left mt-5">
//     <h1 className="pph text-center">Contact Us</h1>
//     </div>
//     </div>
//     <hr className="hrl"/>
    {/* <div className="maindiv">
    <div className="conatiner mt-5 parentbox">

    </div>
    <div className="conatiner childbox">

    </div>
    </div> */}


    {/* <section className="ftco-section mb-5 mt-5">
		<div className="container shadoww">
			 */}


			{/* <div className="row justify-content-center"> */}
				{/* <div className="col-lg-10 col-md-12"> */}
					{/* <div className="wrapper"> */}


						{/* <div className="row no-gutters">
            <div className="col-md-5 d-flex align-items-stretch childd">
								<div className="info-wrap bg-primary w-100 p-lg-5 p-4 radiuse">
									<h3 className="mb-4 mt-md-4">Contact us</h3>
				        	<div className="dbox w-100 d-flex align-items-start">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-map-marker"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-phone"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Phone:</span> + 1235 2355 98</p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-paper-plane"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Email:</span> info@yoursite.com</p>
					          </div>
                    
				          </div>
                  <div className="row mt-5">
                    <div className="col-3 ">
                    <a href="https://www.facebook.com/TechozonSoftwareHouse/?ref=page_internal">
                    <img alt="not found" src="fb.jpg" className="rdaiuss pt-5"/>
                    </a>
                    </div>
                    <div className="col-3">
                    <a href="https://www.facebook.com/TechozonSoftwareHouse/?ref=page_internal">
                  
                    <img alt="not found" src="insta.jpg" className="rdaiuss pt-5"/>
                    </a>
                    </div>
                    <div className="col-3">
                    <a href="https://www.facebook.com/TechozonSoftwareHouse/?ref=page_internal">
                    <img alt="not found" src="twiter.png" className="rdaiuss pt-5"/>
                    </a>
                    </div>
                    </div>
				        	</div>
                  
							</div>


							<div className="col-md-7 d-flex align-items-stretch childd2">
								<div><div className="contact-wrap w-100 p-md-5 p-4">
									<h3 className="mb-4">Get in touch</h3>
									<div id="form-message-warning" className="mb-4"></div> 
				      		<div id="form-message-success" className="mb-4">
				            Drop a message below
				      		</div>
									<form method="POST" id="contactForm" name="contactForm">
										<div className="row">
											<div className="col-md-12">
												<div className="form-group">
													<input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div className="col-md-12 mt-4"> 
												<div className="form-group">
													<input type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
												</div>
											</div>
											<div className="col-md-12 mt-4">
												<div className="form-group">
													<textarea name="message" className="form-control" id="message" cols="30" rows="7" placeholder="Type your Message here"></textarea>
												</div>
											</div>
											<div className="ml-lg-5 ml-md-5 mt-4">
												<div className="form-group  contactbtn">
													<input type="submit" value="Send" className="btn btn-primary"/>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
                </div>
							</div>
              
						
						</div>
					</div> */}
					
				{/* </div> */}
			{/* </div> */}
		{/* </div> */}
	{/* </section> */}
//     </>
//   );
// }

// export default Contact;
