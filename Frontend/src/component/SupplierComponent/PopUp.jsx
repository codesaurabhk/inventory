import React from "react";
import "./PopUp.css";

const PopUp = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Header Buttons */}
        <div className="popup-top-bar">
          <button className="status-btn stock-in">Stock In</button>
          <select className="status-select">
            <option>Reached</option>
            <option>In Transit</option>
          </select>
        </div>

        {/* Reference and Date */}
        <div className="popup-header">
          <span>
            Reference No. :- <strong>{data.referenceNo}</strong>
          </span>
          <span>Date :- {data.date}</span>
        </div>

        {/* Supplier and Destination */}
        <div
          style={{
            border: "1px solid #e6e6e6",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "",
          }}
        >
          <div className="popup-section">
            <div>
              <strong>Supplier</strong>
              <br />
              {data.supplier}
            </div>
            <div>
              <strong>Destination</strong>
              <br />
              {data.destination}
            </div>
          </div>

          <span>Products</span>

          {/* Product Table */}
          <div className="popup-table-container">
            <table className="popup-table">
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid #e6e6e6",
                    backgroundColor: "#c2c2c2",
                  }}
                >
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Products</th>
                  <th>SKU</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {data.products.map((product, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #e6e6e6" }}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.sku}</td>
                    <td>{product.quantity}</td>
                    <td>₹ {product.unitPrice.toLocaleString()}</td>
                    <td style={{ borderBottom: "1px solid #e6e6e6" }}>
                      ₹ {product.totalPrice.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Summary */}
            <div className="popup-summary-table">
              <table>
                <tbody>
                  <tr className="border-top-row">
                    <td>Subtotal</td>
                    <td>₹ {data.subtotal.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>CGST ({data.cgst}%)</td>
                    <td>
                      ₹ {(data.subtotal * (data.cgst / 100)).toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td>SGST ({data.sgst}%)</td>
                    <td>
                      ₹ {(data.subtotal * (data.sgst / 100)).toLocaleString()}
                    </td>
                  </tr>
                  <tr className="border-top-row">
                    <td
                      style={{
                        borderBottom: "1px solid #e6e6e6",
                        borderTop: "1px solid #e6e6e6",
                      }}
                    >
                      Shipping Charges
                    </td>
                    <td>₹ {data.shippingCharges.toLocaleString()}</td>
                  </tr>
                  <tr className="summary-total-row border-top-row">
                    <td>
                      <strong>Total Price</strong>
                    </td>
                    <td>
                      <strong>
                        ₹{" "}
                        {(
                          data.subtotal +
                          data.subtotal * (data.cgst / 100) +
                          data.subtotal * (data.sgst / 100) +
                          data.shippingCharges
                        ).toLocaleString()}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Other Info */}

        <div className="popup-other-info">
          <div className="other-info-heading">
            <span>Other Info</span>
          </div>
          <div className="popup-footer-row">
            <div className="popup-footer">
              <strong>Payments Method</strong>
              <div className="info-box">{data.paymentMethod}</div>
            </div>

            <div className="popup-footer">
              <strong>Courier Partner</strong>
              <div className="info-box">{data.courierPartner}</div>
            </div>

            <div className="popup-footer">
              <strong>Arrival Time</strong>
              <div className="info-box">{data.arrivalTime}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
