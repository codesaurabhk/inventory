import React, { useState, useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import RadioActive from "../images/Radioactive.png";
import CircleLogo from "../images/Circlelogo.png";
import DonutChart from "react-donut-chart";
// import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { FaArrowRight } from "react-icons/fa";
import { PiWarehouseBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";

// import { style } from './../../../node_modules/@mui/system/esm/Stack/createStack';

function WarehouseDetails() {
  const [bgColor, setBgColor] = useState("");

  const chartData = [
    {
      label: "Cement",
      value: 30,
    },
    {
      label: "pipe",
      value: 25,
    },
    {
      label: "Iron Rod",
      value: 21,
    },
    {
      label: "Sand",
      value: 5,
    },
    {
      label: "Other",
      value: 3,
    },
  ];

  const xLabels = [
    "Jan 2025",
    "Feb 2025",
    "Mar 2025",
    "Apr 2025",
    "May 2025",
    "Jun 2025",
    "Jul 2025",
  ];

  const sellingProducts = [
    {
      id: 1,
      product: "Ajay Srivastava",
      sku: "SKU-00123",
      mrp: 10987,
      available: 36,
      unit: "1,44,560.00",
      revenue: "₹2,98400.00",
    },
    {
      id: 2,
      product: "Ajay Srivastava",
      sku: "SKU-00123",
      mrp: 10987,
      available: 36,
      unit: "1,44,560.00",
      revenue: "₹2,98400.00",
    },
    {
      id: 3,
      product: "Ajay Srivastava",
      sku: "SKU-00123",
      mrp: 10987,
      available: 36,
      unit: "1,44,560.00",
      revenue: "₹2,98400.00",
    },
    {
      id: 4,
      product: "Ajay Srivastava",
      SKU: "SKU-00123",
      sku: 10987,
      available: 36,
      unit: "1,44,560.00",
      revenue: "₹2,98400.00",
    },
    {
      id: 5,
      product: "Ajay Srivastava",
      SKU: "SKU-00123",
      mrp: 10987,
      available: 36,
      unit: "1,44,560.00",
      revenue: "₹2,98400.00",
    },
  ];

  const dummyData = [
    {
      product: "Plywood Sheet",
      time: "2025-08-11 09:45 AM",
      qty: 25,
      movementType: "Stock IN",
      sourceDest: "Supplier: ABC Plywood Co.",
      reference: "PO-2345",
    },
    {
      product: "Cement Bag (50kg)",
      time: "2025-08-11 10:15 AM",
      qty: 100,
      movementType: " Stock OUT",
      sourceDest: "Project Site A",
      reference: "Invoice-5678",
    },
    {
      product: "Iron Rod (12mm)",
      time: "2025-08-10 04:20 PM",
      qty: 50,
      movementType: " Stock IN",
      sourceDest: "Steel Works Pvt Ltd",
      reference: "PO-2398",
    },
    {
      product: "Water Heater 15L",
      time: "2025-08-09 02:30 PM",
      qty: 8,
      movementType: " Stock OUT",
      sourceDest: "Retail Customer",
      reference: "Sales-INV-9912",
    },
    {
      product: "Sunmica Sheet",
      time: "2025-08-08 11:00 AM",
      qty: 40,
      movementType: "Stock IN",
      sourceDest: "Decor Supplies Ltd",
      reference: "PO-2410",
    },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }} >
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


        {/* Initial Purchase Date */}
        <div className="radio-active">
          <div>
            <img src={CircleLogo} alt="money" />
          </div>
          <div className="bag-content">
            <span style={{ color: "#676767", marginTop: "50px" }}>
              low Stock
            </span>
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

      <div
        style={{
          marginTop: "15px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "10px 16px",
        }}
      >
        <div style={{ gap: "10px", marginBottom: "20px" }}>
          <span>Warehouse Name</span>
          <br />
          <span>Wh-001</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <span
              style={{ color: "#262626", fontWeight: "400", fontSize: "16px" }}
            >
              Owner
            </span>
            <br />
            <span
              style={{ color: "#676767", fontWeight: "400", fontSize: "16px" }}
            >
              Ajay Kumar
            </span>
          </div>

          <div>
            <span
              style={{ color: "#262626", fontWeight: "400", fontSize: "16px" }}
            >
              Branch
            </span>
            <br />
            <span
              style={{ color: "#676767", fontWeight: "400", fontSize: "16px" }}
            >
              Pune
            </span>
          </div>

          <div>
            <span
              style={{ color: "#262626", fontWeight: "400", fontSize: "16px" }}
            >
              Contact No.{" "}
            </span>
            <br />
            <span
              style={{ color: "#676767", fontWeight: "400", fontSize: "16px" }}
            >
              Ajay Kumar
            </span>
          </div>

          <div>
            <span
              style={{ color: "#262626", fontWeight: "400", fontSize: "16px" }}
            >
              Total Available Item
            </span>
            <br />
            <span
              style={{ color: "#676767", fontWeight: "400", fontSize: "16px" }}
            >
              86,477{" "}
            </span>
          </div>
        </div>
      </div>

      {/* Dougnut chart & chart js */}
      <div style={{ display: "flex", gap: "24px" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "16px",
            gap: "16px",
            marginTop: "20px",
            width: "291.76px",
            height: "519.76px",
          }}
        >
          <span
            style={{ color: "#262626", fontWeight: "500", fontSize: "16px" }}
          >
            Storage
          </span>
          <br />

          <div>
            <span
              style={{ color: "#262626", fontWeight: "400", fontSize: "16px" }}
            >
              Stroage Capacity
            </span>
            <br />
            <span
              style={{ color: "#1368ec", fontWeight: "400", fontSize: "16px" }}
            >
              30% Left
            </span>
          </div>

          {/* Donut Chart */}
          <DonutChart
            data={chartData}
            colors={["#B8D2F9", "#4286F0", "#A1C3F7", "#B8D2F9", "#D0E1FB"]}
            width={220}
            height={250}
            legend={false} // hide built-in legend
            formatValues={(val) => `${val}%`}
            strokeColor="#fff" // remove border
            strokeWidth={4}
            style={{
              margin: "20px auto 0", // center chart
              display: "block",
            }}
          />

          {/* Legend under chart */}
          <div
            style={{
              justifyContent: "center",
              gap: "12px",
              marginTop: "12px",
            }}
          >
            {chartData.map((item, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: [
                      "#B8D2F9",
                      "#4286F0",
                      "#A1C3F7",
                      "#B8D2F9",
                      "#D0E1FB",
                    ][index],
                    borderRadius: "2px",
                  }}
                />
                <span style={{ fontSize: "14px", color: "#262626" }}>
                  {item.label} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Line Chart */}
        <div style={{ width: "100%" }}>
          
          <Box
            sx={{
              width: "auto",
              height: "520px",
              borderRadius: "8px",
              padding: "24px",
              gap: "8px",
              backgroundColor: "#fff",
              marginTop: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            {/* Header */}
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              Sales Activity
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#1976d2",
                mb: 2,
              }}
            >
              ₹ 76,986.00
            </Typography>

            {/* Chart */}
            <LineChart
              xAxis={[
                {
                  scaleType: "point",
                  data: xLabels,
                  axisLine: false,
                  tickSize: 0,
                },
              ]}
              yAxis={[
                {
                  axisLine: { display: false },
                  tickSize: 0,
                  min: 0,
                  max: 20000,
                  tickValues: [0, 5000, 10000, 15000, 20000],
                  gridLine: { style: { stroke: "#e0e0e0" } }, // light horizontal grid
                },
              ]}
              series={[
                {
                  id: "sold",
                  label: "Sold Items",
                  data: [3000, 5000, 15000, 7000, 10000, 16000, 9000],
                  color: "#90caf9",
                  curve: "catmullRom",
                  showMark: false,
                  lineStyle: {
                    strokeDasharray: "6 6",
                    strokeWidth: 2,
                  },
                },
                {
                  id: "purchased",
                  label: "Purchase Items",
                  data: [5000, 7000, 4000, 13000, 15000, 8000, 6000],
                  color: "#1976d2",
                  curve: "catmullRom",
                  showMark: false,
                  lineStyle: {
                    strokeWidth: 2,
                  },
                },
              ]}
              height={300}
              legend={{
                position: { vertical: "top", horizontal: "right" },
              }}
              grid={{ vertical: false }} // hides vertical lines
            />
          </Box>
        </div>
      </div>

      {/* Table */}

      <div
        style={{
          backgroundColor: "#fff",
          marginTop: "20px",
          borderRadius: "8px",
          gap: "8px",
        }}
      >
        <div
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid #e6e6e6",
            font: "robot",
            fontWeight: "500",
            fontSize: "18px",
            color: "#262626",
          }}
        >
          <span>Top Selling Products</span>
        </div>

        <div style={{ padding: "8px 24px", gap: "18px" }}>
          <span
            style={{
              font: "Robot",
              fontWeight: "400",
              fontSize: "16px",
              color: "#262626",
              padding: "8px",
            }}
          >
            All
          </span>
          <span
            style={{
              font: "Robot",
              fontWeight: "400",
              fontSize: "16px",
              color: "#262626",
              padding: "8px",
            }}
          >
            Stock In
          </span>
          <span
            style={{
              font: "Robot",
              fontWeight: "400",
              fontSize: "16px",
              color: "#262626",
              padding: "8px",
            }}
          >
            Stock Out
          </span>
          <span
            style={{
              font: "Robot",
              fontWeight: "400",
              fontSize: "16px",
              color: "#262626",
              padding: "8px",
            }}
          >
            Transfer
          </span>
          <span
            style={{
              font: "Robot",
              fontWeight: "400",
              fontSize: "16px",
              color: "#262626",
              padding: "8px",
            }}
          >
            Processing
          </span>
        </div>

        {/* Table */}
        <div>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#fff",
              padding: "16px 24px",
            }}
          >
            <thead style={{ backgroundColor: "#f1f1f1" }}>
              <tr
                style={{
                  color: "#676767",
                  fontFamily: "roboto",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                <th style={{ padding: "12px 24px" }}>
                  <input type="checkbox" />
                </th>
                <th style={{ padding: "12px 24px" }}>Product</th>
                <th style={{ padding: "12px 24px" }}>SKU</th>
                <th style={{ padding: "12px 24px" }}>MRP</th>
                <th style={{ padding: "12px 24px" }}>Available QTY</th>
                <th style={{ padding: "12px 24px" }}>Unit Sold</th>
                <th style={{ padding: "12px 24px" }}>Revenue</th>
              </tr>
            </thead>

            <tbody>
              {sellingProducts.map((wholeseller, i) => (
                <tr
                  key={wholeseller.id}
                  onClick={() => handleCustomerClick(wholeseller)}
                  style={{ cursor: "pointer" }}
                >
                  <td
                    style={{
                      padding: "12px 24px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    <input type="checkbox" />
                  </td>
                  <td
                    style={{
                      padding: "12px 24px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    <div className="customer-info">
                      <img
                        src="https://via.placeholder.com/32"
                        alt="avatar"
                        className="avatar"
                      />
                      {wholeseller.product}
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "12px 24px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    {wholeseller.sku}
                  </td>
                  <td
                    style={{
                      padding: "12px 24px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    {wholeseller.mrp}
                  </td>
                  <td
                    style={{
                      padding: "12px 24px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    {wholeseller.available}
                  </td>
                  <td
                    style={{
                      padding: "12px 24px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    {wholeseller.unit}
                  </td>
                  <td
                    style={{
                      padding: "12px 24px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    {wholeseller.revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Godown */}
      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 0px 8px 3px #0000001A",
          padding: "16px",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Godown</span>
          <span
            style={{
              color: "#1368EC",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              cursor: "pointer",
            }}
          >
            <Link to="/Godown" style={{ textDecoration: "none", color: "#1368EC" }}>
              View All <FaArrowRight />
            </Link>
          </span>
        </div>

        {/* Content */}
        <div
          style={{
            border: "1px solid #e6e6e6",
            backgroundColor: "#FBFBFB",
            borderRadius: "8px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* Zone */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span
              style={{
                color: "#262626",
                fontWeight: "400",
                fontSize: "14px",
                borderRadius: "8px",
                border: "1px solid #e6e6e6",
                padding: "8px",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <PiWarehouseBold style={{ color: "#1368EC" }} /> Zone 01
            </span>
            <span>
              <FaArrowRight />
            </span>
          </div>

          {/* Used */}
          <span style={{ color: "#1368EC", fontWeight: "500" }}>86% Used</span>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <span style={tagStyle}>Construction Material</span>
            <span style={tagStyle}>Plywood Material</span>
            <span style={tagStyle}>Paint</span>
            <span style={tagStyle}>Adhesive</span>
            <span style={tagStyle}>Cements</span>
            <span style={tagStyle}>Iron Rods</span>
            <span style={tagStyle}>Water Heater</span>
            <span style={tagStyle}>Plywood</span>
            <span style={tagStyle}>Sunmica</span>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            border: "1px solid #e6e6e6",
            backgroundColor: "#FBFBFB",
            borderRadius: "8px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {/* Zone */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span
              style={{
                color: "#262626",
                fontWeight: "400",
                fontSize: "14px",
                borderRadius: "8px",
                border: "1px solid #e6e6e6",
                padding: "8px",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <PiWarehouseBold style={{ color: "#1368EC" }} /> Zone 01
            </span>
            <span>
              <FaArrowRight />
            </span>
          </div>

          {/* Used */}
          <span style={{ color: "#1368EC", fontWeight: "500" }}>86% Used</span>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <span style={tagStyle}>Construction Material</span>
            <span style={tagStyle}>Plywood Material</span>
            <span style={tagStyle}>Paint</span>
            <span style={tagStyle}>Adhesive</span>
            <span style={tagStyle}>Cements</span>
            <span style={tagStyle}>Iron Rods</span>
            <span style={tagStyle}>Water Heater</span>
            <span style={tagStyle}>Plywood</span>
            <span style={tagStyle}>Sunmica</span>
          </div>
        </div>

        {/* </div> */}
      </div>

      {/* Stock Movement History */}

      <div
        style={{
          backgroundColor: "#fff",
          marginTop: "20px",
          borderRadius: "8px",
          gap: "8px",
        }}
      >
        <div
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid #e6e6e6",
            fontWeight: "500",
            fontSize: "18px",
            color: "#262626",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "robot",
            }}
          >
            <span>Stock Movement history</span>
            <div
              style={{
                borderRadius: "4px",
                border: "1px solid #e6e6e6",
                backgroundColor: "#ffffff",
                padding: "8px",
                gap: "8px",
              }}
            >
              <select
                name=""
                id=""
                style={{
                  border: "none",
                  fontWeight: "400",
                  color: "#676767",
                  fontSize: "16px",
                }}
              >
                <option value="Warehouse">Select Warehouse</option>
              </select>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "8px 24px",
            gap: "18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                font: "Robot",
                fontWeight: "400",
                fontSize: "16px",
                color: "#262626",
                padding: "8px",
              }}
            >
              All
            </span>
            <span
              style={{
                font: "Robot",
                fontWeight: "400",
                fontSize: "16px",
                color: "#262626",
                padding: "8px",
              }}
            >
              Stock In
            </span>
            <span
              style={{
                font: "Robot",
                fontWeight: "400",
                fontSize: "16px",
                color: "#262626",
                padding: "8px",
              }}
            >
              Stock Out
            </span>
            <span
              style={{
                font: "Robot",
                fontWeight: "400",
                fontSize: "16px",
                color: "#262626",
                padding: "8px",
              }}
            >
              Transfer
            </span>
            <span
              style={{
                font: "Robot",
                fontWeight: "400",
                fontSize: "16px",
                color: "#262626",
                padding: "8px",
              }}
            >
              Processing
            </span>
          </div>

          {/* three icon */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                border: "1px solid #f1f1f1",
                padding: "6px",
                borderRadius: "4px",
                gap: "4px",
                color: "#676767",
              }}
            >
              <CiSearch style={{ fontSize: "20px" }} />
              <IoFilter style={{ fontSize: "20px" }} />
            </div>
            <div
              style={{
                color: "#676767",
                border: "1px solid #f1f1f1",
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              <LuArrowUpDown />
            </div>
          </div>
        </div>

        {/* Table */}
        <div>
          <table
            
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#fff",
            }}
          >
            <thead style={{ backgroundColor: "#f1f1f1" }}>
              <tr
                style={{
                  color: "#676767",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                <th style={{ padding: "12px 24px", textAlign: "left" }}>
                  <input type="checkbox" />
                </th>
                <th style={{ padding: "12px 24px", textAlign: "left" }}>
                  Product
                </th>
                <th style={{ padding: "12px 24px", textAlign: "left" }}>
                  Time
                </th>
                <th style={{ padding: "12px 24px", textAlign: "left" }}>QTY</th>
                <th style={{ padding: "12px 24px", textAlign: "left" }}>
                  Movement type
                </th>
                <th style={{ padding: "12px 24px", textAlign: "left" }}>
                  Source/Destination
                </th>
                <th style={{ padding: "12px 24px", textAlign: "left" }}>
                  Reference/Note
                </th>
              </tr>
            </thead>

            <tbody>
              {dummyData.map((item, index) => (
                <tr key={index} style={{ cursor: "pointer" }}>
                  <td
                    style={{
                      padding: "12px 24px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    <input type="checkbox" />
                  </td>
                  <td
                    style={{
                      padding: "12px 24px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    {item.product}
                  </td>
                  <td
                    style={{
                      padding: "12px 24px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    {item.time}
                  </td>
                  <td
                    style={{
                      padding: "12px 24px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    {item.qty}
                  </td>
                  <td
                    style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                  >
                    {(() => {
                      const type = item.movementType.trim().toLowerCase(); // normalize

                      if (type === "stock in") {
                        return (
                          <span
                            style={{
                              padding: "4px 12px",
                              borderRadius: "20px",
                              fontSize: "13px",
                              fontWeight: "500",
                              backgroundColor: "#DFFFE0", // green shade
                            }}
                          >
                            {item.movementType}
                          </span>
                        );
                      }

                      if (type === "stock out") {
                        return (
                          <span
                            style={{
                              padding: "4px 12px",
                              borderRadius: "20px",
                              fontSize: "13px",
                              fontWeight: "500",
                              backgroundColor: "#FCE4E6", // red shade
                            }}
                          >
                            {item.movementType}
                          </span>
                        );
                      }

                      // fallback (no color)
                      return <span>{item.movementType}</span>;
                    })()}
                  </td>

                  <td
                    style={{
                      padding: "12px 24px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    {item.sourceDest}
                  </td>
                  <td
                    style={{
                      padding: "12px 24px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    {item.reference}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const tagStyle = {
  fontWeight: "400",
  fontSize: "14px",
  color: "#262626",
  padding: "4px 8px",
  border: "1px solid #e6e6e6",
  backgroundColor: "#f1f1f1",
  borderRadius: "8px",
};

export default WarehouseDetails;
