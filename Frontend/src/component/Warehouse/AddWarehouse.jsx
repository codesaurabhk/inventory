import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function AddWarehouse() {
  // State for popup inputs
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");
  const [width, setWidth] = useState("");
  const [zones, setZones] = useState("0"); // Initial 0 for blank popup preview
  // State for main layout (updated only on import)
  const [mainRows, setMainRows] = useState(4);
  const [mainColumns, setMainColumns] = useState(3);
  const [mainWidth, setMainWidth] = useState(1); // Width in meters
  const [mainZones, setMainZones] = useState(1);
  // State for warehouse details form
  const [warehouseName, setWarehouseName] = useState("");
  const [warehouseCode, setWarehouseCode] = useState("");
  const [warehouseOwner, setWarehouseOwner] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  // State for import status and message
  const [isImported, setIsImported] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  // Navigation hook
  const navigate = useNavigate();

  // Handler for importing layout and closing popup
  const handleImport = (close) => {
    // Validate inputs to ensure rows and columns are at least 1
    const parsedRows = rows === "" ? 4 : Math.max(1, parseInt(rows));
    const parsedColumns = columns === "" ? 3 : Math.max(1, parseInt(columns));
    const parsedWidth = width === "" ? 1 : Math.max(1, parseInt(width));
    const parsedZones = zones === "" ? 1 : Math.max(1, parseInt(zones));

    // Update main layout states
    setMainRows(parsedRows);
    setMainColumns(parsedColumns);
    setMainWidth(parsedWidth);
    setMainZones(parsedZones);

    // Reset popup inputs
    setRows("");
    setColumns("");
    setWidth("");
    setZones("0");

    // Set import status and show success message
    setIsImported(true);
    setShowMessage(true);

    close(); // Close the popup after updating state
  };

  // Handler for Draft button
  const handleDraft = () => {
    const warehouseData = {
      warehouseName,
      warehouseCode,
      warehouseOwner,
      address,
      country,
      state,
      city,
      pinCode,
      layout: {
        rows: mainRows,
        columns: mainColumns,
        width: mainWidth,
        zones: mainZones,
      },
    };
    console.log("Draft saved:", warehouseData);
    // TODO: Replace with API call or state persistence logic
  };

  // Handler for Save button
  const handleSave = () => {
    const warehouseData = {
      warehouseName,
      warehouseCode,
      warehouseOwner,
      address,
      country,
      state,
      city,
      pinCode,
      layout: {
        rows: mainRows,
        columns: mainColumns,
        width: mainWidth,
        zones: mainZones,
      },
    };
    console.log("Final save:", warehouseData);
    // TODO: Replace with API call or state persistence logic
  };

  // Handler for Done button
  const handleDone = () => {
    // Reset all states to initial values
    setWarehouseName("");
    setWarehouseCode("");
    setWarehouseOwner("");
    setAddress("");
    setCountry("");
    setState("");
    setCity("");
    setPinCode("");
    setMainRows(4);
    setMainColumns(3);
    setMainWidth(1);
    setMainZones(1);
    setIsImported(false);
    setShowMessage(false);
    // Navigate to AllWarehouse page
    navigate("/AllWarehouse"); // Adjust route as needed
  };

  // Effect to auto-hide the success message after 3 seconds
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  // Component for rendering a single grid
  const renderGrid = (gridRows, gridColumns, gridWidth, zoneIndex) => {
    const cellWidthPx = 50; // Equal width for all cells
    const totalGridContentWidth = (gridColumns || 3) * (cellWidthPx + 8) - 8;

    return (
      <div
        key={zoneIndex}
        style={{
          marginTop: "5px",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            backgroundColor: "#BBE1FF",
            padding: "16px",
            textAlign: "center",
            fontWeight: "500",
            fontSize: "16px",
            borderRadius: "6px",
            marginBottom: "10px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          Zone {zoneIndex + 1}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            boxSizing: "border-box",
            marginTop: "15px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${gridColumns || 3}, ${cellWidthPx}px)`,
              gridTemplateRows: `repeat(${gridRows || 4}, ${cellWidthPx}px)`,
              gap: "8px",
              width: `${totalGridContentWidth}px`,
              borderRadius: "8px",
            }}
          >
            {Array.from({ length: (gridRows || 4) * (gridColumns || 3) }).map(
              (_, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#D1E4FF",
                    width: `${cellWidthPx}px`,
                    height: `${cellWidthPx}px`,
                    border: "1px solid #B3C9E6",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#4A5A6B",
                    fontSize: "12px",
                  }}
                >
                  {/* No numbering in grid cells */}
                </div>
              )
            )}
          </div>
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
      {/* Success Message */}
      {showMessage && (
        <div
          style={{
            backgroundColor: "#10B981",
            color: "#FFFFFF",
            padding: "12px 24px",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          Warehouse layout imported successfully!
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <div
        style={{
          color: "#6B7280",
          display: "flex",
          gap: "12px",
          fontWeight: "500",
          fontSize: "14px",
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
            value={warehouseName}
            onChange={(e) => setWarehouseName(e.target.value)}
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
            <option value="">Select Customer</option>
            <option value="Customer1">Customer 1</option>
            <option value="Customer2">Customer 2</option>
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
              value={warehouseCode}
              onChange={(e) => setWarehouseCode(e.target.value)}
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
              value={warehouseOwner}
              onChange={(e) => setWarehouseOwner(e.target.value)}
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
              Country
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
            </select>
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
              State
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
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
              <option value="">Select State</option>
              <option value="California">California</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
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
              City
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
              <option value="">Select City</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Mumbai">Mumbai</option>
            </select>
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
              Pin Code
            </label>
            <select
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
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
              <option value="">Select Pin Code</option>
              <option value="90001">90001</option>
              <option value="400001">400001</option>
            </select>
          </div>
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
        <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {Array.from({ length: mainZones }).map((_, zoneIndex) =>
              renderGrid(mainRows, mainColumns, mainWidth, zoneIndex)
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              color: "#6B7280",
              fontSize: "14px",
              fontWeight: "400",
              marginBottom: "10px",
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
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#2563EB")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#3B82F6")
                  }
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
                          No. of Zones
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={zones}
                          onChange={(e) =>
                            setZones(
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
                            min="1"
                            value={rows}
                            onChange={(e) =>
                              setRows(
                                e.target.value === ""
                                  ? ""
                                  : Math.max(1, parseInt(e.target.value))
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
                            min="1"
                            value={columns}
                            onChange={(e) =>
                              setColumns(
                                e.target.value === ""
                                  ? ""
                                  : Math.max(1, parseInt(e.target.value))
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
                            Width (mtr)
                          </label>
                          <input
                            type="number"
                            min="1"
                            value={width}
                            onChange={(e) =>
                              setWidth(
                                e.target.value === ""
                                  ? ""
                                  : Math.max(1, parseInt(e.target.value))
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
                          gap: "16px",
                        }}
                      >
                        <button
                          type="button"
                          onClick={close}
                          style={{
                            backgroundColor: "#6B7280",
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
                            (e.target.style.backgroundColor = "#4B5563")
                          }
                          onMouseOut={(e) =>
                            (e.target.style.backgroundColor = "#6B7280")
                          }
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => handleImport(close)}
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
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: "20px",
                            justifyContent: "center",
                            alignItems: "flex-start",
                          }}
                        >
                          {Array.from({ length: parseInt(zones) }).map(
                            (_, zoneIndex) =>
                              renderGrid(
                                parseInt(rows),
                                parseInt(columns),
                                width === "" ? 1 : parseInt(width),
                                zoneIndex
                              )
                          )}
                        </div>
                      ) : (
                        <div
                          style={{
                            color: "#6B7280",
                            fontSize: "14px",
                            textAlign: "center",
                          }}
                        >
                          Please enter the number of zones, rows, and columns to
                          preview the layout.
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

      {/* Draft, Save, or Done Button */}
      <div
        style={{
          margin: "30px auto",
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          justifyContent: "flex-end",
          gap: "16px",
        }}
      >
        {!isImported ? (
          <>
            <button
              type="button"
              onClick={handleDraft}
              style={{
                backgroundColor: "#6B7280",
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
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4B5563")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#6B7280")}
            >
              Draft
            </button>
            <button
              type="button"
              onClick={handleSave}
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
              Save
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={handleDone}
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
            Done
          </button>
        )}
      </div>
    </div>
  );
}

export default AddWarehouse;