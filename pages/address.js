import React from 'react'
import Link from 'next/link';
import AddressBtn from '../components/Layout/components/Account/Test'
import AddressBtn1 from '../components/Layout/components/Auth/Test'

const address = () => {
  return (
    <>
     <section className="popular_sec">
         <div className="container">
            <div className="row">
               <div className="col-12 col-sm-12  col-md-12  col-lg-12  col-xl-12  col-xxl-12">
                  <div className="tab">
                      <Link href='/order' passHref>
                      <button className="tablinks"  id="defaultOpen">Orders</button>
                      </Link>
                      <Link href='/address' passHref>
                      <button className="tablinks active" >My Address</button>
                      </Link>
                      <Link href='/account_Detail' passHref>
                      <button className="tablinks" >Account details</button>
                      </Link>
                     <button className="tablinks" >Logout</button>
                  </div>
                  <div id="London" className="tabcontent">
                     {/* <!-- Main content -->
                     <!-- /.card -->    */}
                     
                     {/* <!-- /.card -->
                     <!-- /.content --> */}
                  </div>
                  <div id="Paris" className="tabcontent">
                     {/* <!-- Main content -->
                     <!-- /.card -->    */}
                     
                        <div className="container-fluid">
                           <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                 <div className="delivery_body_sec">
                                    <div className="card">
                                       <div className="card-header">
                                          <h3 className="card-title">Billing Address</h3>
                                       </div>
                                       {/* <!-- /.card-header --> */}
                                       <div className="card-body">
                                          <div className="billing_add">
                                            <p>aka</p>
                                            <p>Test Address</p>
                                            <p>992565885462</p>
                                            <p>abcdz@gmail.com</p>
                                            <p>Karachi</p>

                                          </div>
                                         
                                          <div className="d_address">
                                             <a href="#">Edit</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                 <div className="d_address1">
                                    <button>
                                      Add Address
                                    </button>
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

export default address