import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
let base_url_api = "https://cbe.apricart.pk/v1";
import { withCookies, Cookies } from 'react-cookie';
import { useCookies } from 'react-cookie';



const profile_user = () => {
   
   
  return (
    <>
     <section className="profile_sec">
         <div className="container">
            <div className="row">
               <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
               </div>
               <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                  <div className="personal_details" id="myDIV" >
                     <div className="personal_info">
                        <button href="#" className="btn active">Personal Information</button>
                     </div>
                     <div className="change_password">
                       <Link href="/forgot_password" passHref>
                       <button href="#" className="btn">Change Password</button>

                       </Link>
                     </div>
                     
                  </div>
               </div>
               <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
               </div>
               <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="personal_form">
                     
                  </div>
                  <div className="cont_shop_sec1">
                     <div className="row center">
                        <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                        </div>
                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                           <div className="personal-f">
                             
                                 <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Name *</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" required/>
                                 </div>
                                  <label htmlFor="exampleFormControlInput1">Phone No *</label>
                                  
                                 <div className="input-group mb-3">

                                 <span className="input-group-text" id="inputGroup-sizing-sm">+92</span>
                                 <input type="tel" className="form-control" id="exampleFormControlInput1" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                                 </div>
                                 
                                 <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Email Address *</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" required/> 
                                 </div>
                                
                                 <form>
                                  <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Gender</label>
                                    
                                 <div className="custom-control custom-radio custom-control-inline">
                                 </div>
                                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
                                <label className="custom-control-label" htmlFor="customRadioInline1">Male </label>
                                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
                                <label className="custom-control-label" htmlFor="customRadioInline2">Female </label>
                              </div>
                            
                              <div className="form-group">
                                    <button>Update Profile</button>
                                    
                                 </div>
                              </form>
                           </div>
                           
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-1">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
      </section>
    </>
  );
};

export default profile_user;
