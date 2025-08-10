import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import RadioActive from "../images/Radioactive.png";
import CircleLogo from "../images/Circlelogo.png";

function WarehouseDetails() {
  return (
    <div>
      {/* Header */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center", // Removed duplicate and kept one instance
            gap: "10px",
          }}
        >
          <h2
            style={{
              color: "#676767",
              fontSize: "18px",
              fontWeight: "500",
              margin: 0, // Added to prevent default margin interference
              display: "flex",
              alignItems: "center", // Ensure h2 content aligns with icons
              gap: "10px", // Moved gap here to work with flex
            }}
          >
            Warehouse <MdArrowForwardIos /> All Warehouse
          </h2>
          <span
            style={{
              fontSize: "18px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MdArrowForwardIos style={{ color: "#676767" }} /> WH-001
          </span>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#1368EC",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Assign Product
          </button>
        </div>
      </div>

      {/* value, low Stock, Out of Stock */}

      <div className="three-box">
        {/*total spent */}
        <div className="radio-active">
          <div>
            <img src={RadioActive} alt="money" />
          </div>
          <div className="bag-content">
            <span style={{ color: "#676767", marginTop: "50px" }}>
              Total Stock Value
            </span>
            <br />
            <span style={{ textAlign: "left" }}>
              <b>₹12,75,987</b>
            </span>
          </div>
        </div>

        {/* order
        <div className="radio-active">
          <div>
            <img src={CircleLogo} alt="money" />
          </div>
          <div className="bag-content">
            <span style={{ color: "#676767", marginTop: "50px" }}>Order</span>
            <br />
            <span style={{ textAlign: "left" }}>
              <b>₹5,987</b>
            </span>
          </div>
        </div> */}

        {/* Initial Purchase Date */}
        <div className="radio-active">
          <div>
            <img src={CircleLogo} alt="money" />
          </div>
          <div className="bag-content">
            <span style={{ color: "#676767", marginTop: "50px" }}>low Stock</span>
            <br />
            <span style={{ textAlign: "left" }}>
              <b>₹12</b>
            </span>
          </div>
        </div>

        {/*Dues Amount */}
        <div
          className=""
          style={{
            display: "flex",
            gap: "16px",
            flex: "1",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <img src={RadioActive} alt="money" />
          </div>

          <div className="bag-content">
            <span
              style={{
                color: "#676767",
                marginTop: "50px",
                border: "none",
              }}
            >
              Out Of Stock
            </span>
            <br />
            <span style={{ textAlign: "left" }}>
              <b>18</b>
            </span>
          </div>
        </div>
      </div>

      {/* basic detials of warehous */}

      <div style={{marginTop: '15px', backgroundColor:'#fff', borderRadius:'8px', padding:'10px 16px'}}>
        <div style={{gap: '10px', marginBottom:'20px'}}>
            <span>Warehouse Name</span>
            <br />
            <span>Wh-001</span>
        </div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>
                <span>Owner</span>
                <br />
                <span>Ajay Kumar</span>
            </div>

             <div>
                <span>Owner</span>
                <br />
                <span>Ajay Kumar</span>
            </div>

             <div>
                <span>Owner</span>
                <br />
                <span>Ajay Kumar</span>
            </div>

             <div>
                <span>Owner</span>
                <br />
                <span>Ajay Kumar</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetails;
