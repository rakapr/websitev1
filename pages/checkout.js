import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
let base_url_api = "https://cbe.apricart.pk/v1";

const Checkout = () => {
  
  // const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.currentPrice,
      0
    );
  };
  
  return (
    <>
      <section className="popular_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <section className="ContentSec">
                <div className="container-fluid">
                  <div className="row">
                    <div className="prothreeHead">
                      <ol className="breadcrumb">
                        <Link href="/" passHref>
                          <li>
                            {" "}
                            <a passHref="#">Home</a>{" "}
                          </li>
                        </Link>
                        <li>
                          <a passHref="/cart">Cart</a>
                        </li>
                        <li className="is-current">Check Out</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="delivery_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="delivery_body_sec">
                <div className="d_address">
                  <ul>
                    <li>
                      <h4>Pick-up Address</h4>
                    </li>
                  </ul>
                </div>
                <div className="save_dropadd">
                  <select>
                    <option value="0">Select Address</option>
                    <option value="1">Select Address</option>
                    <option value="2">Select Address</option>
                    <option value="3">Select Address</option>
                    <option value="4">Select Address</option>
                    <option value="5">Select Address</option>
                  </select>
                </div>
                <div className="payment_m">
                  <h4>Payment Method</h4>
                  <input type="radio" name="" />
                  Cash
                  <textarea placeholder="Special Instructions"></textarea>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="cont_shop">
                <h3>
                  <a passHref="#">Continue Shopping</a>
                </h3>
              </div>
              <div className="cont_shop_sec">
                <div className="billng_det">
                  <h3>Billing Details</h3>
                </div>
                <div className="check_coupan">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Coupon Code"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <div className="billingsub_tot">
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td>
                        Sub Total <sub>()</sub>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        Rs. {getTotalPrice()}
                      </td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td style={{ textAlign: "right" }}>Free</td>
                    </tr>
                    <tr>
                      <td>Coupan</td>
                      <td style={{ textAlign: "right" }}>---</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td style={{ textAlign: "right", color: "#08185A" }}>
                        Rs. {getTotalPrice()}
                      </td>
                    </tr>
                  </table>
                  <button>Check out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
