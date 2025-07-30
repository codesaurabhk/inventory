import React from 'react'
import "./Damages.css"

import Group from "../assets/Group.svg";
import groups from "../assets/group1.svg";
import { GiPriceTag } from "react-icons/gi";
import icons from "../images/Damage.png"

const Damages = () => {
    return (
        <div className="main">
            <div className="upnav">
                Your inventory has no Damaged or Returned items at the moment.
            </div>
            <div className="box">
                <div className="boxx">
                    <img src={icons} alt="img" className='group1' />
                    
                </div>
                <div className="content">
                    <p style={{fontSize:"large"}}>Monitor all returned or damaged products here.</p>
                    <p style={{color:"#676767"}}> stay informed about product issues and take timely action to maintain stock quality.</p>
                    {/* <div className="buttons">
                        <button className="add-btn">Create Stocks in/out</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Damages;


