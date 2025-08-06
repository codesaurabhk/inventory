import React from 'react';
import './Invoices.css';
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


const Invoices = () => {
    const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10; 

    const data = [
  { customer: 'ABC Chair Factory', date: '01 Jan',  status: 'Pending', amount: '₹17,470.00' },
  { customer: 'Luxe Seating Co.', date: '02 Jan',  status: 'Pending', amount: '₹4,470.00' },
  { customer: 'Comfort Craft Chairs', date: '03 Jan',  status: 'Paid', amount: '₹17,470.00' },
  { customer: 'Elite Chair Makers', date: '04 Jan',  status: 'Paid', amount: '₹72,830.00' },
  { customer: 'Chic Seating Solutions', date: '05 Jan',  status: 'Paid', amount: '₹17,470.00' },
  { customer: 'Premier Chair Designs', date: '06 Jan',  status: 'Overdue', amount: '₹12,030.00' },
  { customer: 'Stylish Seating Inc.', date: '07 Jan',  status: 'paid', amount: '₹17,470.00' },
  { customer: 'Innovative Chair Works', date: '08 Jan',  status: 'paid', amount: '₹17,470.00' },
  { customer: 'Signature Seating Co.', date: '09 Jan',  status: 'Overdue', amount: '₹76,400.00' },
  { customer: 'Artisan Chair Studio', date: '10 Jan',  status: 'Overdue', amount: '₹17,470.00' },
  { customer: 'Quality Chair Creations', date: '11 Jan',  status: 'paid', amount: '₹72,830.00' },
  { customer: 'Modern Chair Collective', date: '12 Jan',  status: 'Overdue', amount: '₹94,470.00' }
];


    const totalItems = data.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedData = data.slice(startIndex, endIndex);

    return (
        <div className="dashboard-container">
            {/* Top Section */}
            <div className="top-sectionz">
                {/* Metrics */}
                <div className="dashboard-metricsz">
                    <div className="metric-cardz" style={{ borderTopLeftRadius: "10px", borderEndStartRadius: "10px" }}>
                        <div className="metric-icon"><FaSackDollar /></div>
                        <div>
                            <p className="metric-titlez">Total Invoices</p>
                            <span style={{fontSize:"20px", fontWeight:"600"}}>
                                120
                            </span>
                        </div>
                    </div>
                    <div  className="metric-cardz"  >
                        <div style={{marginLeft:"42px"}} className="metric-icon blue"><FaStopCircle /></div>
                        <div>
                            <p className="metric-titlez">paid</p>
                            <span style={{fontSize:"20px", fontWeight:"600"}}>
                                47
                            </span>
                        </div>
                    </div>
                    <div className="metric-cardz" >
                        <div style={{marginLeft:"35px"}} className="metric-icon blue"><FaStopCircle /></div>
                        <div>
                            <p className="metric-titlez">Pending</p>
                            <span style={{fontSize:"20px", fontWeight:"600"}}>
                                32
                            </span>
                        </div>
                    </div>
                    <div className="metric-cardz" style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
                        <div style={{marginLeft:"35px"}} className="metric-icon blue"><RiAlertFill /></div>
                        <div>
                            <p className="metric-titlez">Overdue</p>
                            <span style={{fontSize:"20px", fontWeight:"600"}}>
                                41
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
                            <h3>All Invoices</h3>
                        </div>
                        <div className="toolbar-actions">
                           
                            <Link to="/CreateInvoices" className="btn btn-primary">+ Create Invoice</Link>
                        </div>
                    </div>

                    <div className='toolbar-actions-th'>
                        <div className="toolbar-titles">
                            <button className="toolbar-filter-btn">All</button>
                        </div>


                        <div className="toolbar-actionsz" style={{ marginTop: "4px" }}>
                            <button className="icon-btn "><IoSearch /><CgSortAz style={{fontSize:"26px"}} /></button>
                           
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
                                <th>Due Date</th>
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

export default Invoices;
