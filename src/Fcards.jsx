import React from 'react';
import footerLogo from '../src/images/footer_logo.png';


const Fcards = () => {
    return (
        <>
        <img src={footerLogo} alt="footer logo" className="footer_logo" />
        <div className="footerBox">
            <h1>Email Signup</h1>
            <p>Subscribe to our newsletter and get up to date info about new features and events.</p>
            <ul className="newsLetters">
                <li><input type="text" name="" value="" placeholder="Enter Your Email" /> <input type="button" name="" value="" className="btn" /></li>
            </ul>
            <p>Experience the difference of a payment provider that is truly invested in the success of your business. Global Electronic Technology approaches each customer 
relationship with the same degree of care and commitment we did when we started the company over thirty years ago.</p>
        </div>
        </>
    );
}

export default Fcards;