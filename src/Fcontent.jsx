import React from 'react';


const Fcontent = (props) => {
    return(
        <>
            <div className="row">
                <div className="col-md-6">
                    <p>© 2020 Global Electronic Technology, Inc. <span>All Rights Reserved.</span></p>
                </div>
                <div className="col-md-6 footer_right_text">
                    <ul className="fSocial">
                        <li><a><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Fcontent;