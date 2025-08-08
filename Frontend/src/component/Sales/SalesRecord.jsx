import React, { useEffect } from "react";
import "./SalesRecord.css";
import { IoSearch } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

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
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const SalesRecord = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [searchdrop, setSearchDrop] = useState(false);
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
  const itemsPerPage = 8;



  const data = [
    {
      soldItems: "Chair",
      customer: "Mohan Kumar",
      total: "Office Chair",
      status: "Complete",
      amount: "---",
      image: chair,
    },
    {
      soldItems: "T-Shirt",
      customer: "Sohan Kumar",
      total: "T-Shirt",
      status: "Due",
      amount: "₹1470.00",
      image: tshirt,
    },
    {
      soldItems: "Wheel Chair",
      customer: "Ram Prashad",
      total: "T-Shirt",
      status: "Complete",
      amount: "---",
      image: wheelchair,
    },
    {
      soldItems: "Strawberry",
      customer: "Rajkumar Singh",
      total: "T-Shirt",
      status: "Complete",
      amount: "---",
      image: cheery,
    },
    {
      soldItems: "T-Shirt - Label MN",
      customer: "Mohit Pandey",
      total: "T-Shirt",
      status: "Complete",
      amount: "---",
      image: tshirts2,
    },
    {
      soldItems: "Gaming Chair",
      customer: "Rohit Kumar",
      total: "T-Shirt",
      status: "Complete",
      amount: "---",
      image: chair3,
    },
    {
      soldItems: "Luxury Bag",
      customer: "Pandey ji",
      total: "T-Shirt",
      status: "Complete",
      amount: "---",
      image: bag,
    },
    {
      soldItems: "Purple T-Shirt",
      customer: "Ram",
      total: "T-Shirt",
      status: "Complete",
      amount: "---",
      image: tshirts3,
    },
    {
      soldItems: "Sofa",
      customer: "Shyam",
      total: "T-Shirt",
      status: "Complete",
      amount: "---",
      image: sofa,
    },
    {
      soldItems: "Gaming Mouse",
      customer: "Bablu",
      total: "T-Shirt",
      status: "Complete",
      amount: "---",
      image: mouse,
    },
  ];


  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);



  return (
    <div className="dashboard-container">
      <div style={{ background: "#FFFFFF", borderRadius: "8px", padding: "25px 20px", paddingBottom: "2px" }} >
        <div className="dashboard-metricss">
          <div >
            <h3>Sales Record</h3>
          </div>
          <div className="toolbar-actions">
            <Link to="/CreateSales" className="btn btn-primary">+ Create Sales</Link>
          </div>
        </div>

        <div style={{ margin: '10px 0', fontFamily: 'Arial, sans-serif' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '5px',
              color: '#333',
            }}
          >
            Customer Name or Mobile No.
          </label>
          <select
            name="category"
            style={{
              width: '100%',
              padding: '8px 12px',
              fontSize: '14px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: '#f8f9fa',
              cursor: 'pointer',
            }}
          >
            <option>Select Customer</option>
          </select>
        </div>


      </div>
      {/* Toolbar */}
      <div>
        <div className="overview">
          {/* //implimaet */}
          <div className='toolbar-actions-ths' style={{ border: '1px solid #ccc', borderRadius: '6px', padding: '4px 11px', }}>
            <div className="toolbar-titles">
              {searchdrop ? (
                <>
                  <div style={{ border: 'none', marginLeft: '20px', alignItems: 'center', display: 'flex' }}>
                    <IoIosSearch style={{ fontSize: '25px' }} />
                    <input type='text' placeholder='Search Here' style={{ border: 'none', outline: 'none', fontSize: '20px' }} />
                  </div>
                </>
              ) : (
                <>
                  <button className="toolbar-filter-btn">All</button>
                  <button className="btnz btn-light">Recents</button>
                  <button className="btnz btn-light">Paid</button>
                  <button className="btnz btn-light">Due</button>
                  <button className="btnz btn-light"><FaPlus /></button>
                </>
              )}
            </div>

            <div className="toolbar-action" style={{ marginTop: "4px" }}>
              {searchdrop ? (
                <></>) : (<>
                  <button className="icon-btn " value={searchdrop} onClick={handleSearchDropChange}><IoSearch /> <CgSortAz style={{ fontSize: '30px' }} /></button>
                </>)}
              <button className="icon-btn" onClick={handleClear}><TbArrowsSort /></button>
            </div>
          </div>

          {searchdrop ? (
            <>
              <div className='' style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', borderBottom: '2px solid #E6E6E6' }}>

                <div className="toolbar-titles" style={{ marginTop: "4px", display: 'flex', gap: '10px' }}>
                  <div style={{ border: '2px solid #ccc', padding: '1px 5px 0px 3px', alignItems: 'center', display: 'flex', borderRadius: '6px' }}>
                    <button className="icon-btn" style={{ outline: 'none', border: 'none', color: '#555252' }}> Filter <CgSortAz style={{ fontSize: '30px' }} /></button>
                  </div>

                  <div
                    style={{ border: categoryValue ? '2px dashed #1368EC' : '2px dashed #ccc', padding: '0px 10px 0px 3px', alignItems: 'center', display: 'flex', borderRadius: '6px' }}
                    value={categoryValue}
                    onChange={handleCategoryChange}>
                    <select className="icon-btn" style={{ outline: 'none', border: 'none', color: categoryValue ? '#1368EC' : '#555252' }}>
                      <option value="" style={{ color: '#555252' }}>Category</option>
                      <option value="c1" style={{ color: '#555252' }}>Category 1</option>
                      <option value="c2" style={{ color: '#555252' }}>Category 2</option>
                    </select>
                  </div>

                  <div
                    style={{ border: socketValue ? '2px dashed #1368EC' : '2px dashed #ccc', padding: '0px 10px 0px 3px', alignItems: 'center', display: 'flex', borderRadius: '6px' }}
                    value={socketValue}
                    onChange={handleSocketChange}>
                    <select className="icon-btn" style={{ outline: 'none', border: 'none', color: socketValue ? '#1368EC' : '#555252' }}>
                      <option value="" style={{ color: '#555252' }}>Socket Level</option>
                      <option value="sl1" style={{ color: '#555252' }}>Last 7 days</option>
                    </select>
                  </div>

                  <div
                    style={{ border: warehouseValue ? '2px dashed #1368EC' : '2px dashed #ccc', padding: '0px 10px 0px 3px', alignItems: 'center', display: 'flex', borderRadius: '6px' }}
                    value={warehouseValue}
                    onChange={handleWarehouseChange}>
                    <select className="icon-btn" style={{ outline: 'none', border: 'none', color: warehouseValue ? '#1368EC' : '#555252' }}>
                      <option value="" style={{ color: '#555252' }}>Warehouse</option>
                      <option value="wh1" style={{ color: '#555252' }}>Warehouse 1</option>
                    </select>
                  </div>

                  <div
                    style={{ border: exprationValue ? '2px dashed #1368EC' : '2px dashed #ccc', padding: '0px 10px 0px 3px', alignItems: 'center', display: 'flex', borderRadius: '6px' }}
                    value={exprationValue}
                    onChange={handleExprationChange}>
                    <select className="icon-btn" style={{ outline: 'none', border: 'none', color: exprationValue ? '#1368EC' : '#555252' }}>
                      <option value="" style={{ color: '#555252' }}>Expiration</option>
                      <option value="e1" style={{ color: '#555252' }}>Expiration 1</option>
                    </select>
                  </div>
                </div>

                <div className="toolbar-action" style={{ marginTop: "4px" }}>
                  <button className="icon-btn ">Clear</button>
                </div>

              </div>
            </>
          ) : (<></>)}


          {/* Product Table */}
          <div >

            <table className="product-table" >
              <thead >
                <tr style={{ background: "#F1F1F1", color: "#676767" }}>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Sold Items</th>
                  <th>Customer</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                  <th>Due Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody >
                {paginatedData.map((sales, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img
                          src={sales.image}
                          alt={sales.name}
                          className="product-img"
                        />
                        <span >{sales.soldItems}</span>
                      </div>

                    </td>

                    <td>{sales.customer} </td>
                    <td>
                      {sales.total}
                    </td>
                    <td>
                      <span className={`status ${sales.status.toLowerCase()}`}>
                        {sales.status}
                      </span>
                    </td>
                    <td>{sales.amount}</td>
                    <td>
                      <BsThreeDots />
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
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
};

export default SalesRecord;
