// import React, { useEffect, useState } from "react";
// import Cookies from "universal-cookie";
// import axios from "axios";

// const Grocery_list = () => {
//   const cookies = new Cookies();
//   const [proAddress, setAddress]  = useState([]);
//   const [paymentType, setPaymentType]  = useState([]);
//   const [userData, setUserData] = useState({
//     city: userCity,
//     userid: userId,
//     address: 5282,
//     notes: "test order",
//     payment: "cash",
//   });

//   useEffect(() => {
//     getAddress();
//     getPaymentType();
//   }, []);

//   var token = cookies.get("cookies-token");
//   if (!token) {
//     return <h5 className="login-token">Please Login First</h5>;
//   }
  
//   let userId = cookies.get("userId");
//   let userCity = cookies.get("cities");

// //-------Get Address Api Start--------------///
  
//   const getAddress = async () => {
//     const config = {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + cookies.get("cookies-token"),
//       },
//     };
//     const resp = await axios.get(
//       `https://staging.apricart.pk/v1/home/address/delivery?city=${cookies.get(
//         "cities"
//       )}&lang=en`,
//       config
//     );
//     setAddress(resp.data.data);
//     let myaddress = resp.data.data;
//     proAddress = myaddress;

//     console.log("My Address", proAddress);
//   };

  


//   //--------------Get Address Api End----------////



//   //------------Get Payment Method API start ---------------////
  
//   const getPaymentType = async () => {
//     const config = {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + cookies.get("cookies-token"),
//       },
//     };
//     const resp = await axios.get(
//       `https://staging.apricart.pk/v1/order/payment/info`,
//       config
//     );
//     setPaymentType(resp.data.data);
//     let mypayment = resp.data.data;
//     paymentType = mypayment;
//   };

  
//   //------------Get Payment Method API END ---------------////

  

//   const handleOrder = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `https://staging.apricart.pk/v1/order/checkout/manual`,
//         userData,
//         {
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + cookies.get("cookies-token"),
//           },
//         }
//       );
//       console.log("Checkout Data", response.data);
//       alert(response.data.message);
//     } catch (err) {
//       const Error = err.response.data;
//     }
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };
  
//   console.log("My Data", userData);
//   return (
//     <>
//       <section className="grocery_sec">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-12 col-sm-12  col-md-12  col-lg-12  col-xl-12  col-xxl-12">
//               <div className="grocery_upload">
//                 <h2>Type Or Upload Your Grocery List</h2>
//                 <h3>Disclaimer: Delivery only in Karachi and Peshawar</h3>
//                 <p>
//                   For online payments, a payment link is shared with you once
//                   your order has been <br /> Purchased.
//                 </p>
//                 <p className="happy_shop">Happy Shopping!</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="grocery_sec2">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-12 col-sm-12  col-md-8  col-lg-8  col-xl-8  col-xxl-8 d-block m-auto">
//               <div className="row">
//                 <div className="col-12 col-sm-12  col-md-6  col-lg-6  col-xl-6  col-xxl-6">
//                   <div className="selectadd">
//                     <div className="mb-3">
//                       <label
//                         htmlFor="exampleFormControlInput1"
//                         className="form-label text-center"
//                       >
//                         Select Address
//                       </label>
//                       <select
//                         className="form-select"
//                         aria-label="Default select example"
                        
//                       >
//                         {proAddress.map((addr)=> {
//                           return(
//                            <div key={addr.id}>
//                               <option value={addr.googleAddress}>{addr.googleAddress}</option>
//                            </div>
//                           )
//                         })}
//                       </select>
//                     </div>
//                     <div className="mb-3">
//                       <label
//                         htmlFor="exampleFormControlInput1"
//                         className="form-label"
//                       >
//                         Coupon(If available)
//                       </label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="exampleFormControlInput1"
//                         placeholder="coupon"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label
//                         htmlFor="exampleFormControlInput1"
//                         className="form-label text-center"
//                       >
//                         Select payment
//                       </label>
//                       <select
//                         className="form-select"
//                         aria-label="Default select example"
//                       >
//                         {paymentType.map((type)=> {
//                           return(
//                             <div key={type.id}>
//                               <option value={type.name}>{type.name}</option>
//                             </div>
//                           )
//                         })}
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12 col-sm-12  col-md-6  col-lg-6  col-xl-6  col-xxl-6"></div>
//               </div>
//               <div className="textarea_ma">
//                 <div className="mb-3">
//                   <textarea
//                    name="notes"
//                     className="form-control"
//                     id="exampleFormControlTextarea1"
//                     rows="3"
//                     onChange={(e) => handleChange(e)}
//                     placeholder="Type-in or paste your grocery items here."
//                   ></textarea>
//                 </div>
//               </div>

//               <div className="col-8">
//                 <div className="form-group">
//                   <button onClick={handleOrder}>Submit</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Grocery_list;

import React from 'react'

const grocery_list = () => {
  return (
    <div>grocery_list</div>
  )
}

export default grocery_list