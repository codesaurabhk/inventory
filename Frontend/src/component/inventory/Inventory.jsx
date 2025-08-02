import React from 'react';
import "./Inventory.css";
import Group from "../assets/Group.svg";
import groups from "../assets/group1.svg";
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

const Inventory = () => {
    return (
        <>
        <div className="in-main">
            <div className="in-upnav">
                You currently have no inventory. <Link to="/AddProduct" className="link"><u>Add products</u></Link> to start managing your stock.
            </div>
            <div className="in-box">
                <div className="in-boxx">
                    <img src={groups} alt="Background" className="group1" />
                    <img src={Group} alt="Magnifier" className="imgs" />
                </div>
                <div className="in-content">
                    <h4>Manage your Inventory</h4>
                    <p>Track, update, and organize all your inventory in one place.</p>
                    <div className="buttons">
                        <button className="import-btn">Import</button>
                        <Link to="/AddProduct" className="add-btn">Add Product</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Inventory;
