import React from 'react';
import './Dashboard.css';
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

const Dashboard = () => {

    const data = [
        { name: 'Chair', status: 'Active', inventory: '3 Pieces • 2 Variants', category: 'Office Chair', stored: 'Warehouse 01', image: chair },
        { name: 'T-Shirt', status: 'Inactive', inventory: '30 Pieces • 5 Variants', category: 'T-Shirt', stored: 'WH-04', image: tshirt },
        { name: 'Wheel Chair', status: 'Active', inventory: '30 Pieces • 5 Variants', category: 'T-Shirt', stored: 'WH-04', image: wheelchair },
        { name: 'Strawberry', status: 'Active', inventory: '30 Pieces • 5 Variants', category: 'T-Shirt', stored: 'WH-04', image: cheery },
        { name: 'T-Shirt - Label MN', status: 'Active', inventory: '30 Pieces • 5 Variants', category: 'T-Shirt', stored: 'WH-04', image: tshirts2 },
        { name: 'Gaming Chair', status: 'Active', inventory: '30 Pieces • 5 Variants', category: 'T-Shirt', stored: 'WH-04', image: chair3 },
        { name: 'Luxury Bag', status: 'Active', inventory: '30 Pieces • 5 Variants', category: 'T-Shirt', stored: 'WH-04', image: bag },
        { name: 'Purple T-Shirt', status: 'Active', inventory: '30 Pieces • 5 Variants', category: 'T-Shirt', stored: 'WH-04', image: tshirts3 },
        { name: 'Sofa', status: 'Active', inventory: '30 Pieces • 5 Variants', category: 'T-Shirt', stored: 'WH-04', image: sofa },
        { name: 'Gaming Mouse', status: 'Active', inventory: '30 Pieces • 5 Variants', category: 'T-Shirt', stored: 'WH-04', image: mouse }
    ];

    return (
        <div className="dashboard-container">
            {/* Top Section */}
            <div className="top-section">
                {/* Metrics */}
                <div className="dashboard-metrics">
                    <div className="metric-card" style={{ borderTopLeftRadius: "10px", borderEndStartRadius: "10px" }}>
                        <div className="metric-icon"><FaSackDollar /></div>
                        <div>
                            <p className="metric-title">Total Stock Value</p>
                            <h2>
                                ₹12,75,987 <span className="metric-growth">↑ 23%</span>
                            </h2>
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon blue"><RiAlertFill /></div>
                        <div>
                            <p className="metric-title">Low Stock</p>
                            <h2>12</h2>
                        </div>
                    </div>
                    <div className="metric-card" style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
                        <div className="metric-icon blue"><FaStopCircle /></div>
                        <div>
                            <p className="metric-title">Out Of Stock</p>
                            <h2>18</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* Toolbar */}
            <div className='overview'>
                <div >
                    <div className='toolbars' >
                        <div >
                            <h3>All Products</h3>
                        </div>
                        <div className="toolbar-actions">
                            <button className="btn btn-light">Import</button>
                            <button className="btn btn-light">Export</button>
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </div>

                    <div className='toolbar-actions-th'>
                        <div className="toolbar-titles">
                            <button className="toolbar-filter-btn">All</button>
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
                                <th>Status</th>
                                <th>Inventory</th>
                                <th>Category</th>
                                <th>Stored In</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product, index) => (
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
                                    <td> <span className={`status ${product.status.toLowerCase()}`}>{product.status}</span></td>
                                    <td>{product.inventory}</td>
                                    <td>{product.category}</td>
                                    <td>{product.stored}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pagination">
                        <div className="pagination-box">10 per page</div>
                        <div className="pagination-box pagination-info">
                            <span>1-10 of 369</span>
                            <span style={{ color: "grey" }}> | </span>
                            <button style={{ color: "grey" }} className="pagination-arrow" >{'<'}</button>
                            <button className="pagination-arrow">{'>'}</button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;
