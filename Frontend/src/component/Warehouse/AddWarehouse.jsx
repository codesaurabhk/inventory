import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";

function AddWarehouse() {
    const [showPopup, setShowPopup] = useState(true);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }
//   const boxStyle = {
//     width: "50px",
//     height: "50px",
//     backgroundColor: "#E3F3FF",
//   };
  return (
    <div>
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
        <span style={{ color: "#262626" }}>Add Warehouse </span>
      </div>

      <div
        style={{
          margin: "0 auto",
          marginTop: "50px",
          width: "900px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "16px",
            gap: "24px",
          }}
        >
          <span
            style={{ color: "#262626", fontWeight: "400", fontSize: "18px" }}
          >
            Warehouse name
          </span>
          <br />
          <select
            name="select Customer"
            style={{
              width: "100%",
              color: "#676767",
              borderRadius: "8px",
              border: "2px solid #c2c2c2",
              padding: "10px 16px",
              backgroundColor: " #FBFBFB ",
            }}
          >
            <option value="disable">Select Customer</option>
          </select>

          {/* Warehouse code & Warehouse Owner */}
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: "16px",
              marginTop: "15px",
            }}
          >
            {/* Warehouse Code */}
            <div style={{ width: "50%" }}>
              <span
                style={{
                  color: "#262626",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                Warehouse Code
              </span>
              <br />
              <input
                type="text"
                style={{
                  width: "100%",
                  color: "#676767",
                  borderRadius: "8px",
                  border: "2px solid #c2c2c2",
                  padding: "10px 16px",
                  backgroundColor: " #FBFBFB ",
                }}
              />
            </div>

            {/* warehouse Owner */}
            <div style={{ width: "50%" }}>
              <span
                style={{
                  color: "#262626",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                Warehouse Owner
              </span>
              <br />
              <input
                type="text"
                style={{
                  width: "100%",
                  color: "#676767",
                  borderRadius: "8px",
                  border: "2px solid #c2c2c2",
                  padding: "10px 16px",
                  backgroundColor: " #FBFBFB ",
                }}
              />
            </div>
          </div>

          {/* Address */}

          <div style={{ marginTop: "16px" }}>
            <span
              style={{ color: "#262626", fontWeight: "400", fontSize: "18px" }}
            >
              Address
            </span>
            <br />
            <textarea
              name=""
              style={{
                width: "100%",
                color: "#676767",
                borderRadius: "8px",
                border: "2px solid #c2c2c2",
                padding: "10px 16px",
                backgroundColor: " #FBFBFB ",
              }}
            ></textarea>
          </div>

          {/* Country , State, City, Pin Code */}
          <div
            style={{
              marginTop: "16px",
              width: "100%",
              gap: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Country */}
            <div style={{ width: "25%" }}>
              <span
                style={{
                  color: "#262626",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                Country
              </span>
              <br />
              <select
                name=""
                style={{
                  width: "100%",
                  color: "#676767",
                  borderRadius: "8px",
                  border: "2px solid #c2c2c2",
                  padding: "10px 16px",
                  backgroundColor: " #FBFBFB",
                  width: "100%",
                }}
              ></select>
            </div>
            {/* State */}
            <div style={{ width: "25%" }}>
              <span
                style={{
                  color: "#262626",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                State
              </span>
              <br />
              <select
                name=""
                style={{
                  width: "100%",
                  color: "#676767",
                  borderRadius: "8px",
                  border: "2px solid #c2c2c2",
                  padding: "10px 16px",
                  backgroundColor: " #FBFBFB",
                  width: "100%",
                }}
              ></select>
            </div>
            {/* City */}
            <div style={{ width: "25%" }}>
              <span
                style={{
                  color: "#262626",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                City
              </span>
              <br />
              <select
                name=""
                style={{
                  width: "100%",
                  color: "#676767",
                  borderRadius: "8px",
                  border: "2px solid #c2c2c2",
                  padding: "10px 16px",
                  backgroundColor: " #FBFBFB",
                  width: "100%",
                }}
              ></select>
            </div>
            {/* pin Code */}
            <div style={{ width: "25%" }}>
              <span
                style={{
                  color: "#262626",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                Pin Code
              </span>
              <br />
              <select
                name=""
                style={{
                  width: "100%",
                  color: "#676767",
                  borderRadius: "8px",
                  border: "2px solid #c2c2c2",
                  padding: "10px 16px",
                  backgroundColor: " #FBFBFB",
                  width: "100%",
                }}
              ></select>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "0 auto",
          marginTop: "50px",
          width: "900px",
          gap: "16px",
          backgroundColor: "#ffffff",
          border: "2px dotted #80C7FF",
          borderRadius: "8px",
          marginTop: "10px",
          padding: "10px 16px",
        }}
      >
        {/* Layout */}
        <div
          style={{
            margin: "0 auto",
            marginTop: "50px",
            width: "500px",
            gap: "16px",
            backgroundColor: "#ffffff",
          }}
        >
          {/* basic Layout Design */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Shared Width Container */}
            <div style={{ width: "60%" }}>
              {/* Top Bar */}
              <div
                style={{
                  backgroundColor: "#BBE1FF",
                  padding: "10px",
                  marginBottom: "10px",
                  padding:'20px'
                }}
              >
                {/* You can add content here */}
              </div>

              {/* Grid Section */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)", // Responsive columns
                  gap: "16px",
                }}
              >
                {Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#E3F3FF",
                      aspectRatio: "1 / 1", // makes it a square
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: '20px' }}>
            <span
              style={{ color: "#676767", fontWeight: "400", fontSize: "14px" }}
            >
              Click to define and Assign racks using rows and Columns.
            </span>
          </div>

          {/* button for pop-up */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <button
            onClick={togglePopup}
              style={{
                color: "#ffffff",
                backgroundColor: "#1368EC",
                border: "1px solid #1368EC",
                borderRadius: "4px",
                padding: "10px 16px",
                gap: "8px",
              }}
            >
              Customize Layout
            </button>
          </div>
        </div>
      </div>

      {/* popup Component */}
      {showPopup && (
        <div>
            <h1>jitu</h1>
            <button onClick={togglePopup}>close</button>
        </div>
      )}
    </div>
  );
}

export default AddWarehouse;
