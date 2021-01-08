import React from 'react';


const Aboutcontent = (props) => {
    return (
        <>            
            <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 d-flex flex-column aboutTextContent">
                    <h1>About <br /><span>GLOBAL ELECTRONIC TECHNOLOGY</span></h1>
                    <p>Experience the difference of a payment provider that is truly invested in the success of your business. Global Electronic Technology approaches each customer relationship with the same degree of care and commitment we did when we started the company over thirty years ago. Our highly skilled specialists take the time to fully understand your business, then develop personalized, tailored solutions designed to anticipate your needs and help you scale.</p>
                    <a className="btn btn-primary">Learn More</a>
                </div>
                <div className="col-md-6 header_img d-flex flex-column">
                    <img src={props.imgsrc} alt="" className="home about image" />
                </div>
            </div>  
        </>
    );
}

export default Aboutcontent;