import React from 'react';

const Tcontent = (props) => {
    return (
        <>
            
        <div className="testImgSec"><img src={props.testimonialsimgsrc} alt="" className="home testmoals image" /></div>
        <div className="ltestContent">
            <h1>WHAT PEOPLE ARE <span>SAYING</span></h1>
            <p>When I was initially approached by Global Electronic Technology, Inc. (GET) regarding my credit card processing I was a little hesitant. There are so many different credit card processors out there that I wasn’t sure it was something I wanted to invest my time in, but I am glad I did. The level of care and dedication I receive from GET as a whole is much improved from my previous processing company. I was so impressed with the service and savings that I received at my El Segundo dental office that I signed up to have them service my Gardena location too!</p>
            <h3>John Gault</h3>
            <h4>IT Mamanger</h4>
        </div>
            
        </>
    );
}

export default Tcontent;