import React from 'react'
import Link from 'next/link';


const account_Detail = () => {
  return (
    <>
     <section className="popular_sec">
         <div className="container">
            <div className="row">
               <div className="col-12 col-sm-12  col-md-12  col-lg-12  col-xl-12  col-xxl-12">
               <div className="tab">
                      <Link href={'/order'} passHref>
                      <button className="tablinks"  id="defaultOpen">Orders</button>
                      </Link>
                      <Link href={'/address'} passHref>
                      <button className="tablinks" >My Address</button>
                      </Link>
                      <Link href={'/account_Detail'} passHref>
                      <button className="tablinks active" >Account details</button>
                      </Link>
                     <button className="tablinks" >Logout</button>
                  </div>
                  <div id="London" className="tabcontent">
                     {/* <!-- Main content -->
                     <!-- /.card -->    */}
                     
                     {/* <!-- /.card -->
                     <!-- /.content --> */}
                  </div>
                  
                  <div id="Tokyo" className="tabcontent">
                     {/* <!-- Main content -->
                     <!-- /.card -->    */}
                     <div className="card">
                        <div className="card-header">
                           <h3 className="card-title">Account Details</h3>
                        </div>
  
                        <div className="card-body">
                           <div className="cont_shop_sec2">
                              <div className="row center">
                                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div className="personal-f">
                                       <form className="row g-3">
                                          <div className="col-md-6">
                                             <div className="form-group">
                                                <label htmlFor="exampleFormControlInput1">Name *</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" required/>
                                             </div>
                                          </div>
                                          <div className="col-md-6">
                                             <div className="form-group">
                                                <label htmlFor="exampleFormControlInput1">Email Address *</label>
                                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" required/> 
                                             </div>
                                          </div>
                                          <div className="col-md-6">
                                            
                                             {/* <img src="" className="img-fluid" alt="PROFILEPICTUR"/> */}
                                          </div>
                                          <div className="col-md-6">
                                             <label htmlFor="exampleFormControlInput1">Phone No *</label>
                                             <div className="input-group mb-3 mt-2">
                                                <span className="input-group-text" id="inputGroup-sizing-sm">+92</span>
                                                <input type="tel" className="form-control" id="exampleFormControlInput1" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                                             </div>
                                          </div>
                                          <div className="col-md-6">
                                             <label htmlFor="inputAddress" className="form-label">Upload Image</label>
                                             <input type="File" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                          </div>
                                          <div className="col-12">
                                             <div className="form-group">
                                                <button>Update Profile</button>
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
            </div>
         </div>
      </section>
    </>
  )
}

export default account_Detail