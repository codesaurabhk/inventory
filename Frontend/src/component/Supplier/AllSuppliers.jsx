import React from "react";
import "./AllSupplier.css";
import MoneyBag from "../images/MoneyBag.png";
import RadioActive from "../images/Radioactive.png";
import CircleLogo from "../images/Circlelogo.png";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TbMoneybag } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import { RiAlertFill } from "react-icons/ri";
import { FaStopCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";

function AllSuppliers() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const data = [
    {
      supplier: "Rohan Texttile",
      category: ["clothes", "womens wear", "kids wear", "mens wear"],
      supplierType: "Manufacture",
      balance: "+ 1400",
    },
    {
      supplier: "Rohan Texttile",
      category: "clothes",
      supplierType: "Manufacture",
      balance: "+ ₹ 800",
    },
    {
      supplier: "Rohan Texttile",
      category: "clothes",
      supplierType: "Manufacture",
      balance: "+ ₹ 1600",
    },
    {
      supplier: "Rohan Texttile",
      category: "clothes",
      supplierType: "Manufacture",
      balance: "- ₹ 8000",
    },
    {
      supplier: "Rohan Texttile",
      category: "clothes",
      supplierType: "Manufacture",
      balance: "+ ₹ 90",
    },
    {
      supplier: "Rohan Texttile",
      category: "clothes",
      supplierType: "Manufacture",
      balance: "- ₹ 100",
    },
    {
      supplier: "Rohan Texttile",
      category: "clothes",
      supplierType: "Manufacture",
      balance: "- ₹ 1",
    },
    {
      supplier: "Rohan Texttile",
      category: "clothes",
      supplierType: "Manufacture",
      balance: "+ ₹ 900",
    },
    {
      supplier: "Rohan Texttile",
      category: "clothes",
      supplierType: "Manufacture",
      balance: "+ ₹ 200",
    },
    {
      supplier: "Rohan Texttile",
      category: "clothes",
      supplierType: "Manufacture",
      balance: "+ ₹ 600 ",
    },
    {
      supplier: "Rohan Texttile",
      category: "clothes",
      supplierType: "Manufacture",
      balance: "- ₹ 5990 ",
    },
    {
      supplier: "Rohan Texttile",
      category: "clothes",
      supplierType: "Manufacture",
      balance: " - ₹ 500",
    },
  ];

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);


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
    <div className="all-supplier-container">
      <div className="supplier-header">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#676767",
            marginBottom: "20px",
          }}
        >
          Supplier
        </Link>

        {/* Three-Box */}
        <div className="three-box">
          {/* All Parties */}
           <div className="radio-active">
            <div>
              <img src={MoneyBag} alt="money" />
            </div>
            <div className="bag-content">
              <span style={{ color: "#676767", marginTop: "50px" }}>
                All Parties
              </span>
              <br />
              <span style={{ textAlign: "left" }}>
                <b>14</b>
              </span>
            </div>
          </div>

          {/* To Receive */}
          <div className="radio-active">
            <div>
              <img src={RadioActive} alt="money" />
            </div>
            <div className="bag-content">
              <span style={{ color: "#676767", marginTop: "50px" }}>
                To Receive
              </span>
              <br />
              <span style={{ textAlign: "left" }}>
                <b>₹12,75,987</b>
              </span>
            </div>
          </div>

          {/* To Pay */}
          <div className="Circle-logo">
            <div>
              <img src={CircleLogo} alt="money" />
            </div>
            <div className="bag-content">
              <span style={{ color: "#676767", marginTop: "50px" }}>
                To Pay
              </span>
              <br />
              <span style={{ textAlign: "left" }}>
                <b>₹5,987</b>
              </span>
            </div>
          </div>
        </div>

        {/* Search Category & Add Supplier */}
        <div className="sea-cat-add">
          {/* Search */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "50px" }}>
              <div className="search">
                <FaSearch />
                <input
                  type="search"
                  placeholder="Search"
                  style={{
                    border: "none",
                    textAlign: "left",
                    width: "100%",
                    outline: "none",
                  }}
                />
              </div>

              {/* Category */}
              <div className="select-category">
                <select
                  name=""
                  id=""
                  style={{
                    border: "1px solid #e6e6e6",
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    padding: "10px 20px",
                    textAlign: "left", // ensures text is aligned left
                    direction: "ltr",
                    width: "200px", // optional: fixed width
                    outline: "none",
                  }}
                >
                  <option value="">Select Category</option>
                </select>
              </div>
            </div>
          </div>

          {/* Add Supplier Button*/}

          <div className="Add-supplier-link">
            <Link
              to="/AddSupplier"
              style={{
                padding: "8px 15px",
                backgroundColor: "#1368EC",
                color: "white",
                borderRadius: "8px",
                border: "none",
                textDecoration: "none",
              }}
            >
              Add Supplier
            </Link>
          </div>
        </div>

        {/* Toolbar */}
        <div
          style={{
            backgroundColor: "white",
            marginTop: "30px",
            borderRadius: "8px",
          }}
        >
          <div className="overview">
            <div>
              <div className="toolbars" style={{padding:'16px 16px',display:'flex',alignItems:'center'}}>
                <div style={{marginTop:'15px'}}>
                  <h3>All Supplier</h3>
                </div>
                <div className="toolbar-actions">
                  <select
                    style={{
                      border: "1px solid #e6e6e6",
                      borderRadius: "8px",
                     padding:'8px',
                      outline: "none",
                      backgroundColor: "white",
                      color: "#333",
                    }}
                  >
                    <option value="">Select warehouse</option>
                  </select>
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
                            </>
                            )}
                        </div>

                        <div className="toolbar-action" style={{ marginTop: "4px" }}>
                            {searchdrop ? (
                            <></> ) : (<>
                            <button className="icon-btn " value={searchdrop} onClick={handleSearchDropChange}><IoSearch /> <CgSortAz style={{fontSize:'30px'}} /></button>
                            </>) }
                            <button className="icon-btn"><TbArrowsSort /></button>
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
                            <button className="icon-btn " onClick={handleClear}>Clear</button>
                        </div>

                    </div>
                        </>
                    ) : (<></>)}
                    

            </div>
          </div>

          {/* table Container */}
          <div style={{ backgroundColor: "white" }}>
            <table className="product-table">
              <thead>
                <tr style={{ color: "#676767" }}>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Supplier</th>
                  <th>Category</th>
                  <th>Supplier Type </th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((sales, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{sales.supplier}</td>
                    <td>
                      {Array.isArray(sales.category) ? (
                        sales.category.map((cat, i) => (
                          <span key={i} className="category-chip">
                            {" "}
                            {cat}{" "}
                          </span>
                        ))
                      ) : (
                        <span className="category-chip">
                          {" "}
                          {sales.category}{" "}
                        </span>
                      )}
                    </td>

                    <td>{sales.supplierType}</td>
                    <td>
                      <span
                        className={
                          sales.balance.trim().startsWith("+")
                            ? "balance-positive"
                            : "balance-negative"
                        }
                      >
                        {sales.balance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <div className="pagination-boxx">{itemsPerPage} per page</div>
              <div className="pagination-boxx pagination-info">
                <span>
                  {startIndex + 1}-{Math.min(endIndex, totalItems)} of{" "}
                  {totalItems}
                </span>
                <span style={{ color: "grey" }}> | </span>
                <button
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className="pagination-arrow"
                >
                  <FaAngleLeft />
                </button>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className="pagination-arrow"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllSuppliers;