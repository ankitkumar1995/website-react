import React from "react";

const Footer = ()=>{
    return(
        <>
            <div className="footer">
                <div className="row footer-list">
                    <div className="col-md-2 col-s-12 xs-12">
                        <li>Terms</li>
                        <li>Privacy Policy</li>
                        <li>About us</li>
                        <li>Contact us</li>
                    </div>
                    <div className="col-md-2 col-s-12 col-xs-12">
                        <li>Blog</li>
                        <li>Help & Support</li>
                        <li>Featured Sessions</li>  
                    </div>
                </div>
                <div className="row copy-right">
                    <h5 className="col-md-10">Gura</h5>
                    <p className="col-md-2">&#169;2019 Gura, Inc.</p>
                </div>
            </div>
        </>
    )
}
export default Footer;