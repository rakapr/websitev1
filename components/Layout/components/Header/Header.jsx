import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import BtnCart from "../test";
import WelcomeBtn from '../Auth/Test';
import { useRouter } from "next/router";
import Cookies from 'universal-cookie';
import CatagoryBtn from '../test1'
import Image from 'next/image'



const baseURL = "https://cbe.apricart.pk/v1";

export default function Header() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const cookies = new Cookies();
  const router = useRouter();

  function onChange(newName) {
    setCookie('name', newName, { path: '/' });
  }

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get(
        `https://cbe.apricart.pk/v1/catalog/products/search?page=1&size=30&term=${text}&category=&city=${cookies.get('cities')}&lang=en`
      );
      setUsers(response.data.data);
    };
    loadUsers();
  },[]);

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  

//   function isLoggedIn() {
//     let token = getCookie('login_token');
//     if(token !== undefined && token.trim() !== ''){
//         return true;
//     }
//     return false;
// }
// console.log(isLoggedIn())

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = users.filter((user) => {
        const regex = new RegExp(`${text}`, "gi");
        return user.title.match(regex);
      });
    }

    setSuggestions(matches);
    setText(text);
  };

  let [searchInput, setSearchInput] = useState("");
 
  if (searchInput.length == 0) {
    searchInput = "product";
  }
  function inputData(e) {
    e.preventDefault();
  }
// let logindata;
//   //Login/Welcome condition
//   if(isLoggedIn()){
//     logindata =true
// }
// else{
//   logindata = false
// }

//if user logedin useSate is true
  const [user, setAuthenticated] = useState(false);
  
    const login = () => {
        setAuthenticated(true);
    };

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         setAuthenticated(true);
    //     } else if (token === null) {
    //         setAuthenticated(false);
    //     }

    //     return () => {};
    // }, []);
    // const handleSubmit = (e) => {
    //   localStorage.removeItem("token");
    // };

    function handleSubmit(){
      localStorage.removeItem('token');
    }
  const Links = user ? (
    <li className="nav-item">
      <div className="dropdown">
        <button
          className="dropbtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          {""}
          <a className="nav-link" href="">
            <img src="/assets/images/user.png" 
            // width={20} height={20}
            className="img-fluid" 
            alt=""
            />
          
            
            Welcome User
            {/*
            {profile.map((pro) => {
             return(<p>{pro.name}</p>)
           })} */}
          </a>
        </button>
        <div className="dropdown-content">
          <Link href="/profile_user" passHref>
            <a href="#" >
              <img src="/assets/images/user.png" 
              // width={20} height={20}
              className="img-fluid"
              alt=""
              />
              My Profile
            </a>
          </Link>
          <Link href='/order' passHref>
          <a href="#">
            <img src="/assets/images/bag-check.png"
            // width={20} height={20}
            className="img-fluid"
            alt=""
            />
            My Orders
          </a>
          </Link>
         <Link href='/address' passHref>
            <a href="#">
            <img src="/assets/images/location.png" 
            // width={20} height={20}
            className="img-fluid" 
            alt=""
            />
             My
            Address
          </a>
         </Link>
          <a href="" onClick={() => {handleSubmit}}>
            <img src="/assets/images/logout.png"
            // width={20} height={20}
            className="img-fluid" 
            alt=""
            /> Logout
          </a>
        </div>
      </div>
    </li>
  ) : (
    <li className="nav-item">
      <div className="dropdown">
      <WelcomeBtn className='navlink'/>
        {/* <button
          className="dropbtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          {" "}
          <a className="nav-link" href="#">
            <img src="assets/images/user.png" className="img-fluid" />
            Login/Signup
          </a>
        </button> */}
      </div>
    </li>
  );

  const cart = useSelector((state) => state.cart);
  const wish = useSelector((state) => state.wish);

  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  const cartnotify = () => {
    if (cart.length == 0) {
      toast.info("No Item in the Cart !");
    }
  };
  const wishnotify = () => {
    if (wish.length == 0) {
      toast.info("No Item in Wishlist !");
    }
  };

  const wishList =
    wish.length > 0 ? (
      <span className="heart2">
        <AiFillHeart className="abcd" />
      </span>
    ) : (
      <span className="heart1">
        <AiOutlineHeart className="abcd" />
      </span>
    );

  return (
    //Main Header Start
    <div className="container-fluid hae">
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container-fluid">
          <Link href="/" passHref>
            <a className="navbar-brand">
              <img
                src="/assets/images/logo.png"
                className="img-fluid"
                width={150} height={60}
                alt=""
              />
            </a>
          </Link>
          
          <form className="d-flex ms-auto manu_cat" required onSubmit={inputData}>
          <div className="sidebar-1">
             <a className="nav-link d-lg-none catagory-style" 
           >
              <CatagoryBtn/>
              </a> 
            </div>
            <div className=" d-md-none d-lg-none">
              {/* <button onClick="myFunction()" className="dropbtn">
                Category
              </button> */}
            </div>
            <div className="input-group searching_pro">
              <input
                className="form-control border-0 mr-2"
                type="search"
                placeholder="Search Products"
                aria-label="Search"
                onChange={(e) => onChangeHandler(e.target.value)}
                value={text}
                required
              />

              <Link href="/search/[id]" as={"/search/" + text} passHref>
                <button
                  className="btn btn-primary chane border-0"
                  type="submit"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </Link>
              
            </div>
          </form>

          <div
            className="cart-header"
            id="navbar-content"
          >
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0 float-end">
              <li className="nav-item">
                <Link href="/grocery_list" passHref>
                  <a className="nav-link" aria-current="page" href="#">
                    Grocery List 
                  </a>
                </Link>
              </li>

              <li className="nav-item" onClick={wishnotify}>
                <Link href="/wishlist" passHref> 
                  <a className="nav-link" href="#">
                    {wishList}
                    Wishlist
                  </a>
                </Link>
              </li>
              <BtnCart />
              {cart.length}
              
              {Links}
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div className="suggDrop">
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <div
                key={i}
                className="suggestion col-md-12"
              >
                <Link
                  href="/details/[id]"
                  as={"/details/" + suggestion.sku}
                  className="Link-CSS"
                  passHref
                >
                  <p>{suggestion.title}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>

      
     
    </div>
  );
}
