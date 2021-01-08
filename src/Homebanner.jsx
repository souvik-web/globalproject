import React from 'react';

const Homebanner = (props) => {
    return (
        <>            
            <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 d-flex flex-column justify-content-center home_banner_text">
                    <h1>Invested In <br /><span>Your Success</span></h1>
                    <p>A full suite payment provider that is solely dedicated to helping businesses of all types succeed</p>
                    <a className="btn btn-primary">Get in Touch</a>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center home_banner_img">
                    <img src={props.imgsrc} alt="" className="home banner image" />
                </div>
            </div>  
        </>
    );
}

export default Homebanner;