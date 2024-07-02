import React from "react";
import './videooverview.css'
import { AiOutlineHeart } from "react-icons/ai";

function VideoOverView(){
    return (
        <>
        <div className="container mainDiv">
            <div className="card-body">
                <div>
                    <video className="videoTag" width="350" height = "200" controls>
                        <source src = "https://www.youtube.com/watch?v=VOQVpQTOtzc" type = "video/mp4" mute/>
                    </video>
                </div>
                <p className="btn border-0 col-lg-6 text-center">Personal</p>
                <p className="btn border-0 col-lg-6 text-center">Teams</p>
                <h3>499 <span className="fs-6 fw-normal text-decoration-line-through">3199</span> <span className="fs-6 fw-normal">88% off</span></h3>
                <p className="fs-6 fw-normal text-danger"><span className="fw-bold">4 days</span> left at this price!</p>
                <div className="row">
                    {/* <p className="ms-2 btn border-0 col-lg-9 text-center bg-clr text-white me-2">Buy this course</p> */}
                    <h1 className="ms-2 btn border-0 col-lg-9 text-center bg-clr text-white me-2">Buy this course</h1>
                    <p className="col-lg-2 border border-dark d-flex justify-content-center align-items-center "><AiOutlineHeart className="fs-3 AiOutlineHeartone "/></p>
                </div>
                <p className="vo-font-size text-center">30 day Money-Back Guaratee</p>
                <p className="vo-font-size text-center">Pull Lifetime Access</p>
                <a href="#" className="ms-1 text-dark col-lg-4 vo-link-fs fw-medium me-3 text-center">Share</a>
                <a href="#" className="text-dark col-lg-4 vo-link-fs fw-medium me-4 text-center">Gift this course</a>
                <a href="#" className="text-dark col-lg-4 vo-link-fs fw-medium me-3 text-center">Apply Coupon</a>
                <div className="d-flex">
                    <hr className="wd-hr me-2" /><span className="vo-link-fs">or</span>
                    <hr className="wd-hr ms-2" />
                </div>
                
                <h5 className="">Subscribe to Udemy's top courses</h5>
                <p className="text-dark vo-link-fs">Get this course, plus 11,000+ of our top-rated courses, with Personal Plan. <span className="clr fw-bold p-1 text-decoration-underline">Learn more</span></p>
                <div>
                    <p className=" btn col-lg-12 text-center border border-dark border-2">Start subscription</p>
                </div>
                <p className="vo-font-size text-center">Starting at $760 per month</p>
                <p className="vo-font-size text-center">Cancel anytime</p>
            </div>
        </div>
        </>
    )
}

export default VideoOverView