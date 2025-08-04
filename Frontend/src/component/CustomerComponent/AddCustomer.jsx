import React, { useState } from "react";
import "./AddCustomer.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function AddCustomer() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSave = () => {
    setFormSubmitted(true);
  };

  return (
    <>
      <div className="add-customer-container">
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <span className="add-breadcrumb-grey">Customer</span>
          <span className="add-breadcrumb-arrow">
            <IoIosArrowForward />
          </span>
          <span className="add-breadcrumb-dark">Add Customer</span>
        </div>

        {/* Basic Details */}

        <div className="add-business-basic">
          {/*  Inline Success Message */}
          {formSubmitted && (
            <div
              style={{
                marginTop: "16px",
                marginBottom: "20px",
                width: "100%",
                border: "1px solid #007B42",
                backgroundColor: "#BAFFDF",
                borderRadius: "8px",
                padding: "10px 16px",
                fontSize: "14px",
                fontWeight: "500",
                maxWidth: "500px",
                marginInline: "auto",
              }}
            >
              🎉 Great! You have successfully created a customer.
            </div>
          )}
          <div className="add-form-wrapper">
            {/* basic Details */}
            <div className="add-form-card">
              <h3>Basic Details</h3>
              <div className="add-form-group">
                <label>Customer</label>
                <input type="text" placeholder="Enter Name" />
              </div>
              <div className="add-form-row">
                <div className="add-form-group">
                  <label>Phone Number</label>
                  <input type="text" placeholder="Enter No." />
                </div>
                <div className="add-form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter Email" />
                </div>
              </div>
            </div>

            <div className="add-form-card">
              <h3>Business Address</h3>
              <div className="add-form-group">
                <label>Address Line 1</label>
                <textarea placeholder="Type here" rows={3}></textarea>
              </div>

              {/* State, City & Pincode */}
              <div className="add-form-row">
                {/* State */}
                <div className="add-form-group">
                  <label>State</label>
                  <select style={{ color: "#676767" }}>
                    <option style={{ color: "#676767" }}>Select State</option>
                  </select>
                </div>

                {/* City */}
                <div className="add-form-group">
                  <label>City</label>
                  <select style={{ color: "#676767" }}>
                    <option style={{ color: "#676767" }}>Select City</option>
                  </select>
                </div>

                {/* pincode */}
                <div className="add-form-group">
                  <label>Pin Code</label>
                  <input
                    type="text"
                    placeholder="Enter Here"
                    className="add-custom-input"
                    style={{ color: "#676767" }}
                  />
                </div>
              </div>
              {/* Button row just below pincode, right aligned */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  gap: "24px",
                  marginTop: "24px",
                }}
              >
                {!formSubmitted ? (
                  <>
                    <button className="add-draft-btn">Draft</button>
                    <button className="add-save-btn" onClick={handleSave}>
                      Save
                    </button>
                  </>
                ) : (
                  <Link to="/AllCustomer" className="add-done-btn">
                    Done
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCustomer;
