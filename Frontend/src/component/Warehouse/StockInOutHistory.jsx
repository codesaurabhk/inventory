import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function StockInOutHistory() {
  // Updated stockMovements with consistent naming: movementType instead of movementtype
  const stockMovements = [
    {
      id: 1,
      product: "LED Monitor",
      time: "11:23",
      qty: "3 Pieces",
      movementType: "Stock In", // Changed to movementType
      source: "Supplier-XYZ",
      reference: "Request #REQ102",
    },
    {
      id: 2,
      product: "Wireless Keyboard",
      time: "09:15",
      qty: "5 Pieces",
      movementType: "Stock Out", // Changed to movementType
      source: "Order #ORD205",
      reference: "Dispatch #DISP301",
    },
    // ... other items updated similarly
    {
      id: 3,
      product: "Gaming Mouse",
      time: "14:40",
      qty: "8 Pieces",
      movementType: "Stock In",
      source: "Supplier-ABC",
      reference: "Request #REQ108",
    },
    {
      id: 4,
      product: "Office Chair",
      time: "16:10",
      qty: "2 Pieces",
      movementType: "Stock Out",
      source: "Order #ORD210",
      reference: "Dispatch #DISP305",
    },
    {
      id: 5,
      product: "Laptop Stand",
      time: "10:05",
      qty: "6 Pieces",
      movementType: "Stock In",
      source: "Supplier-PQR",
      reference: "Request #REQ115",
    },
    {
      id: 6,
      product: "Smartphone",
      time: "13:55",
      qty: "4 Pieces",
      movementType: "Stock Out",
      source: "Order #ORD218",
      reference: "Dispatch #DISP310",
    },
    {
      id: 7,
      product: "Projector",
      time: "12:25",
      qty: "1 Piece",
      movementType: "Stock In",
      source: "Supplier-LMN",
      reference: "Request #REQ120",
    },
    {
      id: 8,
      product: "USB-C Cable",
      time: "15:45",
      qty: "15 Pieces",
      movementType: "Stock Out",
      source: "Order #ORD225",
      reference: "Dispatch #DISP315",
    },
    {
      id: 9,
      product: "Router",
      time: "17:30",
      qty: "3 Pieces",
      movementType: "Stock In",
      source: "Supplier-DEF",
      reference: "Request #REQ125",
    },
    {
      id: 10,
      product: "External Hard Drive",
      time: "18:20",
      qty: "7 Pieces",
      movementType: "Stock Out",
      source: "Order #ORD230",
      reference: "Dispatch #DISP320",
    },
    {
      id: 11,
      product: "Webcam",
      time: "19:05",
      qty: "5 Pieces",
      movementType: "Stock In",
      source: "Supplier-UVW",
      reference: "Request #REQ130",
    },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleCellClick = (stock) => {
    setSelectedStock(stock);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedStock(null);
  };

  // Calculate subtotal and related values
  const quantity = selectedStock
    ? parseInt(selectedStock.qty.replace("Pieces", "").trim())
    : 0;
  const unitPrice = 5000;
  const subtotal = quantity * unitPrice;
  const cgst = 9; // 9% CGST
  const sgst = 9; // 9% SGST
  const shippingCharges = 300;
  const totalPrice =
    subtotal +
    (subtotal * cgst) / 100 +
    (subtotal * sgst) / 100 +
    shippingCharges;

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid #e6e6e6",
          padding: "16px 24px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          backgroundColor: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontFamily: "roboto",
              fontWeight: "500",
              fontSize: "18px",
              color: "#676767",
            }}
          >
            Warehouses
          </span>
          <span>
            <IoIosArrowForward
              style={{
                fontFamily: "roboto",
                fontWeight: "500",
                fontSize: "18px",
                color: "#676767",
              }}
            />
          </span>
          <span
            style={{
              fontFamily: "roboto",
              fontWeight: "500",
              fontSize: "18px",
              color: "#262626",
            }}
          >
            Stock Movement Log
          </span>
        </div>
        <div
          style={{
            border: "1px solid #e6e6e6",
            borderRadius: "4px",
            padding: "8px",
            gap: "8px",
            backgroundColor: "#fff",
          }}
        >
          <select name="" id="" style={{ border: "none", outline: "none" }}>
            <option
              value=""
              style={{
                border: "none",
                outline: "none",
                color: "#676767",
                fontFamily: "roboto",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              Select Warehouse
            </option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#fff",
          padding: "8px 24px",
          borderBottom: "1px solid #e6e6e6",
          borderLeft: "1px solid #e6e6e6",
          borderRight: "1px solid #e6e6e6",
          gap: "18px",
          
        }}
      >
        <div
          style={{
            gap: "18px",
            justifyContent: "space-between",
            display: "flex",
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "16px",
            color: "#262626",
            alignItems:'center'
          }}
        >
          <span
            style={{
              borderRadius: "4px",
              padding: "8px",
              gap: "8px",
              backgroundColor: "#f1f1f1",
            }}
          >
            All
          </span>
          <span>Stock In</span>
          <span>Stock Out</span>
          <span>Transfer</span>
          <span>Processing</span>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e6e6e6",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          maxWidth: "100%",
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "Arial",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#f5f5f5",
                color: "#444",
                textAlign: "left",
              }}
            >
              <th style={{ padding: "10px" }}>
                <input type="checkbox" />
              </th>
              <th style={{ padding: "10px" }}>Product</th>
              <th style={{ padding: "10px" }}>Time</th>
              <th style={{ padding: "10px" }}>QTY</th>
              <th style={{ padding: "10px" }}>Movement Type</th>
              <th style={{ padding: "10px" }}>Source/Destination</th>
              <th style={{ padding: "10px" }}>Reference/Note</th>
            </tr>
          </thead>
          <tbody>
            {stockMovements.map((stock) => (
              <tr
                key={stock.id}
                style={{
                  borderBottom: "1px solid #d3d3d3",
                  transition: "background-color 0.2s",
                }}
              >
                <td
                  onClick={() => handleCellClick(stock)}
                  style={{ padding: "10px" }}
                >
                  <input type="checkbox" />
                </td>
                <td
                  style={{ padding: "10px" }}
                  onClick={() => handleCellClick(stock)}
                >
                  {stock.product}
                </td>
                <td
                  style={{ padding: "10px" }}
                  onClick={() => handleCellClick(stock)}
                >
                  {stock.time}
                </td>
                <td
                  style={{ padding: "10px" }}
                  onClick={() => handleCellClick(stock)}
                >
                  {stock.qty}
                </td>
                <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                  {(() => {
                    const type = stock.movementType.trim().toLowerCase(); // Fixed to use movementType
                    if (type === "stock in") {
                      return (
                        <span
                          style={{
                            padding: "4px 12px",
                            borderRadius: "20px",
                            fontSize: "13px",
                            fontWeight: "500",
                            backgroundColor: "#DFFFE0", // green shade
                          }}
                        >
                          {stock.movementType}
                        </span>
                      );
                    }
                    if (type === "stock out") {
                      return (
                        <span
                          style={{
                            padding: "4px 12px",
                            borderRadius: "20px",
                            fontSize: "13px",
                            fontWeight: "500",
                            backgroundColor: "#FCE4E6", // red shade
                          }}
                        >
                          {stock.movementType}
                        </span>
                      );
                    }
                    return <span>{stock.movementType}</span>;
                  })()}
                </td>
                <td
                  style={{ padding: "10px" }}
                  onClick={() => handleCellClick(stock)}
                >
                  {stock.source}
                </td>
                <td
                  style={{ padding: "10px" }}
                  onClick={() => handleCellClick(stock)}
                >
                  {stock.reference}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isPopupOpen && selectedStock && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "24px",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "24px",
              gap: "24px",
              borderRadius: "8px",
              maxWidth: "800px",
              width: "95%",
            }}
          >
            {/* Header Buttons */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <span
                style={{
                  border: "1px solid #676767",
                  backgroundColor:
                    selectedStock.movementType === "Stock Out" // Fixed to movementType
                      ? "#ED2F42"
                      : "#2fed45",
                  padding: "8px",
                  borderRadius: "4px",
                  color: "#fff",
                }}
              >
                {selectedStock.movementType}
              </span>
              <select
                style={{
                  border: "1px solid #e6e6e6",
                  backgroundColor: "#ffffff",
                  padding: "8px",
                  borderRadius: "4px",
                }}
              >
                <option value="">Reached</option>
                <option value="">In Transit</option>
              </select>
            </div>

            {/* Reference No & Date */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              <span>
                Reference No.: <strong>{selectedStock.reference}</strong>
              </span>
              <span>Date: {new Date().toLocaleDateString()}</span>
            </div>

            {/* Customer and Warehouse */}
            <div
              style={{
                marginTop: "10px",
                border: "1px solid #e6e6e6",
                borderRadius: "16px",
                padding: "16px",
                backgroundColor: "#fff",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "40px",
                }}
              >
                <div>
                  <span>Customer</span>
                  <br />
                  <span>{selectedStock.source.split("-")[1] || "N/A"}</span>
                </div>
                <div>
                  <span>From Warehouse</span>
                  <br />
                  <span>WH-001</span>
                </div>
              </div>

              {/* Product Table */}
              <div style={{ marginBottom: "30px" }}>
                <span style={{ fontSize: "16px", color: "#262626" }}>
                  Products
                </span>
                <div
                  style={{
                    border: "1px solid #e6e6e6",
                    borderRadius: "8px",
                    marginTop: "10px",
                    overflowX: "auto",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr
                        style={{
                          backgroundColor: "#f5f5f5",
                          color: "#444",
                          textAlign: "left",
                        }}
                      >
                        <th style={{ padding: "10px" }}>
                          <input type="checkbox" />
                        </th>
                        <th style={{ padding: "10px" }}>Product</th>
                        <th style={{ padding: "10px" }}>SKU</th>
                        <th style={{ padding: "10px" }}>Quantity</th>
                        <th style={{ padding: "10px" }}>Unit Price</th>
                        <th style={{ padding: "10px" }}>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #e6e6e6" }}>
                        <td style={{ padding: "10px" }}>
                          <input type="checkbox" />
                        </td>
                        <td style={{ padding: "10px" }}>
                          {selectedStock.product}
                        </td>
                        <td style={{ padding: "10px" }}>
                          SKU{selectedStock.id}
                        </td>
                        <td style={{ padding: "10px" }}>
                          {selectedStock.qty.replace("Pieces", "").trim()}
                        </td>
                        <td style={{ padding: "10px" }}>₹5000.00</td>
                        <td style={{ padding: "10px" }}>
                          ₹
                          {parseInt(
                            selectedStock.qty.replace("Pieces", "").trim()
                          ) * 5000}
                          .00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Subtotal Section */}
              <div style={{ paddingTop: "10px", marginBottom: "20px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "14px",
                  }}
                >
                  <tbody>
                    <tr style={{}}>
                      <td style={{ padding: "10px", textAlign: "right" }}>
                        Subtotal
                      </td>
                      <td style={{ padding: "10px", textAlign: "right" }}>
                        ₹{subtotal.toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{}}>
                      <td style={{ padding: "10px", textAlign: "right" }}>
                        CGST ({cgst}%)
                      </td>
                      <td style={{ padding: "10px", textAlign: "right" }}>
                        ₹{((subtotal * cgst) / 100).toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e6e6e6" }}>
                      <td style={{ padding: "10px", textAlign: "right" }}>
                        SGST ({sgst}%)
                      </td>
                      <td style={{ padding: "10px", textAlign: "right" }}>
                        ₹{((subtotal * sgst) / 100).toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e6e6e6" }}>
                      <td style={{ padding: "10px", textAlign: "right" }}>
                        Shipping Charges
                      </td>
                      <td style={{ padding: "10px", textAlign: "right" }}>
                        ₹{shippingCharges.toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #e6e6e6" }}>
                      <td
                        style={{
                          padding: "10px",
                          textAlign: "right",
                          fontWeight: "bold",
                        }}
                      >
                        Total Price
                      </td>
                      <td
                        style={{
                          padding: "10px",
                          textAlign: "right",
                          fontWeight: "bold",
                        }}
                      >
                        ₹{totalPrice.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Other Info */}
              <div
                style={{
                  border: "1px solid #e6e6e6",
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  gap: "16px",
                  marginTop: "10px",
                  padding: "16px",
                }}
              >
                <span style={{ fontSize: "16px", color: "#262626" }}>
                  Other Info
                </span>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <span>Payments Method</span>
                    <br />
                    <input
                      type="text"
                      placeholder="Net Banking"
                      style={{
                        border: "1px solid #c2c2c2",
                        padding: "10px 16px",
                        color: "#000000", // Fixed text color for visibility
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div>
                    <span>Courier Partner</span>
                    <br />
                    <input
                      type="text"
                      placeholder="Shiprocket"
                      style={{
                        border: "1px solid #c2c2c2",
                        padding: "10px 16px",
                        color: "#000000", // Fixed text color
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div>
                    <span>Arrival Time</span>
                    <br />
                    <input
                      type="text"
                      placeholder="2:45 PM"
                      style={{
                        border: "1px solid #c2c2c2",
                        padding: "10px 16px",
                        color: "#000000", // Fixed text color
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closePopup}
              style={{
                marginTop: "15px",
                padding: "8px 16px",
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                float: "right",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StockInOutHistory;