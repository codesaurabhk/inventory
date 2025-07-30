import React from "react";
import "./Damagesdashbord.css";


import { IoSearch } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";
import chair from "../images/chair.jpg";
import tshirt from "../images/tshirts.jpg";

import { FaAngleRight } from "react-icons/fa";

const Damagesdashbord = () => {
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
              {data.map((product, index) => (
                <tr key={index}>
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
            <div className="pagination-box">25 per page</div>
            <div className="pagination-box pagination-info">
              <span>1-10 of 721</span>
              <span style={{ color: "grey" }}> | </span>
              <button style={{ color: "grey" }} className="pagination-arrow">
                {"<"}
              </button>
              <button className="pagination-arrow">{">"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Damagesdashbord;
