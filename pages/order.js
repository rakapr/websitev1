import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import axios from 'axios';

const order = () => {
//     const [order, setOrder] = useState([]);
//     const getProfile = async () => {
//     const response = await axios.get('https://cbe.apricart.pk/v1/order/history');
//     setProfile(response.data.data);
//   };
//   useEffect(() => {
//     getProfile();
//   }, []);
//   console.log(order)
  return (
    <>
     <section className="popular_sec">
         <div className="container">
            <div className="row">
               <div className="col-12 col-sm-12  col-md-12  col-lg-12  col-xl-12  col-xxl-12">
               <div className="tab">
                      <Link href='/order' passHref>
                      <button className="tablinks active" id="defaultOpen">Orders</button>
                      </Link>
                      <Link href='/address' passHref>
                      <button className="tablinks" >My Address</button>
                      </Link>
                      <Link href='/account_Detail' passHref>
                      <button className="tablinks">Account details</button>
                      </Link>
                     <button className="tablinks" >Logout</button>
                  </div>
                  <div id="London" className="tabcontent">
                     {/* <!-- Main content -->
                     <!-- /.card -->    */}
                     <div className="card">
                        <div className="card-header">
                           <h3 className="card-title">My Orders</h3>
                        </div>
                        {/* <!-- /.card-header --> */}
                        <div className="card-body">
                           <div className="container">
                              <div className="d-flex justify-content-between">
                                 <label className="sorting_pasw ">
                                    Show 
                                    <select name="example_length" aria-controls="example" className='filterElements form-control catagory12'>
                                       <option value="10">10</option>
                                       <option value="25">25</option>
                                       <option value="50">50</option>
                                       <option value="100">100</option>
                                    </select>
                                 </label>
                                 <h3 className="myorders1">
                                    <span>Search</span>
                                    <input type="search" placeholder="Search..." className="form-control search-input" data-table="customers-list"/>
                                 </h3>
                              </div>
                              <div >
                                 <table className="table table-striped mt32 customers-list" >
                                    <thead>
                                       <tr>
                                          <th>Order Id</th>
                                          <th>Date</th>
                                          <th>Address</th>
                                          <th>Amount</th>
                                          <th>Products</th>
                                          <th>Coupon</th>
                                          <th>Status</th>
                                          <th>Cancel</th>
                                          <th>Reorder</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td>923111209637</td>
                                          <td>M.arshad</td>
                                          <td>Ana.trujillo@gmail.com</td>
                                          <td>050214</td>
                                          <td>Germany</td>
                                          <td>Ana Trujillo</td>
                                          <td>Ana.trujillo@gmail.com</td>
                                          <td>050214</td>
                                          <td>Germany</td>
                                       </tr>
                                       <tr>
                                          <td>2</td>
                                          <td>Antonio Moreno</td>
                                          <td>antoniomoreno2@gmail.com</td>
                                          <td>12209</td>
                                          <td>Mexico</td>
                                          <td>Antonio Moreno</td>
                                          <td>antoniomoreno2@gmail.com</td>
                                          <td>12209</td>
                                          <td>Mexico</td>
                                       </tr>
                                       <tr>
                                          <td>3</td>
                                          <td>Maria Anders</td>
                                          <td>mariaanders@yahoo.com</td>
                                          <td>05021</td>
                                          <td>Germany</td>
                                          <td>Maria Anders</td>
                                          <td>mariaanders@yahoo.com</td>
                                          <td>05021</td>
                                          <td>Germany</td>
                                       </tr>
                                       <tr>
                                          <td>4</td>
                                          <td>Thomas Hardy</td>
                                          <td>hardythomas.90@gmail.com</td>
                                          <td>WA1 1DP</td>
                                          <td>United Kingdom</td>
                                          <td>Thomas Hardy</td>
                                          <td>hardythomas.90@gmail.com</td>
                                          <td>WA1 1DP</td>
                                          <td>United Kingdom</td>
                                       </tr>
                                       <tr>
                                          <td>5</td>
                                          <td>Christina Berglund</td>
                                          <td>christina@outlook.com</td>
                                          <td>S-958 22</td>
                                          <td>Sweden</td>
                                          <td>Christina Berglund</td>
                                          <td>christina@outlook.com</td>
                                          <td>S-958 22</td>
                                          <td>Sweden</td>
                                       </tr>
                                       <tr>
                                          <td>6</td>
                                          <td>Davolio Nancy</td>
                                          <td>nancy.davolio@gmail.com</td>
                                          <td>810025</td>
                                          <td>India</td>
                                          <td>Davolio Nancy</td>
                                          <td>nancy.davolio@gmail.com</td>
                                          <td>810025</td>
                                          <td>India</td>
                                       </tr>
                                       <tr>
                                          <td>7</td>
                                          <td>Fuller Andrew</td>
                                          <td>andrew.10@yahoo.com</td>
                                          <td>W23 458</td>
                                          <td>United State</td>
                                          <td>Fuller Andrew</td>
                                          <td>andrew.10@yahoo.com</td>
                                          <td>W23 458</td>
                                          <td>United State</td>
                                       </tr>
                                       <tr>
                                          <td>8</td>
                                          <td>Leverling Janet</td>
                                          <td>leverling.j@gmail.com</td>
                                          <td>T5A 0B5</td>
                                          <td>Canada</td>
                                          <td>Leverling Janet</td>
                                          <td>leverling.j@gmail.com</td>
                                          <td>T5A 0B5</td>
                                          <td>Canada</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                           
                        </div>
                        {/* <!-- /.card-body --> */}
                     </div>
                     {/* <!-- /.card -->
                     <!-- /.content --> */}
                  </div>
                 
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default order