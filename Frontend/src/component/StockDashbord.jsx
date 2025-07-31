import React from 'react'
import "./StockDashbord.css";


import { FaSackDollar } from "react-icons/fa6";
import { RiAlertFill } from "react-icons/ri";
import { FaStopCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";
import chair from "../images/chair.jpg";
import tshirt from "../images/tshirts.jpg";
import wheelchair from "../images/chair2.png";
import chair3 from "../images/chair3.jpg";
import cheery from "../images/cheery.jpg";
import mouse from "../images/mouse.jpg";
import sofa from "../images/sofa.jpg";
import tshirts2 from "../images/tshirts2.jpg";
import tshirts3 from "../images/tshirts3.jpg";
import bag from "../images/bag.jpg";
import { FaAngleRight } from "react-icons/fa";
import { useState } from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const StockDashbord = () => {
    const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 8; 


    const data = [
        { name: 'Chair',available : "3 Pieces • 2 Varients", status: 'Active', time: '11:23 PM', HandleBy: 'Aman kumar', image: chair , Storage :"Warehouse 01"},
        { name: 'T-Shirt',available : "3 Pieces • 2 Varients", status: 'Inactive', time: '11:23 PM', HandleBy: 'Ajay Mehra', image: tshirt, Storage : "WH-04" },
        { name: 'Wheel Chair',available : "3 Pieces • 2 Varients", status: 'Active', time: '11:23 PM', HandleBy: 'Shubham', image: wheelchair, Storage : "WH-04" },
        { name: 'Strawberry',available : "3 Pieces • 2 Varients", status: 'Active', time: '11:23 PM', HandleBy: 'Amar', image: cheery, Storage : "WH-04" },
        { name: 'T-Shirt - Label MN',available : "3 Pieces • 2 Varients", status: 'Active', time: '11:23 PM', HandleBy: 'Prakash', image: tshirts2, Storage : "WH-04" },
        { name: 'Gaming Chair',available : "3 Pieces • 2 Varients", status: 'Active', time: '11:23 PM', HandleBy: 'P Chopra', image: chair3, Storage : "WH-04" },
        { name: 'Luxury Bag',available : "3 Pieces • 2 Varients", status: 'Active', time: '11:23 PM', HandleBy: 'Sachin', image: bag , Storage : "WH-04"},
        { name: 'Purple T-Shirt',available : "3 Pieces • 2 Varients", status: 'Active', time: '11:23 PM', HandleBy: 'Suresh', image: tshirts3, Storage : "WH-04" },
        { name: 'Sofa',available : "3 Pieces • 2 Varients", status: 'Active', time: '11:23 PM', HandleBy: 'Ajay Mehra', image: sofa , Storage : "WH-04"},
        { name: 'Gaming Mouse',available : "3 Pieces • 2 Varients", status: 'Active', time: '11:23 PM', HandleBy: 'Shubham', image: mouse, Storage : "WH-04" }
    ];

    const totalItems = data.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedData = data.slice(startIndex, endIndex);


    return (
        <div className="dashboard-container">
            <div className='overview'>
                <div >
                    <div className='toolbars' >
                        <div className="right">
                            <span style={{color:"#676767", fontWeight:"600"}}>Inventory</span>  <span style={{color:"#676767"}} ><FaAngleRight style={{marginTop:"4px"}} /></span> <span>Stock IN/ Out History</span>
                        </div>
                        <div className="toolbar-actions">
                            <button className="btn btn-light">Import</button>
                            <button className="btn btn-light">Export</button>
                            {/* <button className="btn btn-primary">Add Product</button> */}
                        </div>
                    </div>

                    <div className='toolbar-actions-th'>
                        <div className="toolbar-titles">
                            <button  className="toolbar-filter-btn">All</button>
                            <button style={{marginLeft:"10px"}} className="toolbar-btns">Stock In</button>
                            <button className="toolbar-btns">Stock Out</button>
                            {/* <button className="toolbar-btns">+</button> */}
                        </div>


                        <div className="toolbar-action" style={{ marginTop: "4px" }}>
                            <button className="icon-btn "><IoSearch /></button>
                            <button className="icon-btn"><CgSortAz /></button>
                            <button className="icon-btn"><TbArrowsSort /></button>
                        </div>
                    </div>
                </div>




                {/* Product Table */}
                <div>
                    <table className="product-table">
                        <thead>
                            <tr style={{ color: "#676767" }}>
                                <th><input type="checkbox" /></th>
                                <th>Product</th>
                                <th>Available</th>
                                <th>Status</th>
                                <th>Time</th>
                                <th>Handled By</th>
                                <th>Storage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((product, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td className="product-cell">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="product-img"
                                        />
                                        {product.name}
                                    </td>
                                    <td>{product.available}</td>
                                    <td> <span className={`status ${product.status.toLowerCase()}`}>{product.status}</span></td>
                                    <td>{product.time}</td>
                                    <td>{product.HandleBy}</td>
                                    <td>{product.Storage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                   <div className="pagination">
    <div className="pagination-boxx">{itemsPerPage} per page</div>
    <div className="pagination-boxx pagination-info">
        <span>{startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems}</span>
        <span style={{ color: "grey" }}> | </span>
        <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="pagination-arrow"
        >
            <FaAngleLeft />
        </button>
        <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            className="pagination-arrow"
        >
            <FaChevronRight />
        </button>
    </div>
</div>


                </div>
            </div>
        </div >
    );
};

export default StockDashbord;

