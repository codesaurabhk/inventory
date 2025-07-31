import React, { useEffect, useRef } from "react";
import "./Damagesdashbord.css";


import { IoSearch } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";
import chair from "../images/chair.jpg";
import tshirt from "../images/tshirts.jpg";

import { FaAngleRight } from "react-icons/fa";
import { useState } from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const Damagesdashbord = () => {
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5; 

  const data = [
    {
      name: "Chair",
      quantity: "3 Pieces ",
      expirydate: "Today",
      image: chair,
      remarks: "--",
      storage : "Warehouse 01",
      statuss : "Returned"
    },
    {
      name: "T-Shirt",
      quantity: "30 Pieces ",
      expirydate: "11/092025",
      image: tshirt,
      remarks: "--",
      storage : "WH-04",
      statuss : "Processing"
    },
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
      <div className="overview">
        <div>
          <div className="toolbars">
            <div className="right">
              <span style={{ color: "#676767", fontWeight: "600" }}>
                Inventory
              </span>{" "}
              <span style={{ color: "#676767" }}>
                <FaAngleRight style={{ marginTop: "4px" }} />
              </span>{" "}
              <span>Damages & Return</span>
            </div>
            <div className="toolbar-actions">
              <button className="btn btn-light">Print</button>
              {/* <button className="btn btn-light">Export</button> */}
              {/* <button className="btn btn-primary">Add Product</button> */}
            </div>
          </div>

          <div className="toolbar-actions-th">
            <div className="toolbar-titles">
              <button className="toolbar-filter-btn">All</button>
              <button style={{ marginLeft: "10px" }} className="toolbar-btns">
                Return
              </button>
              <button className="toolbar-btns">Damages</button>
              {/* <button className="toolbar-btns">+</button> */}
            </div>

            <div className="toolbar-action" style={{ marginTop: "4px" }}>
              <button className="icon-btn ">
                <IoSearch />
              </button>
              <button className="icon-btn">
                <CgSortAz />
              </button>
              <button className="icon-btn">
                <TbArrowsSort />
              </button>
            </div>
          </div>
        </div>

        {/* Product Table */}
        <div>
          <table className="product-table">
            <thead>
              <tr style={{ color: "#676767" }}>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Date</th>
             

                <th>Remarks</th>
                   <th>Storage</th>
                   <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((product, index) => (
                <tr key={index} onClick={openForm}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="product-cell">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                    />
                    {product.name}
                  </td>
                  <td>{product.quantity}</td>
                  <td >
                    {" "}
                    <span
                      
                    >
                      {product.expirydate}
                    </span>
                  </td>

                  <td >{product.remarks}</td>
                  <td
                  >{product.storage}</td>
                  <td><span className={`statuss ${
                        product.statuss.toLowerCase() === "returned"
                          ? "blue"
                          : "yellow"
                      }`}>{product.statuss}</span></td>
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

              <div style={{marginTop: '16px',border:'1px solid #007B42',backgroundColor:'#BAFFDF',borderRadius:'4px',padding:'3px 15px'}}>
            <span>This item has been returned successfully.</span>
        </div>
        
        <div style={{border:'1px solid #C2C2C2',padding:'10px 16px',marginTop:'16px',borderRadius:'16px',lineHeight:'25px'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>
                    <span>Order Details</span>
                    <br/>
                    <span style={{color:'#676767'}}>Ponds Cream</span>
                    <br/>
                    <span style={{color:'#676767'}}>Order ID - DAC7634</span>
                    <br/>
                    <span style={{color:'#676767'}}>Amount -</span> <span>₹ 543.00</span>
                </div>
                <div>
                    <span style={{border:'1px solid #E4F3FF',padding:'2px 4px',backgroundColor:'#E4F3FF',color:'rgb(51, 157, 244)',borderRadius:'5px'}}>Return</span>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'16px'}}>
                <div>
                    <span>SKU</span>
                    <br/>
                    <span style={{color:'#676767'}}>PMC425</span>
                </div>
                <div>
                    <span>Quantity</span>
                    <br/>
                    <span style={{color:'#676767'}}>03</span>
                </div>
                <div>
                    <span>Serial no.</span>
                    <br/>
                    <span style={{color:'#676767'}}>89</span>
                </div>
                <div>
                    <span>Category</span>
                    <br/>
                    <span style={{color:'#676767'}}>Makeup & Beauty</span>
                </div>
            </div>
        </div>

        <div>
            <div style={{borderLeft:'2px dashed #CCDEFA',height:'60px',width:'1px',marginLeft:'25px'}}></div>
        </div>

        <div>
            <div style={{display:'flex',gap:'16px'}}>
                <div>
                    <div style={{color:' #1368EC',marginLeft:'13px',fontSize:'10px',border:'5px solid rgb(222, 231, 246)',borderRadius:'50%',padding:'2px 6px',backgroundColor:'#1368EC'}}>•</div>
                    <div style={{borderLeft:'2px solid #CCDEFA',height:'64px',width:'1px',marginLeft:'25px',marginTop:'0px'}}></div>
                </div>
                <div>
                    <span>Return Requested</span>
                    <br/>
                    <span style={{color:'#676767'}}>Wed, 16th Jan</span>
                </div>
            </div>
            <div style={{display:'flex',gap:'16px'}}>
                <div>
                    <div style={{color:' #1368EC',marginLeft:'13px',fontSize:'10px',border:'5px solid rgb(222, 231, 246)',borderRadius:'50%',padding:'2px 6px',backgroundColor:'#1368EC'}}>•</div>
                    <div style={{borderLeft:'2px solid #CCDEFA',height:'64px',width:'1px',marginLeft:'25px',marginTop:'0px'}}></div>
                </div>
                <div>
                    <span>Return Approved</span>
                    <br/>
                    <span style={{color:'#676767'}}>Wed, 16th Jan</span>
                </div>
            </div>
            <div style={{display:'flex',gap:'16px'}}>
                <div>
                    <div style={{color:' #1368EC',marginLeft:'13px',fontSize:'10px',border:'5px solid rgb(222, 231, 246)',borderRadius:'50%',padding:'2px 6px',backgroundColor:'#1368EC'}}>•</div>
                    <div style={{borderLeft:'2px solid #CCDEFA',height:'64px',width:'1px',marginLeft:'25px',marginTop:'0px'}}></div>
                </div>
                <div>
                    <span>Prder picked up from customer</span>
                    <br/>
                    <span style={{color:'#676767'}}>Thru, 18th Jan</span>
                </div>
            </div>
            <div style={{display:'flex',gap:'16px'}}>
                <div>
                    <div style={{color:' #1368EC',marginLeft:'13px',fontSize:'10px',border:'5px solid rgb(222, 231, 246)',borderRadius:'50%',padding:'2px 6px',backgroundColor:'#1368EC'}}>•</div>
                    <div style={{borderLeft:'2px solid #CCDEFA',height:'64px',width:'1px',marginLeft:'25px',marginTop:'0px'}}></div>
                </div>
                <div>
                    <span>Returned to warehouse</span>
                    <br/>
                    <span style={{color:'#676767'}}>Fri, 19th Jan</span>
                    <br/>
                    <span style={{color:'#676767'}}>Received to WH-009</span>
                </div>
            </div>
            <div style={{display:'flex',gap:'16px'}}>
                <div>
                    <div style={{color:' #1368EC',marginLeft:'13px',fontSize:'10px',border:'5px solid rgb(222, 231, 246)',borderRadius:'50%',padding:'2px 6px',backgroundColor:'#1368EC'}}>•</div>
                </div>
                <div>
                    <span>Refund Successful</span>
                    <br/>
                    <span style={{color:'#676767'}}>Sun, 21th Jan</span>
                </div>
            </div>
        </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Damagesdashbord;
