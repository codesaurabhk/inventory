import React from "react";
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

const SalesRecord = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
      {/* Top Section   background: #FFFFFF;
    
    border-radius: 8px;
     padding: 0px 20px; */}
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
      <div
      // style={{ padding: "5px 5px", backgroundColor: "blue" }}
      >
        <div className="overview">
          <div>


            <div className="toolbar-actions-ths" style={{ border: '1px solid #ccc', borderRadius: '6px', padding: '4px 11px', }}>
              <div className="toolbar-titles">
                <button className="toolbar-filter-btn">All</button>
                <button className="btnz btn-light">Recents</button>
                <button className="btnz btn-light">Paid</button>
                <button className="btnz btn-light">Due</button>
                <button className="btnz btn-light"><FaPlus /></button>

              </div>

              <div className="toolbar-action" style={{ marginTop: "4px" }}>
                <button className="icon-btn ">
                  <IoSearch /><CgSortAz style={{fontSize:"26px"}} />
                </button>
                
                <button className="icon-btn">
                  <TbArrowsSort />
                </button>
              </div>
            </div>
          </div>

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
