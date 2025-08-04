import React from 'react';
import "./Manageproduct.css";
import cart from "../images/cart.png";
import { Link } from 'react-router-dom';

const Manageproduct = () => {
    return (
        <div className="mp-main">
            <div className="mp-upnav">
                You currently have no products in inventory. Please <Link to="/AddProduct" className="link"><u>add a product</u></Link> to start managing items.
            </div>
            <div className="mp-box">
                <div className="mp-boxx">
                    <img src={cart} alt="Background" className="group1" />
                   {/* // <img src={Group} alt="Magnifier" className="imgs" /> */}
                </div>
                <div className="mp-content">
                    <h4>Manage your Inventory</h4>
                    <p>Track, update, and organize all your inventory in one place.</p>
                    <div className="buttons">
                        <button className="import-btn">Import</button>
                        <button className="add-btn">Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manageproduct;
