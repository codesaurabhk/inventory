import React from 'react';
import "./Category.css";
import Group from "../assets/Group.svg";
import groups from "../assets/group1.svg";
import { GiPriceTag } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className="ca-main">
            <div className="ca-upnav">
                You haven't added any Categories yet. Create a <Link to="/AddCategory" className="link"><u>category</u></Link> now.
            </div>
            <div className="ca-box">
                <div className="ca-boxx">
                    <GiPriceTag className='group1' />
                    
                </div>
                <div className="ca-content">
                    <p> Group products by category for easier stock management.</p>
                    <div className="buttons">
                        <Link to="/AddCategory" className="add-btn">Create Category</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;


