import React from 'react';
import "./Inventory.css";
import cart from "../images/cart.png";

const Manageproduct = () => {
    return (
        <div className="main">
            <div className="upnav">
                You currently have no products in inventory. Please <a href="#" className="link">add a product</a> to start managing items.
            </div>
            <div className="box">
                <div className="boxx">
                    <img src={cart} alt="Background" className="group1" />
                   {/* // <img src={Group} alt="Magnifier" className="imgs" /> */}
                </div>
                <div className="content">
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
