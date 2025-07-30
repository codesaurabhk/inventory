import React from 'react'
import "./PurchaseDashbord.css"
import { IoSearch } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa";

const PurchaseDashbord = () => {

    const data = [
        { name: 'Reliance - Mumbai',orderno : "#BAH3122", status: 'Completed', time: '11:23 PM', HandleBy: 'Aman kumar' , Storage :"Warehouse 01"},
        { name: 'Asus - Delhi',orderno : "#BAH3123", status: 'Approved', time: '11:23 PM', HandleBy: 'Ajay Mehra', Storage : "WH-04" },
        
    ];

    return (
        <div className="dashboard-container">
            <div className='overview'>
                <div >
                    <div className='toolbars' >
                        <div className="right">
                            <span style={{color:"#676767", fontWeight:"600"}}>Inventory</span>  <span style={{color:"#676767"}} ><FaAngleRight style={{marginTop:"4px"}} /></span> <span>Purchase Order</span>
                        </div>
                        <div className="toolbar-actions">
                            <button className="btn btn-light">Import</button>
                            <button className="btn btn-light">Export</button>
                        </div>
                    </div>

                    <div className='toolbar-actions-th'>
                        <div className="toolbar-titles">
                            <button  className="toolbar-filter-btn">All</button>
                           
                        </div>


                        <div className="toolbar-action" style={{ marginTop: "4px" }}>
                            <button className="icon-btn "><IoSearch /></button>
                            <button className="icon-btn"><CgSortAz /></button>
                            <button className="icon-btn"><TbArrowsSort /></button>
                        </div>
                    </div>
                </div>

                <div>
                    <table className="product-table">
                        <thead>
                            <tr style={{ color: "#676767" }}>
                                <th><input type="checkbox" /></th>
                                <th>Vendor/Supplier Name</th>
                                <th>Order No</th>
                                <th>Status</th>
                                <th>Time</th>
                                <th>Expected Delivery Date</th>
                                <th>Delivery Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td className="product-cell">
                                       
                                        {product.name}
                                    </td>
                                    <td>{product.orderno}</td>
                                    <td> <span className={`status ${product.status.toLowerCase()}`}>{product.status}</span></td>
                                    <td>{product.time}</td>
                                    <td>{product.HandleBy}</td>
                                    <td>{product.Storage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pagination">
                        <div className="pagination-box">25 per page</div>
                        <div className="pagination-box pagination-info">
                            <span>1-10 of 721</span>
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

export default PurchaseDashbord;

