import "./AddSupplier.css";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";

function AddSupplier() {
  const [showMessage, setShowMessage] = useState(false);

  const handleSave = () => {
    setShowMessage(false);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    console.log("Saved successfully");
  };

  return (
    <div>
      {/* ✅ Success Message Popup */}
      {showMessage && (
        <div
          style={{
            marginTop: "16px",
            width: "98%",
            border: "1px solid #007B42",
            backgroundColor: "#BAFFDF",
            borderRadius: "4px",
            padding: "3px 5px",
          }}
        >
          <span>🎉 Great! You have successfully created a category.</span>
        </div>
      )}
    
      <div>
        {/* header navigation */}
        <div className="add-supplier-header">
          <div className="breadcrumb">
            <span className="grey-text">Supplier</span>
            <IoIosArrowForward className="arrow-icon" />
            <span className="black-text">Add Supplier</span>
          </div>
        </div>

        {/* Basic Details Div */}
        <div className="form-data">
          <div className="details">
            <span>Basic Details</span>
            <div className="supplier-bussiness">
              {/* Supplier */}
              <div className="Supplier">
                <span style={{ color: "#262626" }}>Supplier</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="supplier-input"
                />
              </div>

              {/* Business Type */}
              <div className="Businesstype">
                <span style={{ color: "#262626" }}>Business Type</span>
                <br />
                <select
                  className="supplier-select"
                  style={{ color: "#676767" }}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="" disabled>Select type</option>
                  <option value="manufacturer" >Manufacturer</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Wholesaler">Wholesaler</option>
                </select>
              </div>
            </div>

            {/* Supplier Code */}
            <div className="code">
              <span>Supplier Code </span>
              <br />
              <div className="input-btn">
                <input type="text" style={{ border: "none", backgroundColor:'#fbfbfb' }} />
                <button
                  style={{
                    color: "white",
                    backgroundColor: "#077aff",
                    padding: "8px 10px",
                    border: "none",
                    borderRadius: "6px",
                  }}
                >
                  Auto generate
                </button>
              </div>
            </div>

            {/* GSTIN */}
            <div className="gst">
              <span>GSTIN</span>
              <br />
              <input type="text" placeholder="None" className="gst-input" />
            </div>
          </div>

          {/*  Contact information   */}

          <div className="Contact">
            <span> Contact Information </span>
            <div className="contact-person-name">
              <span> Contact Person Name </span>
              <br />
              <input
                type="text"
                placeholder="Enter Name"
                className="contact-input"
              />
            </div>

            {/* phone & Email Address */}
            <div className="phone-email">
              <div className="phone-field">
                <span>Phone Number</span>
                <br />
                <input
                  type="number"
                  placeholder="Enter No."
                  className="number-int"
                />
              </div>

              <div className="email-field">
                <span>Email Address</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="email-input"
                />
              </div>
            </div>
          </div>

          {/* Business Address */}

          <div className="bussiness-address">
            <span>Business Address </span>
            <div className="address-line">
              <span>Address line 1</span>
              <br />
              <textarea
                name=""
                id=""
                placeholder="Type here"
                style={{
                  width: "100%",
                  height: "109px",
                  borderRadius: "8px",
                  color: "#fbfbfb",
                  borderColor: "#c2c2c2",
                  padding: "",
                }}
              ></textarea>
            </div>

            {/* State, City & Pincode */}
            <div className="state-city-pincode">
              <div className="state">
                <span>State</span>
                <br />
                <select className="input-common" defaultValue="">
                  <option value="" disabled>
                    Select State
                  </option>
                  <option value="Karnataka">Bokaro</option>
                  <option value="Karnataka">Chatra</option>
                  <option value="Karnataka">Deogar</option>
                  <option value="Bihar">Dhanbad</option>
                  <option value="Delhi">Dumka</option>
                  <option value="Maharashtra">East Singhbhum</option>
                  <option value="Karnataka">Garhwa</option>
                  <option value="Karnataka">Gridih</option>
                  <option value="Karnataka">Godda</option>
                  <option value="Karnataka">Gumla</option>
                  <option value="Karnataka">Hazaribagh</option>
                  <option value="Karnataka">Jamtara</option>
                  <option value="Karnataka">Kunti</option>
                  <option value="Karnataka">Latehar</option>
                  <option value="Karnataka">Lohardaga</option>
                  <option value="Karnataka">Pakur</option>
                  <option value="Karnataka">Palamu</option>
                  <option value="Karnataka">ramgarh</option>
                  <option value="Karnataka">Ranchi</option>
                  <option value="Karnataka">Sahebganj</option>
                  <option value="Karnataka">Seraikela Kharsawan</option>
                  <option value="Karnataka">Simdega</option>
                  <option value="Karnataka">West Singhbhum</option>
                </select>
              </div>

              <div className="state">
                <span>State</span>
                <br />
                <select className="input-common" defaultValue="" >
                  <option value="" disabled>
                    Select State
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                </select>
              </div>

              <div className="pincode">
                <span>Pincode</span>
                <br />
                <input
                  type="number"
                  placeholder="Enter Pincode"
                  className="input-common"
                />
              </div>
            </div>
          </div>

          {/* Banking Details */}
          <div
            className="banking-details"
            style={{
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            <span style={{fontSize: "16px"}}>
              Banking Details
            </span>

            <div className="bank-name" style={{ marginTop: "15px" }}>
              <span>Bank Name</span>
              <br />
              <select className="input-common" defaultValue="">
                <option value="" disabled>
                  Select Bank
                </option>
                <option value="SBI">Axis Bank</option>
                <option value="HDFC">Bandan Bank</option>
                <option value="ICICI">Bank of Baroda</option>
                <option value="PNB">Bank of Maharashtra</option>
                <option value="Axis">Canara Bank</option>
                <option value="BOB">Central Bank of India </option>
                <option value="SBI">City Union Bank </option>
                <option value="SBI">Fedral Bank</option>
                <option value="SBI">HDFC Bank</option>
                <option value="SBI">ICICI Bank</option>
                <option value="SBI">Indusland Bank</option>
                <option value="SBI">Indian Overseas Bank</option>
                <option value="SBI">Indian Bank</option>
                <option value="SBI">IDFC FIRST Bank</option>
                <option value="SBI">IDBI Bank</option>
                <option value="SBI">Kolkata Mahindra Bank</option>
                <option value="SBI">State Bank Of India</option>
                <option value="SBI">YES Bank</option>
              </select>
            </div>

            <div
              className="account-ifsc-branch"
              style={{ display: "flex", gap: "20px", marginTop: "15px" }}
            >
              <div className="account-number" style={{ flex: 1, backgroundColor: "#fbfbfb" }}>
                <span>Account Number</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Account Number"
                  className="input-common"
                />
              </div>

              <div className="ifsc-code" style={{ flex: 1, backgroundColor: "#fbfbfb" }}>
                <span>IFSC Code</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter IFSC"
                  className="input-common"
                />
              </div>

              <div className="branch" style={{ flex: 1, backgroundColor: "#fbfbfb" }}>
                <span>Branch</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Branch"
                  className="input-common"
                />
              </div>
            </div>
          </div>

          {/* Save & Draft button */}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            {/* Draft Button */}
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#ffffff",
                border: "1px solid #d9d9d9",
                borderRadius: "6px",
                color: "#262626",
                cursor: "pointer",
              }}
            >
              Draft
            </button>

            {/* Save Button */}
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#077aff",
                border: "none",
                borderRadius: "6px",
                color: "#ffffff",
                fontWeight: "500",
                cursor: "pointer",
              }}
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSupplier;
