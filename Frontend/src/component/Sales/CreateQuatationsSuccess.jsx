
import React from "react";
import "./CreateQuatationsSuccess.css";
import { IoIosArrowForward } from "react-icons/io";
import { GiPartyPopper } from "react-icons/gi";
import { Link } from "react-router-dom";

const CreateQuatationsSuccess = () => {
  return (
    <div className="ac-containerss">
      <div className="ac-path">
        <span className="gray-color"><Link to="/Invoices" className="gray-color" style={{textDecoration:'none'}}>Quotations</Link></span>
        <span className="arrow-icon">
          <IoIosArrowForward />
        </span>
        <span className="ac-name">Create Quotations</span>
      </div>
      <div
        style={{
        margin: "auto auto 25px",
          width: "40%",
          minWidth: "750px",
          border: "1px solid #007B42",
          backgroundColor: "#BAFFDF",
          borderRadius: "4px",
          padding: "7px 8px",
        
        }}
      >
        <span>🎉 You have successfully created a Quotation.</span>
      </div>

      <div
        style={{
          background: "#F1F1F1",
          maxWidth: "579px",
          margin: "auto",
          padding: "30px",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="invoice-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
              width: "100%",
            }}
          >
            <div style={{ width: "70%", marginTop: "22px" }}>
              <hr />
            </div>
            <div className="invoice-header">QUOTATION</div>
          </div>

          <div className="sections ">
            <div>
              <div>
                <span className="label">INVOICE NO: 01234</span> 
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                
                <span>DATE: 11.02.2025</span>
                <span>DUE DATE: 11.03.2025</span>
              </div>
            </div>
          </div>

          <div className="sections">
            <div className="label">ISSUED FROM:</div>
            <div>Your Company Name</div>
            <div>123 Anywhere St., Any City</div>
            <div>Email - companyxyz@gmail.com, Phone - +91-XXXXXXXXXX</div>
            <div>GSTIN - 27XXXXXXXXX125</div>
          </div>

          <div className="section">
            <div className="label">ISSUED TO:</div>
            <div>Client Name</div>
            <div>456 Client Street, Commercial Zone, City, PIN - 111111</div>
            <div>Email - companyxyz@gmail.com, Phone - +91-XXXXXXXXXX</div>
          </div>

          <table className="invoice-table">
            <thead style={{ borderBottom: "2px solid #abababff" }}>
              <tr>
                <th>DESCRIPTION</th>
                <th>UNIT PRICE</th>
                <th>QTY</th>
                <th style={{ textAlign: "right" }}>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wheel Chair</td>
                <td>₹5000</td>
                <td>1</td>
                <td style={{ textAlign: "right" }}>₹5000</td>
              </tr>
              <tr>
                <td>Luxury Bag</td>
                <td>₹735</td>
                <td>2</td>
                <td style={{ textAlign: "right" }}>₹1470</td>
              </tr>
              <tr>
                <td>Gaming Mouse</td>
                <td>₹690</td>
                <td>1</td>
                <td style={{ textAlign: "right" }}>₹690</td>
              </tr>
            </tbody>
          </table>

          <div
            style={{ borderTop: "2px solid #abababff", paddingTop: "15px" }}
            className="total-section"
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <strong>SUBTOTAL</strong>
              </div>
              <div>
                {" "}
                <strong>₹7160</strong>{" "}
              </div>
            </div>
            <div className="row-between">
              <div>Tax </div>
              <div>+18%</div>
            </div>
            <div className="row-between">
              <div>Shipping Charges</div>
              <div>₹200</div>
            </div>
            <div
              className="row-between"
              style={{
                borderTop: "2px solid #abababff",
                marginTop: "7px",
                paddingTop: "8px",
              }}
            >
              <div>
                <strong>₹8648.8</strong>
              </div>
            </div>
            <div className="row-between" style={{ marginTop: "25px" }}>
              <div>Discount </div>
              <div>-10%</div>
            </div>
            <div
              className="row-between grand-total"
              style={{ borderTop: "2px solid #abababff", paddingTop: "5px" }}
            >
              <div>TOTAL</div>
              <div>₹7,783.92</div>
            </div>
          </div>

          <div className="payment-info">
            <div className="label">ADDITIONAL DETAILS:</div>
            <div>- Validity: This Quotation is valid for 15 days.</div>
            <div>- Delivery time: Within 5-7 business days after conformatation.</div>
            <div>- Payment Terms: 50% advance, balance upon delivery.</div>
            <div>- Mode of Delivery: Courier / Direct Dispatch</div>
            <div>- Warranty: 1-year service warranty on applicable items</div>
          </div>

          <div className="invoice-footer">
            This is a computer-generated quotation and does not require a physical
            signature.
          </div>
        </div>
        <div className="action-buttons">
          <button>Email</button>
          <button>Downlaod PDF</button>
          <button style={{ background: "black", color: "white" }}>Print</button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuatationsSuccess;
