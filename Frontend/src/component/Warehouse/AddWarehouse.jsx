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
  const [zoneCount, setZoneCount] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  // State for main layout (fixed 3x4 grid with initial size)
  const [mainRows, setMainRows] = useState(3); // Fixed to 3 rows
  const [mainColumns, setMainColumns] = useState(4); // Fixed to 4 columns
  const [mainWidth, setMainWidth] = useState(50); // Initial width of 50px
  const [mainHeight, setMainHeight] = useState(50); // Initial height of 50px

  // Handler for importing layout
  const handleImport = () => {
    setMainRows(rows === "" ? 3 : Math.max(1, parseInt(rows))); // Default to 3
    setMainColumns(columns === "" ? 4 : Math.max(1, parseInt(columns))); // Default to 4
    setMainWidth(width === "" ? 50 : Math.max(20, parseInt(width))); // Default to 50px
    setMainHeight(height === "" ? 50 : Math.max(20, parseInt(height))); // Default to 50px
  };

  // Component for rendering only the grid (no top bar)
  const renderGrid = (gridRows, gridColumns, gridWidth, gridHeight) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridColumns || 4}, 1fr)`, // Default to 4 columns
        gap: "16px",
        width: "100%", // Ensure full width of container
      }}
    >
      {Array.from({ length: (gridRows || 3) * (gridColumns || 4) }).map(
        (_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#E3F3FF",
              width: `${gridWidth || 50}px`,
              height: `${gridHeight || 50}px`,
              aspectRatio: "1 / 1", // Ensure square cells
            }}
          ></div>
        )
      )}
    </div>
  );

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

      {/* Layout with single top bar and margin from top */}
      <div
        style={{
          margin: "40px auto 0", // 40px margin from top
          width: "900px", // Fixed width
          gap: "16px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "10px 16px",
        }}
      >
        {/* Basic Layout Design with single top bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            {" "}
            {/* Removed 60% to use full width */}
            {/* Single Top Bar */}
            <div
              style={{
                backgroundColor: "#BBE1FF",
                marginBottom: "10px",
                padding: "20px",
              }}
            ></div>
            {/* Grid Section */}
            {renderGrid(mainRows, mainColumns, mainWidth, mainHeight)}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <span
            style={{ color: "#676767", fontWeight: "400", fontSize: "14px" }}
          >
            Click to define and Assign racks using rows and Columns.
          </span>
        </div>

        {/* Popup trigger button */}
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
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#2563EB")
                }
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
                  <span style={{ cursor: "pointer" }} onClick={close}>
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
                        No. of Zones (Disabled)
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={zoneCount}
                        onChange={(e) =>
                          setZoneCount(
                            e.target.value === ""
                              ? ""
                              : Math.max(0, parseInt(e.target.value))
                          )
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
                            setRows(
                              e.target.value === ""
                                ? ""
                                : Math.max(0, parseInt(e.target.value))
                            )
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
                            setColumns(
                              e.target.value === ""
                                ? ""
                                : Math.max(0, parseInt(e.target.value))
                            )
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
                          Width (px)
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={width}
                          onChange={(e) =>
                            setWidth(
                              e.target.value === ""
                                ? ""
                                : Math.max(0, parseInt(e.target.value))
                            )
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
                          Height (px)
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={height}
                          onChange={(e) =>
                            setHeight(
                              e.target.value === ""
                                ? ""
                                : Math.max(0, parseInt(e.target.value))
                            )
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
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#2563EB")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#3B82F6")
                        }
                      >
                        Import
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default AddWarehouse;
