import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { PiWarehouseFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function AllWarehouse() {
  return (
    <div>
      {/* Warehouse header */}
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
          <span>
            <MdArrowForwardIos style={{ color: "#b0afafff" }} />
          </span>
          <span>All Warehouse </span>
        </div>

        {/* Add Warehouse */}

       
         <Link to="/AddWarehouse">
            <button style={{border:'1px solid #1450AE', backgroundColor: "#1368EC", color:'white', padding:'8px', borderRadius: '4px'}}>
            Add Warehouse</button>
         </Link>
        
      </div>

      {/* Recently Accessed */}
      <div style={{ fontWeight: "500", fontSize: "16px", color: "#262626", marginTop:'20px' }}>
        <span>Recently Accessed</span>
      
      {/* Cards */}

      <div
        style={{
          fontWeight: "500",
          fontSize: "16px",
          color: "#262626",
          marginTop: "10px",
          paddingBottom: "4px",
        }}
      >
        {/* Cards */}

        <div style={{ marginTop: "2px" }}>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  {/* Left: WH-006 */}
                  <div
                    style={{
                      backgroundColor: "#f1f1f1",
                      border: "1px solid #e6e6e6",
                      borderRadius: "8px",
                      padding: "10px ",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <PiWarehouseFill
                        style={{
                          color: "#1368EC",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />{" "}
                      Warehouse Delhi
                    </span>
                  </div>

                  {/* Right: Heart icon */}
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
                      Delhi - Ram Prashad
                    </p>
                    <span style={{ color: "#1368EC" }}>$76,986 </span>
                    <span style={{ marginLeft: "4px" }}>Stock Valuation</span>
                  </div>

                  {/* Arrow */}
                  <div>
                    <Link to="/WarehouseDetails">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Columns (2nd) */}
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  {/* Left: WH-001 */}
                  <div
                    style={{
                      backgroundColor: "#f1f1f1",
                      border: "1px solid #e6e6e6",
                      borderRadius: "8px",
                      padding: "10px ",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <PiWarehouseFill
                        style={{
                          color: "#1368EC",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />{" "}
                      WareHouse Ranchi
                    </span>
                  </div>

                  {/* Right: Heart icon */}
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
                      Ranchi - Abhay Kumar
                    </p>
                    <span style={{ color: "#1368EC" }}>$76,986 </span>
                    <span style={{ marginLeft: "4px" }}>Stock Valuation</span>
                  </div>

                  {/* Arrow */}
                  <div>
                    <Link to="/WarehouseDetails">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>

      </div>

      {/* favourite */}

      <div
        style={{
          fontWeight: "500",
          fontSize: "16px",
          color: "#262626",
          marginTop: "10px",
          paddingBottom: "4px",
        }}
      >
        <span>Favouite</span>

        {/* Cards */}

        <div style={{ marginTop: "2px" }}>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  {/* Left: WH-006 */}
                  <div
                    style={{
                      backgroundColor: "#f1f1f1",
                      border: "1px solid #e6e6e6",
                      borderRadius: "8px",
                      padding: "10px ",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <PiWarehouseFill
                        style={{
                          color: "#1368EC",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />{" "}
                      Warehouse Delhi
                    </span>
                  </div>

                  {/* Right: Heart icon */}
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
                      Delhi - Ram Prashad
                    </p>
                    <span style={{ color: "#1368EC" }}>$76,986 </span>
                    <span style={{ marginLeft: "4px" }}>Stock Valuation</span>
                  </div>

                  {/* Arrow */}
                  <div>
                    <Link to="/WarehouseDetails">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Columns (2nd) */}
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  {/* Left: WH-001 */}
                  <div
                    style={{
                      backgroundColor: "#f1f1f1",
                      border: "1px solid #e6e6e6",
                      borderRadius: "8px",
                      padding: "10px ",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <PiWarehouseFill
                        style={{
                          color: "#1368EC",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />{" "}
                      WareHouse Ranchi
                    </span>
                  </div>

                  {/* Right: Heart icon */}
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
                      Ranchi - Abhay Kumar
                    </p>
                    <span style={{ color: "#1368EC" }}>$76,986 </span>
                    <span style={{ marginLeft: "4px" }}>Stock Valuation</span>
                  </div>

                  {/* Arrow */}
                  <div>
                    <Link to="/WarehouseDetails">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>

      {/* Owened Warehouse */}

      <div
        style={{
          fontWeight: "500",
          fontSize: "16px",
          color: "#262626",
          marginTop: "10px",
          paddingBottom: "4px",
        }}
      >
        <span>Favouite</span>

        {/* Cards */}

        <div style={{ marginTop: "2px" }}>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  {/* Left: WH-006 */}
                  <div
                    style={{
                      backgroundColor: "#f1f1f1",
                      border: "1px solid #e6e6e6",
                      borderRadius: "8px",
                      padding: "10px ",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <PiWarehouseFill
                        style={{
                          color: "#1368EC",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />{" "}
                      WH-001
                    </span>
                  </div>

                  {/* Right: Heart icon */}
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
                    <span style={{ color: "#1368EC" }}>$76,986 </span>
                    <span style={{ marginLeft: "4px" }}>Stock Valuation</span>
                  </div>

                  {/* Arrow */}
                  <div>
                    <Link to="/WarehouseDetails">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Columns (2nd) */}
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  {/* Left: WH-001 */}
                  <div
                    style={{
                      backgroundColor: "#f1f1f1",
                      border: "1px solid #e6e6e6",
                      borderRadius: "8px",
                      padding: "10px ",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <PiWarehouseFill
                        style={{
                          color: "#1368EC",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />{" "}
                      WH - Noida
                    </span>
                  </div>

                  {/* Right: Heart icon */}
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
                    <span style={{ color: "#1368EC" }}>$76,986 </span>
                    <span style={{ marginLeft: "4px" }}>Stock Valuation</span>
                  </div>

                  {/* Arrow */}
                  <div>
                    <Link to="/WarehouseDetails">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Owned Warehouse */}

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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  {/* Left: WH-001 */}
                  <div
                    style={{
                      backgroundColor: "#f1f1f1",
                      border: "1px solid #e6e6e6",
                      borderRadius: "8px",
                      padding: "10px ",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <PiWarehouseFill
                        style={{
                          color: "#1368EC",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />{" "}
                      WH-001
                    </span>
                  </div>

                  {/* Right: Heart icon */}
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
                      Pune - Ajay Kumar
                    </p>
                    <span style={{ color: "#1368EC" }}>$76,986 </span>
                    <span style={{ marginLeft: "4px" }}>Stock Valuation</span>
                  </div>

                  {/* Arrow */}
                  <div>
                    <Link to="/WarehouseDetails">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    // marginBottom: "10px",
                  }}
                >
                  {/* Left: WH-001 */}
                  <div
                    style={{
                      backgroundColor: "#f1f1f1",
                      border: "1px solid #e6e6e6",
                      borderRadius: "8px",
                      padding: "10px ",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <PiWarehouseFill
                        style={{
                          color: "#1368EC",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />{" "}
                      WareHouse Meerut
                    </span>
                  </div>

                  {/* Right: Heart icon */}
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
                      Ranchi - Abhay Kumar
                    </p>
                    <span style={{ color: "#1368EC" }}>$76,986 </span>
                    <span style={{ marginLeft: "4px" }}>Stock Valuation</span>
                  </div>

                  {/* Arrow */}
                  <div>
                    <Link to="/WarehouseDetails">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third-Party warehouse */}

      <div
        style={{
          fontWeight: "500",
          fontSize: "16px",
          color: "#262626",
          marginTop: "10px",
          paddingBottom: "4px",
        }}
      >
        <span>Favouite</span>

        {/* Cards */}

        <div style={{ marginTop: "2px" }}>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  {/* Left: WH-006 */}
                  <div
                    style={{
                      backgroundColor: "#f1f1f1",
                      border: "1px solid #e6e6e6",
                      borderRadius: "8px",
                      padding: "10px ",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <PiWarehouseFill
                        style={{
                          color: "#1368EC",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />{" "}
                      Warehouse Delhi
                    </span>
                  </div>

                  {/* Right: Heart icon */}
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
                      Delhi - Ram Prashad
                    </p>
                    <span style={{ color: "#1368EC" }}>$76,986 </span>
                    <span style={{ marginLeft: "4px" }}>Stock Valuation</span>
                  </div>

                  {/* Arrow */}
                  <div>
                    <Link to="/WarehouseDetails">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Columns (2nd) */}
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  {/* Left: WH-001 */}
                  <div
                    style={{
                      backgroundColor: "#f1f1f1",
                      border: "1px solid #e6e6e6",
                      borderRadius: "8px",
                      padding: "10px ",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <PiWarehouseFill
                        style={{
                          color: "#1368EC",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />{" "}
                      WareHouse Ranchi
                    </span>
                  </div>

                  {/* Right: Heart icon */}
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
                      Ranchi - Abhay Kumar
                    </p>
                    <span style={{ color: "#1368EC" }}>$76,986 </span>
                    <span style={{ marginLeft: "4px" }}>Stock Valuation</span>
                  </div>

                  {/* Arrow */}
                  <div>
                    <Link to="/WarehouseDetails">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllWarehouse;