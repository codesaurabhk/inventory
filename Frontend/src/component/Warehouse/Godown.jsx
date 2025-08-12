// Grid labels for Zone 02 and Zone 01 (3x3 grid, 9 cells each)
const zone02GridLabels = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
const zone01GridLabels = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
// Highlights for Zone 2 and Zone 1 (dummy)
const zone02Highlights = ["A1", "B2", "C3"];
const zone01Highlights = ["B1", "C2", "A3"];
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { RiArrowUpDownLine } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";

function Godown() {
  // Grid labels for Zone 04 (5x8 grid, 40 cells)
  const zone04GridLabels = [
    "A1",
    "B1",
    "C1",
    "D1",
    "E1",
    "F1",
    "G1",
    "H1",
    "A2",
    "B2",
    "C2",
    "D2",
    "E2",
    "F2",
    "G2",
    "H2",
    "A3",
    "B3",
    "C3",
    "D3",
    "E3",
    "F3",
    "G3",
    "H3",
    "A4",
    "B4",
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "H4",
    "A5",
    "B5",
    "C5",
    "D5",
    "E5",
    "F5",
    "G5",
    "H5",
  ];

  // Grid labels for Zone 03 (3x3 grid, 9 cells)
  const zone03GridLabels = [
    "C1",
    "C2",
    "C3",
    "B1",
    "B2",
    "B3",
    "A1",
    "A2",
    "A3",
  ];

  // Highlighted cells for each zone
  const zone04Highlights = [
    "D1",
    "E1",
    "F1",
    "H1",
    "D2",
    "E2",
    "F2",
    "G2",
    "C3",
    "D3",
    "B4",
    "E4",
    "F4",
    "B5",
    "H5",
  ];
  const zone03Highlights = ["A1", "A2", "B2", "B3", "C3"];

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
          <MdArrowForwardIos style={{ color: "#b0afafff" }} />
          <span>All Warehouse</span>
          <MdArrowForwardIos style={{ color: "#b0afafff" }} />
          <span>Wh-001</span>
          <MdArrowForwardIos style={{ color: "#b0afafff" }} />
          <span
            style={{
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "18px",
              color: "#262626",
            }}
          >
            Godown
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: "9px",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            backgroundColor: "#fff",
            width: "90%",
            gap: "19px",
            justifyContent: "space-between",
            padding: "4px 16px",
          }}
        >
          <div
            style={{
              padding: "4px 16px",
              display: "flex",
              alignItems: "center",
              gap: "9px",
            }}
          >
            <FaSearch />
            <input
              type="search"
              placeholder="Search Items"
              style={{ border: "none", outline: "none" }}
            />
          </div>
          <div
            style={{
              padding: "4px",
              border: "1px solid #f1f1f1",
              borderRadius: "4px",
            }}
          >
            <RiArrowUpDownLine />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "8px 16px",
            border: "1px solid #e6e6e6",
            borderRadius: "8px",
          }}
        >
          <select name="zone" style={{ border: "none", outline: "none" }}>
            <option
              value=""
              style={{
                padding: "4px 16px",
                color: "#676767",
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              All Zones
            </option>
            {[
              "Zone 1",
              "Zone 2",
              "Zone 3",
              "Zone 4",
              "Zone 5",
              "Zone 6",
              "Zone 7",
            ].map((zone, idx) => (
              <option key={idx} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid Display for Zones */}
      <div
        style={{ overflowX: "auto", marginTop: "20px", marginBottom: "20px" }}
      >
        {/* Zone 04 Layout */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div>
            <div
              style={{
                backgroundColor: "#3f99E1",
                color: "#fff",
                padding: "10px 15px",
                borderRadius: "8px",
                position: "relative",
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "15px",
                textAlign: "center",
              }}
            >
              Zone 04
              <FaArrowRight
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(8, 60px)",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              {zone04GridLabels.map((label, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: zone04Highlights.includes(label)
                      ? "#E3F3FF"
                      : "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    height: "40px",
                    width: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "500",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* grid Layout-table-grid layout */}
      <div style={{ marginTop: "30px" }}>
        {/*01-02-03 layout*/}
        <div
          style={{
            overflowX: "auto",
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            padding: "20px",
          }}
        >
          {/* Zone 03 Label and Grid */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                backgroundColor: "#3f99E1",
                color: "#fff",
                padding: "10px 15px",
                borderRadius: "8px",
                position: "relative",
                fontSize: "18px",
                fontWeight: "bold",
                marginRight: "15px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60px",
                height: "200px", // Adjusted height to match the vertical label in the image
                transform: "rotate(0deg)", // Rotate label to match vertical orientation
                transformOrigin: "top left",
              }}
            >
              <span style={{ transform: "rotate(-90deg)",}}>Zone 03</span>
              <FaArrowUp
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "10px",
                  transform: "translateX(-50%) rotate(0deg)", // Adjust arrow to point up
                }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 60px)",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              {zone03GridLabels.map((label, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: zone03Highlights.includes(label)
                      ? "#E3F3FF"
                      : "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    height: "60px",
                    width: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "500",
                     transform: "rotate(-90deg)",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          {/* table */}
         <div>
           <div>
            table
          </div> 
         </div>
         {/* 05 */}
         <div>
          05 layout
         </div>
        </div>

        {/* 02 */}
        <div>02</div>
        {/* 03 */}
        <div>03</div>
      </div>
    </div>
  );
}

export default Godown;
