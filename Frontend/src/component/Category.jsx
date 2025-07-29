import React from 'react';
import "./Category.css";
import Group from "../assets/Group.svg";
import groups from "../assets/group1.svg";
import { GiPriceTag } from "react-icons/gi";

const Category = () => {
    return (
        <div className="main">
            <div className="upnav">
                You haven't added any Categories yet. Create a <a href="#" className="link">category</a> now.
            </div>
            <div className="box">
                <div className="boxx">
                    <GiPriceTag className='group1' />
                    
                </div>
                <div className="content">
                    <p> Group products by category for easier stock management.</p>
                    <div className="buttons">
                        <button className="add-btn">Create Category</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;


