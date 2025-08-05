import React, { useState } from "react";
import "./SupplierHistory.css";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa"
import PopUp from "./PopUp.jsx";

function SupplierHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;
  const totalItems = 721;

  const data = [
    {
      product: "Chair",
      time: "11:23 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "WH001",
      remarks: "--",
    },
    {
      product: "T-Shirt",
      time: "11:23 PM",
      qty: "3 Pieces",
      movementType: "Stock Out",
      destination: "Warehouse 2",
      remarks: "--",
    },
    {
      product: "Wheel Chair",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "Warehouse 5",
      remarks: "1 Broken",
    },
    {
      product: "Strawberry",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "Warehouse 8",
      remarks: "All are Spoiled Fruits",
    },
    {
      product: "T-Shirt - Label MN",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock Out",
      destination: "Warehouse 9",
      remarks: "--",
    },
    {
      product: "Gaming Chair",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "Warehouse1",
      remarks: "--",
    },
    {
      product: "Luxury Bag",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "WH005",
      remarks: "--",
    },
    {
      product: "Purple T-Shirt",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "WH001",
      remarks: "--",
    },
    {
      product: "Sofa",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "WH001",
      remarks: "--",
    },
    {
      product: "Gaming Mouse",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock Out",
      destination: "Warehouse 7",
      remarks: "--",
    },
  ];

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentData = data.slice(0, itemsPerPage);

  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState(null);

  const handlePopup = (item) => {
    setPopupData({
      referenceNo: "123789",
      date: "29/07/2025",
      supplier: "Reliance - Mumbai",
      destination: "WH-009",
      products: [
        {
          name: "Color -> Green -> S",
          sku: "CG00192T",
          quantity: 24,
          unitPrice: 5000,
          totalPrice: 5000,
        },
        {
          name: "Color -> Green -> M",
          sku: "CG00192T",
          quantity: 24,
          unitPrice: 5000,
          totalPrice: 5000,
        },
        {
          name: "Color -> Red -> XL",
          sku: "CG00183T",
          quantity: 42,
          unitPrice: 5000,
          totalPrice: 5000,
        },
      ],
      subtotal: 15000,
      shippingCharges: 3000,
      totalPrice: 17000,
      paymentMethod: "Net Banking",
      courierPartner: "Shippocket",
      arrivalTime: "13:45 PM",
    });
    setShowPopup(true);
  };

  return (
    <div className="supplier-history-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="breadcrumb-history">
          <span style={{ color: "#676767" }}>Supplier</span>
          <span style={{ margin: "0 8px", color: "#676767" }}>
            <IoIosArrowForward />
          </span>
          <span style={{ color: "#262626" }}>Supplier History Log</span>
        </div>
        {/* Select Warehouse */}
        <div className="controls-right">
          <div className="warehouse-select-wrapper">
            <select className="warehouse-select">
              <option value="">Select Warehouse</option>
            </select>
          </div>
        </div>
      </div>
      <hr />

      <div className="supplier-history-controls">
        <div className="filter-tabs">
          {["All", "Stock In", "Stock Out", "Transfer", "Processing"].map(
            (label, index) => (
              <button key={index} className={label === "All" ? "active" : ""}>
                {label}
              </button>
            )
          )}
        </div>

        {/* search & filter icon arrow up & down icon*/}
        <div style={{ display: "flex" }}>
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

      <div className="supplier-history-table-container">
        <table className="supplier-history-table">
          <thead>
            <tr style={{ backgroundColor: "#F5F5F5" }}>
              <th>
                <input type="checkbox" />
              </th>
              <th>Product</th>
              <th>Time</th>
              <th>QTY</th>
              <th>Movement type</th>
              <th>Destination</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index} onClick={() => handlePopup(item)}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img
                    src={`https://via.placeholder.com/30?text=${item.product[0]}`}
                    alt={item.product}
                    className="product-image"
                  />
                  {item.product}
                </td>
                <td>{item.time}</td>
                <td>{item.qty}</td>
                <td>
                  <span
                    className={`badge ${
                      item.movementType === "Stock In"
                        ? "stock-in"
                        : "stock-out"
                    }`}
                  >
                    {item.movementType}
                  </span>
                </td>
                <td>{item.destination}</td>
                <td>{item.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* pagination */}

        <div className="pagination">
          <div className="pagination-boxx">{itemsPerPage} per page</div>
          <div className="pagination-boxx pagination-info">
            <span>
              {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems}
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

      {showPopup && popupData && (
        <PopUp data={popupData} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}

export default SupplierHistory;
