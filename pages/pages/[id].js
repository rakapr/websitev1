import React,{useState} from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Catagory1 from "../../components/Layout/components/Categories/Categories";
let base_url_api = "https://cbe.apricart.pk/v1";
import Link from "next/link";

export default function Post({ postData }) {
  const router = useRouter();

  // const [count, setCount] = useState(1);

  // // Function to increment count by 1
  // const incrementCount = () => {
  //   // Update state with incremented value
  //   setCount(count + 1);
  // };
  // console.log("Count  :",count)
  

  if (router.isFallback) {
    return (
      <div>
        <h2>Loading Page Data...</h2>
      </div>
    );
  }
  function perPage(){
}
 
  return (
    <div>
      <section className="popular_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-2  col-md-2  col-lg-2  col-xl-2  col-xxl-2">
              <Catagory1/>
            </div>
            <div className="col-12 col-sm-10  col-md-10  col-lg-10  col-xl-10  col-xxl-10">
              <div className="container-fluid">
              <section className="categorybanner_sec">
                     <div>
                        <div className="row">
                           <div className="col-12 col-sm-12  col-md-12  col-lg-12  col-xl-12  col-xxl-12">
                              <div className="recommend_banner">
                                 <img src="/assets/images/bachatbox.png" className="img-fluid" alt=""/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>
                <div>
                  
                  <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {postData.map((cat) => {
                      const { productImageUrl } = cat;
                      return (
                        <>
                          <div className="col">
                            <div className="p-3 border bg-light btnchan">
                              <div className="pro_img">
                                <Link
                                  href="/details/[id]"
                                  as={"/details/" + cat.sku}
                                  classNameName="Link-CSS"
                                  passHref
                                >
                                  <img
                                    src={base_url_api + productImageUrl}
                                    classNameName="img-fluid"
                                    alt=""
                                  />
                                </Link>
                                <h5>{cat.title}</h5>
                                
                                <h4>
                                  RS. <strong>{cat.currentPrice}</strong>
                                </h4>
                                <div className="pro_btn1">
                                  <select name="product" id="product">
                                    <option value="1">1 KG</option>
                                    <option value="2">2 KG</option>
                                    <option value="3">3 KG</option>
                                  </select>
                                </div>
                                <div className="pro_btn2">
                                  <a href="#" className="btn btn-primary chane">
                                    Add to Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
               
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = ["/pages/1", "/pages/2"];
  return { paths, fallback: true };
}

export async function getStaticProps({ query, params }) {
  const { id } = query || params;
  
  const res = await fetch(`https://cbe.apricart.pk/v1/catalog/products/search?page=${page}&size=60&term=${id}&category=&city=karachi&lang=en`);
  const alldata = await res.json();
  const postData = alldata.data;
  
  return {
    props: {
      postData
    },
  };
}
