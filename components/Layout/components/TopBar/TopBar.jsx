import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Popup from "../Popup/Popup";
import Cookies from "universal-cookie";
let base_url_api = "https://cbe.apricart.pk/v1";

export default function Layout() {
  const cookies = new Cookies();

  if (cookies.get("cities") == "undefined") {
    cookies.set("cities", "karachi");
  }

  const [users, setUsers] = useState([]);
  const [getcity, setcity] = useState(cookies.get("cities"));

  const getPopularitems = async () => {
    const response = await axios.get(
      base_url_api + "/home/address/cities?lang=en"
    );
    setUsers(response.data.data);
  };
  useEffect(() => {
    getPopularitems();
  }, []);

  const [user, setUser] = useState([]);
  const getTicker = async () => {
    const response = await axios.get(
      `https://cbe.apricart.pk/v1/home/all?client_lat=34.02910146301811&client_long=71.63761019869207&city=${cookies.get(
        "cities"
      )}&lang=en&userid=abc123&web=true`
    );
    setUser(response.data.data.ticker);
  };
  useEffect(() => {
    getTicker();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const closeButton = () => {
    setIsOpen(!isOpen);
    window.location.reload();
  };

  const handleCity = (event) => {
    setcity(event.target.value);
  };
  const submitCities = (e) => {
    e.preventDefault();
    setcity(e.target.value);
    // window.location.reload();
  };
  console.log(getcity);
  cookies.set("cities", getcity);

  let checkcity = cookies.get("cities");

  return (
    // Topbar Start
    <header className="main_header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 col-sm-9  col-md-9  col-lg-9  col-xl-9  col-xxl-9">
            <div className="delivery">
              <ul>
                <li className="deliver">
                  <a href="#">
                    <img src="assets/images/bike.png" className="img-fluid" alt=""/>{" "}
                    Fast & Free Delivery
                  </a>
                </li>
                <li onClick={togglePopup}>
                  <a href="#">
                    <img
                      src="assets/images/location.png"
                      className="img-fluid"
                      alt=""
                    />{" "}
                    <span className="capitalize-class"> {checkcity}</span>
                  </a>
                </li>
                <li className="bos">
                  {" "}
                  <a href="#">English</a>
                </li>
                <li>
                  
                  {/* <marquee direction="top">
                    <div className="ticker">
                      <a className="inTicker">{user}</a>
                    </div>
                  </marquee> */}
                </li>
              </ul>
            </div>
            {isOpen && (
              <Popup
                content={
                  <>
                    <form onSubmit={submitCities}>
                      <label className="select_city">Select City</label>
                      <hr />
                      <div className="freehome_d">
                        <div className="freehome_title">
                          <input
                          className="radiobtn"
                            type="radio"
                            name="cities"
                            value="karachi"
                            checked={getcity === "karachi"}
                            onChange={handleCity}
                          />
                          Karachi
                        </div>
                        <div className="freehome_title">
                          <input className="radiobtn"
                            type="radio"
                            name="cities"
                            value="peshawar"
                            checked={getcity === "peshawar"}
                            onChange={handleCity}
                          />
                          Peshawar
                        </div>
                      </div>
                      <>
                        {/* {users.map((curElem) => {
                        const { id, city } = curElem;
                        console.log(curElem);
                        return (
                          <>
                            <div className="radio" key={id}>
                              <label>
                                <input
                                  type="radio"
                                  value={city}
                                  name="one"
                                  checked={getcity === {city}}
                                  
                                   onChange={handleCity}
                                />
                                {city}
                              </label>
                            </div>
                          </>
                        );
                      })} */}
                      </>
                      <Button type="submit" onClick={closeButton}>
                        Submit
                      </Button>
                    </form>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </div>

          <div className="col-12 col-sm-12  col-md-3  col-lg-3  col-xl-3  col-xxl-3">
            <div className="head_phone deliver">
              <a href="#">
                <img src="assets/images/phone.png" className="img-fluid" alt=""/>{" "}
                0304-1110195
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
