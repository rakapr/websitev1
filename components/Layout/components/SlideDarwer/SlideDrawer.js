import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../../../redux/cart.slice";
import axios from "axios";
let base_url_api = "https://cbe.apricart.pk/v1";

const SlideDrawer = (props) => {

  const [discount, setDiscount] = React.useState("none");
  // const [mydata,setData] = useState([]);

  // const getDiscount = async() =>{
  //   const response = await axios.get(
  //     'https://staging.apricart.pk/api/v1/order/cart/all?city=karachi&lang=en&orderType=delivery'
  //   );
  //   setData(response);
  //   console.log(response)
  // }
  // useEffect(() => {
  //   getDiscount();
  // },[])

  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.currentPrice,
      0
      
    );
   
  };
 

  const handleDiscount = (event) => {
    setDiscount(event.target.value);
    
  };

  console.log(discount)
  let disValue = 3;
  const Discount = getTotalPrice();
  const Avail = Discount - (Discount * disValue) / 100;
  
  return (
    <>
      <div className="sidebarD">
        
        <div className={drawerClasses}>
        <div className="cart-header1">
        <img src="assets/images/bag.png" className="img-fluid cartinner" alt=""/>
        <span>My Cart({cart.length})</span>
        </div>
          {cart.length === 0 ? (
            <>
              <h4 className="emptyCart">No items in your cart</h4>
              <div className="cartShoping">
              {/* <span className="startshoping">Start Shopping</span> */}
              <h5 className="emptyCart">Fast & Free Delivery</h5>
              </div>
            </>
          ) : (
            <>
              {cart.map((item) => {
                const { id, productImageUrl, title, currentPrice, sku } = item;
                return (
                  <>
                  
                    <div className="item cartitem">
                      <div className="image1">
                        {" "}
                        <img
                          src={base_url_api + productImageUrl}
                          alt=""
                          className="img-fluid"
                        />{" "}
                      </div>
                      <div className="description">
                        {" "}
                        <span>{item.title}</span>
                        <ul className="cart_page">
                          <li>
                            <div className="cart-quan">
                              <button
                                className="minus-btn"
                                type="button"
                                name="button"
                                onClick={() =>
                                  dispatch(decrementQuantity(item.id))
                                }
                              >
                                <i className="fa fa-minus" aria-hidden="true"></i>
                              </button>
                              <p>{item.quantity}</p>
                              <button
                                className="plus-btn"
                                type="button"
                                name="button"
                                onClick={() =>
                                  dispatch(incrementQuantity(item.id))
                                }
                              >
                                <i className="fa fa-plus" aria-hidden="true"></i>
                              </button>
                            </div>
                          </li>
                          <li className="cart-total">
                            <div className="total-price1">
                              {" "}
                              RS :{item.currentPrice}
                            </div>
                          </li>
                          <li>
                          <span
                          className="delete-btn"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </span>
                          </li>
                        </ul>
                      </div>
                      <div className="buttons float-end">
                        {" "}
                        
                        {/* <h3>
                          RS. <strong> {getProductPrice}</strong>
                        </h3>{" "} */}
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })}
              <div className="freehome_d">
                <div className="freehome_title">
                  <input
                    type="radio"
                    name="discount"
                    value="none"
                    checked={discount === "none"}
                    onChange={handleDiscount}
                  />
                  Free Home Delivery{" "}
                </div>
                <div className="freehome_title">
                  <input
                    type="radio"
                    name="discount"
                    value="availble"
                    checked={discount === "availble"}
                    onChange={handleDiscount}
                  />
                  Pick from Apricart Click & Collect Store (With 3% Discount){" "}
                </div>
              </div>
              <div className="sub_tot">
                {discount == "none" ? (
                  <h5 className="h5tot">Sub Total :{getTotalPrice()}</h5>
                ) : (
                  <h5 className="h5tot">Sub Total :{Math.floor(Avail)}</h5>
                )}
              </div>

              <div className="check_o_btn">
                <Link href="/checkout" passHref>
                  <button onClick={props.close}>Check Out</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SlideDrawer;
