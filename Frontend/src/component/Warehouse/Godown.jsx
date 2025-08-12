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
    "A1",
    "A2",
    "A3",
    "B1",
    "B2",
    "B3",
    "C1",
    "C2",
    "C3",
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
      <div style={{ overflowX: "auto", marginTop: "20px" }}>

      {/* Zone 04 Layout */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          backgroundColor: "#f8f9fa",
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

      {/* Zone 03 Layout (Rotated) */}
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        {/* Zone 03 */}
        <div
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
            padding: "10px",
            marginBottom: "30px",
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
              marginBottom: "15px",
              textAlign: "center",
              width: "100%",
            }}
          >
            Zone 03
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
              gridTemplateColumns: "repeat(3, 60px)", // 3x3 grid for 9 cells
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

        {/* Zone 2 Layout (Rotated, below Zone 3) */}
        <div
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
            padding: "10px",
            marginBottom: "30px",
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
              marginBottom: "15px",
              textAlign: "center",
              width: "100%",
            }}
          >
            Zone 02
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
              gridTemplateColumns: "repeat(3, 60px)",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {zone02GridLabels.map((label, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: zone02Highlights.includes(label)
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

        {/* Zone 1 Layout (Rotated, below Zone 2) */}
        <div
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
            padding: "10px",
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
              marginBottom: "15px",
              textAlign: "center",
              width: "100%",
            }}
          >
            Zone 01
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
              gridTemplateColumns: "repeat(3, 60px)",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {zone01GridLabels.map((label, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: zone01Highlights.includes(label)
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

        {/* table */}
        <div
          style={{
            marginLeft: "420px",
            marginTop: "10px",
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            padding: "20px",
            width: "110%",
            minWidth: "400px",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#E3F3FF" }}>
                <th
                  style={{
                    padding: "8px",
                    border: "1px solid #ccc",
                    textAlign: "left",
                  }}
                >
                  Product
                </th>
                <th
                  style={{
                    padding: "8px",
                    border: "1px solid #ccc",
                    textAlign: "left",
                  }}
                >
                  SKU
                </th>
                <th
                  style={{
                    padding: "8px",
                    border: "1px solid #ccc",
                    textAlign: "left",
                  }}
                >
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  Chair
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  SKU-CHAIR-001
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>20</td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  Table
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  SKU-TABLE-002
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>10</td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  Sofa
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  SKU-SOFA-003
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>5</td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  Lamp
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  SKU-LAMP-004
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>15</td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  Bookshelf
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  SKU-BOOK-005
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      </div>

    </div>
  );
}

export default Godown;
