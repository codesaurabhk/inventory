import React, { useEffect, useRef } from 'react'
import "./PurchaseDashbord.css"
import { IoSearch } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa";
import { useState } from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { IoIosArrowRoundForward, } from "react-icons/io";

const PurchaseDashbord = () => {

    const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5; // or 10, depending on your preference


    const data = [
        { name: 'Reliance - Mumbai',orderno : "#BAH3122", status: 'Completed', time: '11:23 PM', HandleBy: 'Aman kumar' , Storage :"Warehouse 01"},
        { name: 'Asus - Delhi',orderno : "#BAH3123", status: 'Approved', time: '11:23 PM', HandleBy: 'Ajay Mehra', Storage : "WH-04" },
        
    ];

    const totalItems = data.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedData = data.slice(startIndex, endIndex);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef(null);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isFormOpen && formRef.current && !formRef.current.contains(event.target)) {
        closeForm();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFormOpen]);

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
                            {paginatedData.map((product, index) => (
                                <tr key={index} onClick={openForm}>
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

        {isFormOpen && (
        <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(199, 197, 197, 0.4)',
            backdropFilter: 'blur(1px)',
            display: 'flex',
            justifyContent: 'center',
            zIndex: '10',
          }}>
            <div ref={formRef} style={{width:'646px',margin:'auto',marginTop:'80px',backgroundColor:'white',border:'1px solid #E1E1E1',borderRadius:'8px',padding:'10px 16px'}}>
                
                <div style={{display:'flex',justifyContent:'space-between',gap:'8px',marginTop:'16px'}}>
                    <div>
                        <span>Supplier</span>
                        <br/>
                        <span style={{color:'#676767'}}>Reliance - Mumbai</span>
                    </div>
                    <div>
                        <span>Destination</span>
                        <br/>
                        <span style={{color:'#676767'}}>WH-009</span>
                    </div>
                    <div></div>
                </div>

                <div style={{display:'flex',justifyContent:'space-between',gap:'8px',marginTop:'16px'}}>
                    <div>
                        <span>SKU</span>
                        <br/>
                        <span style={{color:'#676767'}}>Wheel Chair</span>
                    </div>
                    <div>
                        <span>Quantity</span>
                        <br/>
                        <span style={{color:'#676767'}}>09</span>
                    </div><div>
                        <span>Serial no.</span>
                        <br/>
                        <span style={{color:'#676767'}}>0089</span>
                    </div><div>
                        <span>Category</span>
                        <br/>
                        <span style={{color:'#676767'}}>Chair</span>
                    </div>
                </div>

                <div style={{marginTop:'32px'}}>
                    <span style={{fontWeight:'600'}}>Shipment Details</span>
                    <div style={{marginTop:'8px',display:'flex',justifyContent:'space-between',gap:'16px'}}>
                        <div style={{width:'100%'}}>
                            <span>Payments Terms</span>
                            <br/>
                            <select style={{width:'100%',borderRadius:'4px',padding:'5px',backgroundColor:'#E6E6E6',border:'1px solid rgb(211, 210, 210)',color:'rgb(154, 153, 153)'}}>
                                <option>Payment Method</option>
                            </select>
                        </div>
                        <div style={{width:'100%'}}>
                            <span>Estimated Arrival</span>
                            <br/>
                            <select style={{width:'100%',borderRadius:'4px',padding:'5px',backgroundColor:'#E6E6E6',border:'1px solid rgb(211, 210, 210)',color:'rgb(154, 153, 153)'}}>
                                <option>Select Courier</option>
                            </select>
                        </div>
                        <div style={{width:'100%'}}>
                            <span>Shipping By</span>
                            <br/>
                            <select style={{width:'100%',borderRadius:'4px',padding:'5px',backgroundColor:'#E6E6E6',border:'1px solid rgb(211, 210, 210)',color:'rgb(154, 153, 153)'}}>
                                <option>Estimated Time of Arrivla</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div style={{marginTop:'32px'}}>
                    <span>Payment Information & Financial Details</span>
                    <div style={{marginTop:'8px',display:'flex',justifyContent:'space-between',gap:'16px'}}>
                        <div style={{width:'100%'}}>
                            <span>Payments Terms</span>
                            <br/>
                            <select style={{width:'100%',borderRadius:'4px',padding:'5px',backgroundColor:'#E6E6E6',border:'1px solid rgb(211, 210, 210)',color:'rgb(154, 153, 153)'}}>
                                <option>Cash on Delivery</option>
                            </select>
                        </div>
                        <div style={{width:'100%'}}>
                            <span>Shipping Charges</span>
                            <br/>
                            <input type="number" placeholder='--' style={{width:'96%',borderRadius:'4px',padding:'5px',backgroundColor:'#E6E6E6',border:'1px solid rgb(211, 210, 210)',color:'rgb(154, 153, 153)'}} />
                        </div>
                    </div>
                </div>

                <div style={{marginTop:'32px'}}>
                <span style={{fontWeight:'600'}}>Product</span>
                <div style={{borderRadius: '8px', overflow: 'hidden', marginBottom: '16px',border:'1px solid #E1E1E1',marginTop:'8px'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse',borderRadius: '8px', overflow: 'hidden',fontSize: '14px'}}>
                    <thead style={{backgroundColor: '#E6E6E6', borderRadius: '8px',borderCollapse: 'collapse'}}>
                      <tr>
                        <th style={{textAlign:'left',padding:'8px',color:'#676767'}}><input type='checkbox' /> Product</th>
                        <th style={{textAlign:'left',padding:'8px',color:'#676767'}}>SKU</th>
                        <th style={{textAlign:'left',padding:'8px',color:'#676767'}}>Quantity</th>
                        <th style={{textAlign:'left',padding:'8px',color:'#676767'}}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{padding:'8px',color:'#676767'}}><input type='checkbox' /> Color <IoIosArrowRoundForward /> Green <IoIosArrowRoundForward /> S</td>
                        <td style={{padding:'8px',color:'#676767'}}>CG00192T</td>
                        <td style={{padding:'8px',color:'#676767'}}>24</td>
                        <td style={{padding:'8px',color:'#676767'}}>₹5000.00</td>
                      </tr>
                      <tr>
                        <td style={{padding:'8px',color:'#676767'}}><input type='checkbox' /> Color <IoIosArrowRoundForward /> Green <IoIosArrowRoundForward /> S</td>
                        <td style={{padding:'8px',color:'#676767'}}>CG00192T</td>
                        <td style={{padding:'8px',color:'#676767'}}>24</td>
                        <td style={{padding:'8px',color:'#676767'}}>₹5000.00</td>
                      </tr>
                      <tr>
                        <td style={{padding:'8px'}}><input type='checkbox' /> Color <IoIosArrowRoundForward /> Green <IoIosArrowRoundForward /> S</td>
                        <td style={{padding:'8px',color:'#676767'}}>CG00192T</td>
                        <td style={{padding:'8px',color:'#676767'}}>24</td>
                        <td style={{padding:'8px',color:'#676767'}}>₹5000.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>

                <div style={{marginTop:'32px'}}>
                    <span style={{fontWeight:'600'}}>Pricing & Tax</span>
                    <br/>
                    <div style={{marginTop:'12px'}}>
                        <input type='checkbox' style={{width: '16px', height: '16px',color:'black'}} />
                        <span style={{marginLeft: '8px'}}>This Product Includes <u>5%</u> taxes</span>
                    </div>
                </div>

                <div style={{display:'flex',justifyContent:'end'}}>
                    <div style={{textAlign:'right'}}>
                    <span style={{}}>Total Price</span>
                    <br/>
                    <span style={{color:'#676767',marginTop:'10px'}}>₹ 15,750.00</span>
                    </div>
                </div>

            </div>
        </div>
      )}
        </div >
    );
};

export default PurchaseDashbord;

