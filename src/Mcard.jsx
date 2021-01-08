import React from 'react';

const Mcard = (props) => {
    return (
        <>
        <div className="col-xs-12 col-sm-4 mBox">
            <div className="img_div">
                <img src={props.mcardimgsrc} alt="{props.mcardalttext}" />
            </div>
            <div className="text_div">
                <h2>{props.mcardtitle}</h2>
            </div>
        </div>
        </>
    );
}

export default Mcard;