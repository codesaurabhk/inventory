import React from 'react'
import "./Stocks.css"

import Group from "../assets/Group.svg";
import groups from "../assets/group1.svg";
import { GiPriceTag } from "react-icons/gi";
import icons from "../images/homes.png"
import { Link } from 'react-router-dom';

const Stocks = () => {
    return (
        <div className="st-main">
            <div className="st-upnav">
                You haven't recorded any stock movements yet. <Link to="/AddProduct" className="link"><u>Add products</u></Link> to start managing your stock.
            </div>
            <div className="st-box">
                <div className="st-boxx">
                    <img src={icons} alt="img" className='group1' />
                    
                </div>
                <div className="st-content">
                    <p>Tracks your complete stock in/out history.</p>
                    <p style={{color:"#676767"}}> Review all stocks activity, including incoming and outgoing items</p>
                    {/* <div className="buttons">
                        <button className="add-btn">Create Stocks in/out</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Stocks;


