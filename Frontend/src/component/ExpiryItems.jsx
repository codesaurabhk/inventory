import React from 'react'
import "./ExpiryItems.css"

import Group from "../assets/Group.svg";
import groups from "../assets/group1.svg";
import { GiPriceTag } from "react-icons/gi";
import icons from "../images/sandclock.png"

const ExpiryItems = () => {
    return (
        <div className="ex-main">
            <div className="ex-upnav">
                Your inventory has no expired items at the moment.
            </div>
            <div className="ex-box">
                <div className="ex-boxx">
                    <img src={icons} alt="img" className='group1' />
                    
                </div>
                <div className="ex-content">
                    <p style={{fontSize:"large"}}>Moniter Expired Items.</p>
                    <p style={{color:"#676767"}}> Track all your expired products here within your inventory</p>
                    {/* <div className="buttons">
                        <button className="add-btn">Create Stocks in/out</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ExpiryItems;


