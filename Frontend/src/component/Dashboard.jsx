import React from 'react';
import './Dashboard.css';
import { FaSackDollar } from "react-icons/fa6";
import { RiAlertFill } from "react-icons/ri";
import { FaStopCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";

const Dashboard = () => {
    const data = [
        ['Chair', 'Active', '3 Pieces • 2 Variants', 'Office Chair', 'Warehouse 01'],
        ['T-Shirt', 'Inactive', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
        ['Wheel Chair', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
        ['Strawberry', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
        ['T-Shirt - Label MN', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
        ['Gaming Chair', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
        ['Luxury Bag', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
        ['Purple T-Shirt', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
        ['Sofa', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
        ['Gaming Mouse', 'Active', '30 Pieces • 5 Variants', 'T-Shirt', 'WH-04'],
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
                                <th></th>
                                <th>Product</th>
                                <th>Status</th>
                                <th>Inventory</th>
                                <th>Category</th>
                                <th>Stored In</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(([name, status, inventory, category, stored], index) => (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td>{name}</td>
                                    <td><span className={`status ${status.toLowerCase()}`}>{status}</span></td>
                                    <td>{inventory}</td>
                                    <td>{category}</td>
                                    <td>{stored}</td>
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
