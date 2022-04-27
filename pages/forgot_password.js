import React,{useState} from "react";
import Link from 'next/link';
import Cookies from "universal-cookie";
import axios from "axios";

const Forgot_password = () => {
  const [password,setpassword] = useState({
    phoneNumber:"",
    currentPassword:"",
    newPassword:""
  })
  const cookies = new Cookies();
  var token = cookies.get("cookies-token");
  if (!token) {
    return <h5 className='login-token'>Please Login First</h5>;
  }
 

  const UpdateAddress = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://staging.apricart.pk/v1/auth/close/password/update`,password,{
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + cookies.get('cookies-token'),  
          }
      }
      );
      console.log('aaaaa',password)
      alert(response.data.message)
    } catch (err) {
     console.log(err.data)
    }
 
  
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setpassword({ ...password, [name]: value });
  };
  return (
    <>
      <section className="profile_sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <div className="personal_details" id="myDIV">
                <div className="personal_info">
                 <Link href='/profile_user' passHref>
                 <button href="#" className="btn">
                    Personal Information
                  </button>
                 </Link>
                </div>
                <div className="change_password">
                  <button href="#" className="btn active">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="personal_form"></div>
              <div className="cont_shop_sec1">
                <div className="row center">
                  <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
                  <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <div className="personal-f">
                      <form onSubmit={UpdateAddress}>
                        <div className="form-group">
                          <label >
                           Phone Number{" "}
                          </label>
                          <input
                            type="number"
                            name="phoneNumber"
                            className="form-control"
                            placeholder=""
                            onChange={(e) => handleChange(e)}
                            required
                          />
                          
                        </div>
                        <div className="form-group">
                          <label >
                            Current Password
                          </label>
                          <input
                            type="password"
                            name="currentPassword"
                            className="form-control"
                            placeholder=""
                            onChange={(e) => handleChange(e)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label >
                            New Password
                          </label>
                          <input
                            type="password"
                            name="newPassword"
                            className="form-control"
                            placeholder=""
                            onChange={(e) => handleChange(e)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <button>Update Password</button>
                        </div>
                      </form>
                    </div>
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

export default Forgot_password;
