import React from 'react';
import './Quotation.css';
import { FaSackDollar } from "react-icons/fa6";
import { RiAlertFill } from "react-icons/ri";
import { FaStopCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Quotation = () => {
    const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10; 

    const data = [
  { customer: 'ABC Chair Factory', date: '01 Jan', expiryDate: '01 Jan', status: 'Open', amount: '₹17,470.00' },
  { customer: 'Luxe Seating Co.', date: '02 Jan', expiryDate: '02 Jan', status: 'Open', amount: '₹4,470.00' },
  { customer: 'Comfort Craft Chairs', date: '03 Jan', expiryDate: '03 Jan', status: 'Approved', amount: '₹17,470.00' },
  { customer: 'Elite Chair Makers', date: '04 Jan', expiryDate: '04 Jan', status: 'Approved', amount: '₹72,830.00' },
  { customer: 'Chic Seating Solutions', date: '05 Jan', expiryDate: '05 Jan', status: 'Open', amount: '₹17,470.00' },
  { customer: 'Premier Chair Designs', date: '06 Jan', expiryDate: '06 Jan', status: 'Rejected', amount: '₹12,030.00' },
  { customer: 'Stylish Seating Inc.', date: '07 Jan', expiryDate: '07 Jan', status: 'Open', amount: '₹17,470.00' },
  { customer: 'Innovative Chair Works', date: '08 Jan', expiryDate: '08 Jan', status: 'Open', amount: '₹17,470.00' },
  { customer: 'Signature Seating Co.', date: '09 Jan', expiryDate: '09 Jan', status: 'Rejected', amount: '₹76,400.00' },
  { customer: 'Artisan Chair Studio', date: '10 Jan', expiryDate: '10 Jan', status: 'Rejected', amount: '₹17,470.00' },
  { customer: 'Quality Chair Creations', date: '11 Jan', expiryDate: '11 Jan', status: 'Open', amount: '₹72,830.00' },
  { customer: 'Modern Chair Collective', date: '12 Jan', expiryDate: '12 Jan', status: 'Rejected', amount: '₹94,470.00' }
];


    const totalItems = data.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedData = data.slice(startIndex, endIndex);

    return (
        <div className="dashboard-container">
            {/* Top Section */}
            <div className="top-section">
                {/* Metrics */}
                <div className="dashboard-metricsz">
                    <div className="metric-cardz" style={{ borderTopLeftRadius: "10px", borderEndStartRadius: "10px" }}>
                        <div className="metric-icon"><FaSackDollar /></div>
                        <div>
                            <p className="metric-titlez">Total Quotations</p>
                           <span style={{fontSize:"20px", fontWeight:"600"}}>
                                12
                            </span>
                        </div>
                    </div>
                    <div className="metric-cardz" >
                        <div style={{marginLeft:"40px"}} className="metric-icon blue"><FaStopCircle /></div>
                        <div>
                            <p className="metric-titlez">Open</p>
                            <span style={{fontSize:"20px", fontWeight:"600"}}>
                                6
                            </span>
                        </div>
                    </div>
                    <div className="metric-cardz" >
                        <div style={{marginLeft:"35px"}} className="metric-icon blue"><FaStopCircle /></div>
                        <div>
                            <p className="metric-titlez">Approved</p>
                            <span style={{fontSize:"20px", fontWeight:"600"}}>
                                2
                            </span>
                        </div>
                    </div>
                    <div className="metric-cardz" style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
                        <div style={{marginLeft:"35px"}}  className="metric-icon blue"><RiAlertFill /></div>
                        <div>
                            <p className="metric-titlez">Rejected</p>
                            <span style={{fontSize:"20px", fontWeight:"600"}}>
                                4
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* Toolbar */}
            <div className='overview'>
                <div >
                    <div className='toolbarsz' >
                        <div >
                            <h3>Quotations</h3>
                        </div>
                        <div className="toolbar-actions">
                           
                            <Link to="/CreateQuatations" className="btn btn-primary">+ Create Quotation</Link>
                        </div>
                    </div>

                    <div className='toolbar-actions-th'>
                        <div className="toolbar-titles">
                            <button className="toolbar-filter-btn">All</button>
                        </div>


                        <div className="toolbar-action" >
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
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Expiry date</th>
                                <th>Status</th>
                                <th>Amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((sales, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td >
                                       
                                        {sales.customer}
                                    </td>
                                    <td>{sales.date} </td>
                                    <td>{sales.expiryDate}</td>
                                    <td><span className={`status ${sales.status.toLowerCase()}`}>{sales.status}</span></td>
                                    <td>{sales.amount}</td>
                                    <td><BsThreeDots /></td>
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

export default Quotation;
