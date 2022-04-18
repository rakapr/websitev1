import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Catagory1 from "../../components/Layout/components/Categories/Categories";
let base_url_api = "https://cbe.apricart.pk/v1";
import Link from "next/link";
import Pagination from "../../components/Layout/components/Pagination/pagination";
import PerPage from "../../components/Layout/components/PerPage/PerPage";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import Image from 'next/image'
import RelatedProduct from "../../components/Layout/components/RelatedProduct/RelatedProduct";


export default function Post({ postData }) {
  const dispatch = useDispatch();

  const router = useRouter();

  const [size, setSize] = useState("15");
  if (router.isFallback) {
    return (
      <div>
        <h2>Loading Page Data...</h2>
      </div>
    );
  }
  function perPage() {}
  let total = postData.length;
  return (
    <div>
      <section className="popular_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-2  col-md-2  col-lg-3  col-xl-2  col-xxl-2">
              <Catagory1 />
            </div>
             <div className="col-12 col-sm-12  col-md-10  col-lg-9  col-xl-10  col-xxl-10 parot">
              {postData.map((catagory) => {
                const { productImageUrl, categoryleafName, minQty, maxQty } =
                  catagory;
                return (
                  <>
                   
                    <section className="ContentSec">
                      <div className="container-fluid">
                        <div className="prothreeHead">
                          <ol className="breadcrumb">
                            <li>
                              {" "}
                              <a passHref="">Home</a>{" "}
                            </li>
                            <li>
                              <a passHref="">{categoryleafName}</a>
                            </li>
                            <li>
                              <a passHref="">{catagory.title}</a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </section>
                    <section className="productdet_sec">
                      <div className="container">
                        <div className="row">
                          <div className="col-12 col-sm-4  col-md-4  col-lg-4  col-xl-4  col-xxl-4">
                            <div className="proDimg">
                              <img
                                src={base_url_api + productImageUrl}
                                classNameName="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6  col-md-6  col-lg-6  col-xl-6  col-xxl-6">
                            <div className="productD_head">
                              <h3>{catagory.title}</h3>
                              <hr />
                              <h4>Rs. {catagory.currentPrice}</h4>
                              <hr />
                              <div className="productD_para">
                                <p>{catagory.description}</p>
                                <span>{catagory.sku}</span>
                              </div>
                              <ul className="detail-pro">
                                <li>
                                  <div className="prodetails_size">
                                    <select name="product" id="productd">
                                      <option value="1">1 KG</option>
                                      <option value="2">2 KG</option>
                                      <option value="3">3 KG</option>
                                    </select>
                                  </div>
                                </li>
                                <li>
                                  {catagory.inStock == true ? (
                                    <div
                                    className="pro_btn2"
                                    onClick={() =>
                                      dispatch(addToCart(catagory))
                                    }
                                  >
                                    <a
                                      href="#"
                                      className="btn btn-primary chane"
                                    >
                                      Add to Cart
                                    </a>
                                  </div>
                                  ) : (
                                    <>
                                      <div className="pro_btn2">
                                        <a
                                          passHref="#"
                                          className="btn btn chane secondary"
                                          disabled
                                        >
                                          Out of stock
                                        </a>
                                      </div>
                                    </>
                                  )}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </>
                );
              })}
              <RelatedProduct />
            </div>
           </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = ["/details/2", "/details/2"];
  return { paths, fallback: true };
}

export async function getStaticProps({ query, params }) {
  const { id } = query || params;

  let perPage = 1;
 
  const res = await fetch(
    "https://cbe.apricart.pk/v1/catalog/products/detail?id=" + id 
  );
  const alldata = await res.json();
  const postData = alldata.data;

  return {
    props: {
      postData,
    },
  };
}
