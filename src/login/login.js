import React from "react";
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faApple } from "@fortawesome/free-brands-svg-icons";
function Login() {
    return (
        <div className="text-center  d-block">
            <h5 className="Headingtxt text-center margin-leftcls">Log in to your Udemy account</h5>

            <div className="buttonsignup p-1">
                <button type="button" className="btn btnwidth btn-light text-start"><FontAwesomeIcon icon={faGoogle} className="icon1 px-2" />Continue with Google</button>
            </div>

            <span className="d-block p-1">
                <button type="button" class="btnwidth  btn-light  p-2 text-start"><FontAwesomeIcon icon={faFacebook} className="px-2" />Continue with Facebook</button>
            </span>

            <span
                className="d-block p-1">
                <button type="button" class="btn btnwidth  btn-light  p-2 text-start"><FontAwesomeIcon icon={faApple} className="px-2" />Continue with Apple</button>
            </span>
            <span className="d-block p-1">
                <input type="text" placeholder="Email" className="Email  btnwidth p-3 fw-bold"></input>
            </span>
            <span className="d-block p-1">
                <input type="password" placeholder="Password" className="Pwd btnwidth p-3 fw-bold"></input>
            </span>
            <span className="d-block p-1">
                <button type="button" className="loginbtn btnwidth p-2">Log in</button>
            </span>
            <h6>or <a href="" className="Forgot">Forgot Password</a>
            </h6>
            <hr className="w-25 mx-auto"></hr>
            <h6>Don't have an account?<a href="" className="Signup">Sign up <br></br>Log in with your organization</a></h6>
        </div>

    );
}
export default Login;
