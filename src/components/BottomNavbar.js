import React from "react";
import img1 from "../assets/nav-img1.jpg";
import img2 from "../assets/nav-img2.jpg";
import img3 from "../assets/nav-img3.jpg";


const BottomNavbar =()=>{
    return(
        <>
            <div className="bottom-navbar">
                <div className="bottom">
                    <div className="first-part">
                        <div><i>in</i></div>
                        <div>
                        <svg width="180" height="60">
                                <clipPath id="myCircle1">
                                    <circle cx="26" cy="25" r="26" fill="#FFFFFF"/>
                                </clipPath>
                                <clipPath id="myCircle2">
                                    <circle cx="68" cy="25" r="26" fill="#FFFFFF"/>
                                </clipPath>
                                <clipPath id="myCircle3">
                                    <circle cx="108" cy="25" r="26" fill="#FFFFFF"/>
                                </clipPath>
                                <g>
                                    <circle cx="148" cy="25" r="26" fill="#1a1a1a"/>
                                    <text x="138" y="25" stroke="#ffffff">+12</text>
                                </g>
                            <image width="60" height="60" xlinkHref={img1} clipPath="url(#myCircle1)" />
                            <image width="155" height="90" xlinkHref={img2} clipPath="url(#myCircle2)" />
                            <image width="230" height="100" xlinkHref={img3} clipPath="url(#myCircle3)" />
                            
                        </svg>
                        </div>
                        <div className="first-info">
                            <u>Sign in to collaborate</u>
                            <p>with Halo,Alexy,Vitaliy, and 12 others</p>
                        </div>
                    </div>
                    <div className="icon-part">
                        <i className="fal fa-play"></i>
                        <i className="fal fa-comment"></i>
                        <i className="fal fa-text"></i>
                        <i className="fal fa-code"></i>
                    </div>
                    <div className="auth-part">
                    <b>...</b>
                        <button className="btn btn-light btn-signup">sign up</button>
                        <button className="btn btn-primary btn-signin">sign in</button>
                    </div>
                </div> 
            </div>           
        </>
    )
}
export default BottomNavbar;