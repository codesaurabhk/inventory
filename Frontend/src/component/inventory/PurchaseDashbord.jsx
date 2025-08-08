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
import { Link } from 'react-router-dom';
import PurchaseOrder from './PurchaseOrder';
import { IoIosSearch } from "react-icons/io";

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

const[searchdrop, setSearchDrop] = useState(false);
const handleSearchDropChange = () => {
    setSearchDrop(true);
}

const [categoryValue, setCategoryValue] = useState('');
const handleCategoryChange = (e) => {
  setCategoryValue(e.target.value);
};

const [socketValue, setSocketValue] = useState('');
const handleSocketChange = (e) => {
  setSocketValue(e.target.value);
};

const [warehouseValue, setWarehouseValue] = useState('');
const handleWarehouseChange = (e) => {
  setWarehouseValue(e.target.value);
};

const [exprationValue, setExprationValue] = useState('');
const handleExprationChange = (e) => {
  setExprationValue(e.target.value);
};

const handleClear = () => {
  setSearchDrop(false);
  setCategoryValue('');
  setSocketValue('');
  setWarehouseValue('');
  setExprationValue('');
};

    return (
        <>
        <PurchaseOrder/>
        <div className="dashboard-container">
            <div className='overview'>
                <div >
                    <div className='toolbars' >
                        <div className="right">
                            <span style={{color:"#676767", fontWeight:"600"}}>Inventory</span>  <span style={{color:"#676767"}} ><FaAngleRight style={{marginTop:"4px"}} /></span> <span>Purchase Order</span>
                        </div>
                        <div className="toolbar-actions">
                            <button className="btn btn-light" style={{marginTop:'-10px'}}>Import</button>
                            <button className="btn btn-light" style={{marginTop:'-10px'}}>Export</button>
                            <Link to="/CreatePurchaseOrder" className="btn btn-primary">Create Purchase Order</Link>
                        </div>
                    </div>

                    <div className='toolbar-actions-th'>
                        <div className="toolbar-titles">
                            {searchdrop ? (
                            <>
                            <div style={{border:'none',marginLeft:'20px',alignItems:'center',display:'flex'}}>
                                <IoIosSearch style={{fontSize:'25px'}} />
                                <input type='text' placeholder='Search Here' style={{border:'none',outline:'none',fontSize:'20px'}} />
                            </div>
                            </>
                            ) : (
                            <>
                            <button className="toolbar-filter-btn">All</button>
                            <button style={{marginLeft:"10px"}} className="toolbar-btns">Active</button>
                            <button className="toolbar-btns">Inactive</button>
                            <button className="toolbar-btns">+</button>
                            </>
                            )}
                        </div>

                        <div className="toolbar-action" style={{ marginTop: "4px" }}>
                            {searchdrop ? (
                            <></> ) : (<>
                            <button className="icon-btn " value={searchdrop} onClick={handleSearchDropChange}><IoSearch /> <CgSortAz style={{fontSize:'30px'}} /></button>
                            </>) }
                            <button className="icon-btn" onClick={handleClear}><TbArrowsSort /></button>
                        </div>
                    </div>

                    {searchdrop ? (
                        <>
                        <div className='' style={{display:'flex',justifyContent:'space-between',padding:'5px',borderBottom:'2px solid #E6E6E6'}}>

                        <div className="toolbar-titles" style={{ marginTop: "4px",display:'flex',gap:'10px' }}>
                            <div style={{border:'2px solid #ccc',padding:'1px 5px 0px 3px',alignItems:'center',display:'flex',borderRadius:'6px'}}>
                                <button className="icon-btn" style={{outline:'none',border:'none',color:'#555252'}}> Filter <CgSortAz style={{fontSize:'30px'}} /></button>
                            </div>
                            
                            <div 
                            style={{border: categoryValue ? '2px dashed #1368EC' : '2px dashed #ccc',padding:'0px 10px 0px 3px',alignItems:'center',display:'flex',borderRadius:'6px'}} 
                            value={categoryValue} 
                            onChange={handleCategoryChange}>
                                <select className="icon-btn" style={{outline:'none',border:'none',color: categoryValue ? '#1368EC' : '#555252'}}>
                                <option value="" style={{color:'#555252'}}>Category</option>
                                <option value="c1" style={{color:'#555252'}}>Category 1</option>
                                <option value="c2" style={{color:'#555252'}}>Category 2</option>
                            </select>
                            </div>

                            <div 
                            style={{border: socketValue ? '2px dashed #1368EC' : '2px dashed #ccc',padding:'0px 10px 0px 3px',alignItems:'center',display:'flex',borderRadius:'6px'}} 
                            value={socketValue} 
                            onChange={handleSocketChange}>
                                <select className="icon-btn" style={{outline:'none',border:'none',color: socketValue ? '#1368EC' : '#555252'}}>
                                <option value="" style={{color:'#555252'}}>Socket Level</option>
                                <option value="sl1" style={{color:'#555252'}}>Last 7 days</option>
                            </select>
                            </div>
                            
                            <div 
                            style={{border: warehouseValue ? '2px dashed #1368EC' : '2px dashed #ccc',padding:'0px 10px 0px 3px',alignItems:'center',display:'flex',borderRadius:'6px'}} 
                            value={warehouseValue} 
                            onChange={handleWarehouseChange}>
                                <select className="icon-btn" style={{outline:'none',border:'none',color: warehouseValue ? '#1368EC' : '#555252'}}>
                                <option value="" style={{color:'#555252'}}>Warehouse</option>
                                <option value="wh1" style={{color:'#555252'}}>Warehouse 1</option>
                            </select>
                            </div>

                            <div 
                            style={{border: exprationValue ? '2px dashed #1368EC' : '2px dashed #ccc',padding:'0px 10px 0px 3px',alignItems:'center',display:'flex',borderRadius:'6px'}} 
                            value={exprationValue} 
                            onChange={handleExprationChange}>
                                <select className="icon-btn" style={{outline:'none',border:'none',color: exprationValue ? '#1368EC' : '#555252'}}>
                                <option value="" style={{color:'#555252'}}>Expiration</option>
                                <option value="e1" style={{color:'#555252'}}>Expiration 1</option>
                            </select>
                            </div>
                        </div>

                        <div className="toolbar-action" style={{ marginTop: "4px" }}>
                            <button className="icon-btn ">Clear</button>
                        </div>

                    </div>
                        </>
                    ) : (<></>)}
                   
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
                                    <td>
                                       
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
            overflowY: 'auto',
          }}>
            <div ref={formRef} style={{width:'646px',height:'820px',margin:'auto',marginTop:'80px',marginBottom:'80px',backgroundColor:'white',border:'1px solid #E1E1E1',borderRadius:'8px',padding:'10px 16px'}}>
                
                <div style={{display:'flex',justifyContent:'space-between',gap:'8px',marginTop:'16px'}}>
                    <div>
                        <span style={{fontWeight:'600'}}>Supplier</span>
                        <br/>
                        <span style={{color:'#676767'}}>Reliance - Mumbai</span>
                    </div>
                    <div>
                        <span style={{fontWeight:'600'}}>Destination</span>
                        <br/>
                        <span style={{color:'#676767'}}>WH-009</span>
                    </div>
                    <div></div>
                </div>

                <div style={{display:'flex',justifyContent:'space-between',gap:'8px',marginTop:'16px'}}>
                    <div>
                        <span style={{fontWeight:'600'}}>SKU</span>
                        <br/>
                        <span style={{color:'#676767'}}>Wheel Chair</span>
                    </div>
                    <div>
                        <span style={{fontWeight:'600'}}>Quantity</span>
                        <br/>
                        <span style={{color:'#676767'}}>09</span>
                    </div><div>
                        <span style={{fontWeight:'600'}}>Serial no.</span>
                        <br/>
                        <span style={{color:'#676767'}}>0089</span>
                    </div><div>
                        <span style={{fontWeight:'600'}}>Category</span>
                        <br/>
                        <span style={{color:'#676767'}}>Chair</span>
                    </div><div>
                        <span style={{fontWeight:'600'}}>Sub Category</span>
                        <br/>
                        <span style={{color:'#676767'}}>Wheel Chair</span>
                    </div>
                </div>

                <div style={{display:'flex',justifyContent:'space-between',gap:'8px',marginTop:'16px'}}>
                    <div>
                        <span style={{fontWeight:'600'}}>Brand</span>
                        <br/>
                        <span style={{color:'#676767'}}>ABC</span>
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
                    <span style={{fontWeight:'600'}}>Payment Information & Financial Details</span>
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
        </>
    );
};

export default PurchaseDashbord;

