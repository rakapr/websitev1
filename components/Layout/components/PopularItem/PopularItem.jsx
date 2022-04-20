import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/cart.slice";
import { addToWish } from "../../../../redux/wish.slice";
let base_url_api = "https://staging.apricart.pk/v1";
import { AiOutlineHeart } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Cookies from 'universal-cookie';

///catalog/mostviewed?page=1&size=10&city=karachi&lang=en
const useEffectAPI = () => {
  const cart = useSelector((state) => state.cart);
  const wish = useSelector((state) => state.wish);
  const cookies = new Cookies();

  const dispatch = useDispatch();

  // const cartnotify = () => {
  //   if(cart.length == 0){
  //     toast.info("No Item in the Cart !");
  //   }
  // }

  const [users, setUsers] = useState([]);

  const getPopularitems = async () => {
    const response = await axios.get(
      base_url_api + `/home/all?client_lat=34.02910146301811&client_long=71.63761019869207&city=${cookies.get('cities')}&lang=en&userid=abc123&web=true`
    );
    setUsers(response.data.data.webProducts);
  };
  useEffect(() => {
    getPopularitems();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="popular_head">
          <h3>Popular Items</h3>
        </div>
        <div>
        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-2 g-lg-3">
            {users.map((curElem) => {
              return (
                <>
                {curElem.data.map((list) => {
                 const { id, productImageUrl, title, currentPrice, sku } = list;

                  return(
                    <div className="col" key={id}>
                  <div className="p-3 border bg-light btnchan">
                    <div
                      className="heart"
                      onClick={() => dispatch(addToWish(curElem))}
                    >
                      <a className="heart1">
                        <AiOutlineHeart />
                      </a>
                    </div>
                    <div className="pro_img">
                      <Link
                        href="/details/[idd]"
                        as={"/details/" + list.sku}
                        className="Link-CSS"
                        passHref
                      >
                        <img
                          src={base_url_api + productImageUrl}
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                      <h5>{title}</h5>
                      <h4>
                        Rs. <strong>{currentPrice}</strong>
                      </h4>
                      <div className="pro_btn1">
                        <select name="product" id="product">
                          <option value="1">1 KG</option>
                          <option value="2">2 KG</option>
                          <option value="3">3 KG</option>
                        </select>
                      </div>
                      {list.inStock == true ? (
                        <div
                          className="pro_btn2"
                          onClick={() => dispatch(addToCart(list))}
                        >
                          <a className="btn btn-primary chane">Add to Cart</a>
                        </div>
                      ) : (
                        <>
                          <div className="pro_btn2">
                            <a
                              href="#"
                              className="btn btn chane secondary"
                              disable
                            >
                              Out of stock
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                  )
                })}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default useEffectAPI;
