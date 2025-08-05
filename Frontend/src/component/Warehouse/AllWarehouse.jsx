import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { PiWarehouseFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function AllWarehouse() {
  return (
    <div>
      {/* Warehouse header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItem: "center",
        }}
      >
        <div
          style={{
            color: "#676767",
            display: "flex",
            gap: "16px",
            fontWeight: "500",
          }}
        >
          <span>Warehouse</span>
          <span>
            <MdArrowForwardIos style={{ color: "#b0afafff" }} />
          </span>
          <span>All Warehouse </span>
        </div>
        {/* Add Warehouse */}
        <div
          style={{
            padding: "8px",
            border: "1px #1450AE",
            color: "#ffffff",
            background: "#1368EC",
            borderRadius: "4px",
          }}
        >
          <span>Add Warehouse</span>
        </div>
      </div>

      {/* Recently Accessed */}
      <div style={{ fontWeight: "500", fontSize: "16px", color: "#262626" }}>
        <span>Recently Accessed</span>
      </div>

      {/* Cards */}

      <div style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col">
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                height: "150px", // Set a fixed or min height
                position: "relative", // for absolute positioning inside
              }}
            >
              {/* WH-006 and Heart - Left Side */}
              <div style={{display: 'flex', justifyContent:'space-between'}}>
                <div style={{ marginBottom: "10px",  }}>
                  <span>
                    <PiWarehouseFill /> WH-006
                  </span>
                </div>
                <div
                  style={{
                    padding: "10px",
                    backgroundColor: "#f1f1f1",
                    borderRadius: "8px",
                    width: "fit-content",
                  }}
                >
                  <FaHeart
                    style={{
                      color: "#1368EC",
                      fontWeight: "500",
                      fontSize: "26px",
                      alignItems: 'flex-end'
                    }}
                  />
                </div>
              </div>

              {/* Bottom Section (Address + Arrow) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  right: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                {/* Address */}
                <div>
                  <p style={{ margin: "0", fontWeight: "500" }}>
                    Noida - Suraj Kumar
                  </p>
                  <span>$76,986 </span>
                  <span style={{ marginLeft: "4px" }}>Stock Valuation</span>
                </div>

                {/* Arrow */}
                <div>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>

          {/* Other Columns (empty for now) */}
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default AllWarehouse;
