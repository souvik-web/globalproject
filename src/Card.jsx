import React from 'react';

const Card = (props) => {
    return (
        <>
        <div className="col-xs-12 col-sm-4 fBox">
            <div className="img_div">
                <img src={props.imgsrc} alt="{props.cardalttext}" />
            </div>
            <div className="text_div">
                <h2>{props.cardtitle}</h2>
                <p>{props.cardtext}</p>
            </div>
        </div>
        </>
    );
}

export default Card;