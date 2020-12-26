import React from "react";

const Services =()=>{
    return(
        <>
            <div className="services">
                <div className="row">
                    <div className="col-md-4 col-s-12 col-xs-12">
                        <div className="service-one">
                            <div>
                            <i className="far fa-star"></i>
                            </div>
                            <div className="service-content">
                                <h5>Buy premium classes to learn about topics</h5>
                                <p>All pay as you go.No commitments.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-s-12 col-xs-12">
                        <div className="service-two">
                            <div>
                            <i className="far fa-comments-alt"></i>
                            </div>
                            <div className="service-content">
                                <h5>Learn from industry experts,and peers with more experience</h5>
                                <p>Discover the most relevant video sessions for your needs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-s-12 col-xs-12">
                        <div className="service-three">
                            <div>
                            <i className="far fa-rocket"></i>
                            </div>
                            <div className="service-content">
                                <h5>Supercharge your learning with new insights and connections</h5>
                                <p>Classroom and webinar style</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;