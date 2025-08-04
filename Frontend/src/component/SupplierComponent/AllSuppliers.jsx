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
              <div className="toolbars" style={{padding:'16px 16px'}}>
                <div>
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

              <div className="toolbar-actions-th" style={{justifyContent:'space-between', alignItems:'center'}}>
                <div className="toolbar-titles">
                  <button className="toolbar-filter-btn">All</button>
                </div>

                <div style={{ display: "flex", gap: "16px",marginTop: "10px",marginBottom: "10px", padding:'0px 20px' }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #E6E6E6",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "6px",
                      padding: "10px",
                      gap: "10px",
                    }}
                  >
                    <span>
                      <CiSearch />
                    </span>
                    <span>
                      <IoFilter />
                    </span>
                  </div>

                  {/* up & down icon */}
                  <div
                    style={{
                      border: "1px solid #E6E6E6",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "6px",
                      padding: "10px",
                    }}
                  >
                    <span>
                      <LuArrowUpDown />
                    </span>
                  </div>
                </div>
              </div>
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