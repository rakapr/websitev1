import React from 'react'

const grocery_list = () => {
  return (
   <>
    <section className="grocery_sec">
      <div className="container-fluid">
         <div className="row">
            <div className="col-12 col-sm-12  col-md-12  col-lg-12  col-xl-12  col-xxl-12">
               <div className="grocery_upload">
                  <h2>Type Or Upload Your Grocery List</h2>
                  <h3>Disclaimer: Delivery only in Karachi and Peshawar</h3>
                  <p>For online payments, a payment link is shared with you once your order has been <br/> Purchased.</p>
                  <p className="happy_shop">Happy Shopping!</p>
               </div>
           </div>
         </div>
      </div>
   </section>
    <section className="grocery_sec2">
      <div className="container-fluid">
         <div className="row">
           
            <div className="col-12 col-sm-12  col-md-8  col-lg-8  col-xl-8  col-xxl-8 d-block m-auto">
               <div className="row">
                  <div className="col-12 col-sm-12  col-md-6  col-lg-6  col-xl-6  col-xxl-6">
                     <div className="selectadd">
                        <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label text-center">Select Address</label>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                     </div>
                     <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Coupon(If available)</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="coupon"/>
</div>
<div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label text-center">Select payment</label>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Open this select menu</option>
                          <option value="1">Cash On Delivery ~ Cash On Delivery</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                     </div>
                  </div>
                  </div>
                  <div className="col-12 col-sm-12  col-md-6  col-lg-6  col-xl-6  col-xxl-6">
                     
                  </div>

               </div>
               <div className="textarea_ma">
                  <div className="mb-3">
 
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"placeholder="Type-in or paste your grocery items here."></textarea>
                  </div>
               </div>
              
            </div>
         </div>
      </div>
   </section>
   </>
  )
}

export default grocery_list