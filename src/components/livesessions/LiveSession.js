import React from "react";
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.jpg";
import img4 from "../../assets/image4.jpeg"

const LiveSession=()=>{
    return(
        <>
            <div className="live-session">
                <div className="live-session-heading">
                    <h3>Featured live session</h3>
                </div>
                <div className="live-session-card">
                <div className="row">
                    <div className="col-lg-3 clo-md-4 col-s-12 col-xs-12">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={img1} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Marketing with Zero Budget</h5>
                                <p className="faculty-name">Alexa Smith</p>
                                <p className="card-text">Going live in 2 hours,25 mins</p>
                                <p className="session-price"><b>$23.99</b></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-s-12 col-xs-12">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={img2} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Validating Customer Feedback with Virtual Session</h5>
                                <p className="faculty-name">Jessica Green</p>
                                <p className="card-text">Going live in 34 mins</p>
                                <p className="session-price"><b>$65.99</b></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-s-12 col-xs-12">
                        <div className="card" style={{width:"18rem"}}>
                            <img className="card-img-top" src={img3} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Using Optimizely to A/B Test your Landing Paga</h5>
                                <p className="faculty-name">Michelle Chan</p>
                                <p className="card-text">Went live 4 days ago</p>
                                <p className="session-price"><b>$29.00</b></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-s-12 col-xs-12">
                        <div className="card" style={{width:"18rem"}}>
                            <img className="card-img-top" src={img4} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Email Marketing that actually</h5>
                                <p className="faculty-name">Tina Jones</p>
                                <p className="card-text">Went live on January2,2019 </p>
                                <p className="session-price"><b>$8.00</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default LiveSession;