import React from "react";
import stafimg from "../assets/image2.jpg"

const Staf =()=>{
    return(
        <>
            <div className="staf">
                <div className="staf-heading">
                    <h5>Staf pic for you</h5>
                </div>
                <div className="staf-data">
                    <div className="row staf-record">
                        <div className="col-md-6 col-xs-12">
                            <div className="staf-img">
                                <img src={stafimg} alt="..."/>
                            </div>
                        </div>

                        <div className="col-md-6 col-xs-12">
                            <div className="staf-desc">
                                <h5>Using Jira to Manage your Sprints across your Product Teams</h5>
                                <p>I'm going to run through the ins and outs of setting up a Sprint in Jira, and the best approach to make sure you're dev team is performing at a high level.</p>
                                <p>Alexa Smith</p>
                                <p>Going live in 2 hours,25 mins</p>
                                <p><b>$10.99</b></p>
                                <button>Buy now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Staf;