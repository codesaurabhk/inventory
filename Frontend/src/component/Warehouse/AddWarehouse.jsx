import React from "react";
import Popup from "reactjs-popup";
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { useState } from "react";

function AddWarehouse() {
  // State for popup inputs
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");
  const [width, setWidth] = useState("");
  const [zones, setZones] = useState("0"); // Initial 0 for blank popup preview
  // State for main layout (updated only on import)
  const [mainRows, setMainRows] = useState(4);
  const [mainColumns, setMainColumns] = useState(3);
  const [mainWidth, setMainWidth] = useState(50);
  const [mainZones, setMainZones] = useState(1);

  // Handler for importing layout
  const handleImport = () => {
    setMainRows(rows === "" ? 4 : Math.max(1, parseInt(rows)));
    setMainColumns(columns === "" ? 3 : Math.max(1, parseInt(columns)));
    setMainWidth(width === "" ? 50 : Math.max(20, parseInt(width)));
    setMainZones(zones === "" ? 1 : Math.max(1, parseInt(zones)));
  };

  // Component for rendering a single grid
  const renderGrid = (gridRows, gridColumns, gridWidth, zoneIndex) => {
    // Calculate the total width of the grid based on columns and cell width
    const cellWidth = gridWidth || 50;
    const totalGridWidth = (gridColumns || 3) * (cellWidth + 8) - 8 + 32; // Account for gap (8px) and padding (16px left + 16px right)

    return (
      <div key={zoneIndex} style={{ marginBottom: "20px", width: `${totalGridWidth}px`, margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "#BBE1FF",
            padding: "16px",
            textAlign: "center",
            fontWeight: "500",
            fontSize: "16px",
            borderRadius: "4px",
            marginBottom: "10px",
            width: "100%", // Ensure header takes full width of parent
            boxSizing: "border-box",
          }}
        >
          Zone {zoneIndex + 1}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridColumns || 3}, 1fr)`,
            gap: "8px",
            borderRadius: "8px",
            padding: "10px 16px",
            width: "100%", // Ensure grid container takes full width of parent
            boxSizing: "border-box",
          }}
        >
          {Array.from({ length: (gridRows || 4) * (gridColumns || 3) }).map((_, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#D1E4FF",
                width: `${cellWidth}px`,
                height: `${cellWidth}px`, // Height equals width for square cells
                border: "1px solid #B3C9E6",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#4A5A6B",
                fontSize: "12px",
              }}
            >
              {/* No numbering in grid cells */}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#F9FAFB",
        minHeight: "100vh",
      }}
    >
      {/* Breadcrumb Navigation */}
      <div
        style={{
          color: "#6B7280",
          display: "flex",
          gap: "12px",
          fontWeight: "500",
          marginBottom: "20px",
        }}
      >
        <span>Warehouse</span>
        <span>
          <MdArrowForwardIos style={{ color: "#9CA3AF" }} />
        </span>
        <span style={{ color: "#1F2937" }}>Add Warehouse</span>
      </div>

      {/* Warehouse Details Form */}
      <div
        style={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              color: "#1F2937",
              fontWeight: "500",
              fontSize: "18px",
              marginBottom: "8px",
              display: "block",
            }}
          >
            Warehouse Name
          </label>
          <select
            name="selectCustomer"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #D1D5DB",
              backgroundColor: "#F9FAFB",
              color: "#6B7280",
              fontSize: "14px",
            }}
          >
            <option value="disable">Select Customer</option>
          </select>
        </div>

        <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <label
              style={{
                color: "#1F2937",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "8px",
                display: "block",
              }}
            >
              Warehouse Code
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #D1D5DB",
                backgroundColor: "#F9FAFB",
                color: "#6B7280",
                fontSize: "14px",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label
              style={{
                color: "#1F2937",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "8px",
                display: "block",
              }}
            >
              Warehouse Owner
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #D1D5DB",
                backgroundColor: "#F9FAFB",
                color: "#6B7280",
                fontSize: "14px",
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              color: "#1F2937",
              fontWeight: "500",
              fontSize: "18px",
              marginBottom: "8px",
              display: "block",
            }}
          >
            Address
          </label>
          <textarea
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #D1D5DB",
              backgroundColor: "#F9FAFB",
              color: "#6B7280",
              fontSize: "14px",
              minHeight: "100px",
              resize: "vertical",
            }}
          ></textarea>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          {["Country", "State", "City", "Pin Code"].map((label) => (
            <div key={label} style={{ flex: 1 }}>
              <label
                style={{
                  color: "#1F2937",
                  fontWeight: "500",
                  fontSize: "18px",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                {label}
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #D1D5DB",
                  backgroundColor: "#F9FAFB",
                  color: "#6B7280",
                  fontSize: "14px",
                }}
              ></select>
            </div>
          ))}
        </div>
      </div>

      {/* Layout Section */}
      <div
        style={{
          margin: "30px auto",
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#FFFFFF",
          border: "2px dotted #B3C9E6",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {Array.from({ length: mainZones }).map((_, zoneIndex) =>
              renderGrid(mainRows, mainColumns, mainWidth, zoneIndex)
            )}
          </div>
          
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              color: "#6B7280",
              fontSize: "14px",
            }}
          >
            Click to define and assign racks using rows and columns.
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Popup
              trigger={
                <button
                  style={{
                    backgroundColor: "#3B82F6",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px 24px",
                    fontWeight: "500",
                    fontSize: "16px",
                    cursor: "pointer",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#2563EB")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#3B82F6")}
                >
                  Customize Layout
                </button>
              }
              modal
              nested
              contentStyle={{
                background: "transparent",
                border: "none",
                padding: "0",
                borderRadius: "12px",
                width: "900px",
                maxWidth: "90vw",
              }}
            >
              {(close) => (
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "#3B82F6",
                      padding: "16px 24px",
                      color: "#FFFFFF",
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    <span>Layout Creator</span>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={close}
                    >
                      <IoMdClose />
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      padding: "24px",
                      gap: "24px",
                    }}
                  >
                    {/* Left Side: Input Fields */}
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          gap: "16px",
                          alignItems: "center",
                          marginBottom: "24px",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "#D1E4FF",
                            borderRadius: "50%",
                            padding: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <LuLayoutDashboard />
                        </span>
                        <label
                          style={{
                            color: "#1F2937",
                            fontWeight: "500",
                            fontSize: "16px",
                          }}
                        >
                          No. of Zones
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={zones}
                          onChange={(e) =>
                            setZones(e.target.value === "" ? "" : Math.max(0, parseInt(e.target.value)))
                          }
                          style={{
                            width: "120px",
                            padding: "12px",
                            borderRadius: "8px",
                            border: "1px solid #D1D5DB",
                            backgroundColor: "#F9FAFB",
                            color: "#6B7280",
                            fontSize: "14px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "16px",
                          marginBottom: "24px",
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <label
                            style={{
                              color: "#1F2937",
                              fontWeight: "500",
                              fontSize: "16px",
                              marginBottom: "8px",
                              display: "block",
                            }}
                          >
                            Row
                          </label>
                          <input
                            type="number"
                            min="0"
                            value={rows}
                            onChange={(e) =>
                              setRows(e.target.value === "" ? "" : Math.max(0, parseInt(e.target.value)))
                            }
                            style={{
                              width: "100%",
                              padding: "12px",
                              borderRadius: "8px",
                              border: "1px solid #D1D5DB",
                              backgroundColor: "#F9FAFB",
                              color: "#6B7280",
                              fontSize: "14px",
                            }}
                          />
                        </div>
                        <div style={{ flex: 1 }}>
                          <label
                            style={{
                              color: "#1F2937",
                              fontWeight: "500",
                              fontSize: "16px",
                              marginBottom: "8px",
                              display: "block",
                            }}
                          >
                            Column
                          </label>
                          <input
                            type="number"
                            min="0"
                            value={columns}
                            onChange={(e) =>
                              setColumns(e.target.value === "" ? "" : Math.max(0, parseInt(e.target.value)))
                            }
                            style={{
                              width: "100%",
                              padding: "12px",
                              borderRadius: "8px",
                              border: "1px solid #D1D5DB",
                              backgroundColor: "#F9FAFB",
                              color: "#6B7280",
                              fontSize: "14px",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "16px",
                          marginBottom: "24px",
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <label
                            style={{
                              color: "#1F2937",
                              fontWeight: "500",
                              fontSize: "16px",
                              marginBottom: "8px",
                              display: "block",
                            }}
                          >
                            Size (px)
                          </label>
                          <input
                            type="number"
                            min="0"
                            value={width}
                            onChange={(e) =>
                              setWidth(e.target.value === "" ? "" : Math.max(0, parseInt(e.target.value)))
                            }
                            style={{
                              width: "100%",
                              padding: "12px",
                              borderRadius: "8px",
                              border: "1px solid #D1D5DB",
                              backgroundColor: "#F9FAFB",
                              color: "#6B7280",
                              fontSize: "14px",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <button
                          type="button"
                          onClick={handleImport}
                          style={{
                            backgroundColor: "#3B82F6",
                            color: "#FFFFFF",
                            border: "none",
                            borderRadius: "8px",
                            padding: "12px 24px",
                            fontWeight: "500",
                            fontSize: "16px",
                            cursor: "pointer",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            transition: "background-color 0.3s",
                          }}
                          onMouseOver={(e) => (e.target.style.backgroundColor = "#2563EB")}
                          onMouseOut={(e) => (e.target.style.backgroundColor = "#3B82F6")}
                        >
                          Import
                        </button>
                      </div>
                    </div>

                    {/* Right Side: Preview Layout */}
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "#1F2937",
                          fontWeight: "500",
                          fontSize: "16px",
                          marginBottom: "16px",
                        }}
                      >
                        Layout Preview
                      </span>
                      {parseInt(zones) > 0 && rows !== "" && columns !== "" ? (
                        Array.from({ length: parseInt(zones) }).map((_, zoneIndex) =>
                          renderGrid(
                            parseInt(rows),
                            parseInt(columns),
                            width === "" ? 50 : parseInt(width),
                            zoneIndex
                          )
                        )
                      ) : (
                        <div
                          style={{
                            color: "#6B7280",
                            fontSize: "14px",
                            textAlign: "center",
                          }}
                        >
                          Please enter the number of zones, rows, and columns to preview the layout.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddWarehouse;