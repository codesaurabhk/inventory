import React from 'react'
import "./Stocks.css"

import Group from "../assets/Group.svg";
import groups from "../assets/group1.svg";
import { GiPriceTag } from "react-icons/gi";
import icons from "../images/homes.png"

const Stocks = () => {
    return (
        <div className="main">
            <div className="upnav">
                You haven't recorded any stock movements yet. <a href="#" className="link">Add products</a> to start managing your stock.
            </div>
            <div className="box">
                <div className="boxx">
                    <img src={icons} alt="img" className='group1' />
                    
                </div>
                <div className="content">
                    <p>Tracks your complete stock in/out history.</p>
                    <p style={{color:"#676767"}}> Review all stocks activity, including incoming and outgoing items</p>
                    <div className="buttons">
                        <button className="add-btn">Create Stocks in/out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stocks;


