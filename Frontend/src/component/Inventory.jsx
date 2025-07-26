import React from 'react';
import "./Inventory.css";
import Group from "../assets/Group.svg";
import groups from "../assets/group1.svg";

const Inventory = () => {
    return (
        <div className="main">
            <div className="upnav">
                You currently have no inventory. <a href="#" className="link">Add products</a> to start managing your stock.
            </div>
            <div className="box">
                <div className="boxx">
                    <img src={groups} alt="Background" className="group1" />
                    <img src={Group} alt="Magnifier" className="imgs" />
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

export default Inventory;
