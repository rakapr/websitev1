import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://cbe.apricart.pk/v1/auth/open/login",
        { ...userData }
      );
      console.log("Data", response.data);
      console.log("response login", response.data.message);
      localStorage.setItem("token", response.data.data.token);
      
      router.push("/profile_user");
      toast.success(response.data.message);
    } catch (err) {
      const Error = err.response.data;
      toast.error(Error.message);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="exampleFormControlInput1" className="label-left">
          Phone
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            +92
          </span>
          <input
            type="tel"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=""
            name="username"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label label-left">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="change_pass_btn">
          <div className="mb-3">
            <Link href="/forgot_password" data-bs-dismiss="modal">
              <a className="btn1" role="button">
                Forgot Password
              </a>
            </Link>
          </div>
          <div className="mb-3">
            <a href="#">
            <button className="btn3">Login</button>
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
