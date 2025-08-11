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
// import { style } from './../../../node_modules/@mui/system/esm/Stack/createStack';

function WarehouseDetails() {
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
          {/* <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
            series={[
              {
                data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                showMark: ({ index }) => index % 2 === 0,
              },
              {
                data: [3, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                showMark: ({ index }) => index % 2 === 0,
              },
            ]}
            height={300}
          /> */}
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
            Stock Out{" "}
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
            Processing{" "}
          </span>
        </div>

        {/* Table */}
        <div>
          <table className="customer-table">
            <thead>
              <tr style={{ backgroundColor: "#e6e6e6" }}>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Product</th>
                <th>SKU</th>
                <th>MRP</th>
                <th>Available QTY</th>
                <th>Unit Sold</th>
                <th>Revennue</th>
              </tr>
            </thead>
            <tbody>
              {sellingProducts.map((cust, i) => (
                <tr
                  key={cust.id}
                  onClick={() => handleCustomerClick(cust)}
                  style={{ cursor: "pointer" }}
                >
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div className="customer-info">
                      <img
                        src="https://via.placeholder.com/32"
                        alt="avatar"
                        className="avatar"
                      />
                      {cust.product}
                    </div>
                  </td>
                  <td>{cust.sku}</td>
                  <td>{cust.mrp}</td>
                  <td>{cust.available}</td>
                  <td>{cust.unit}</td>
                  <td>{cust.revenue}</td>
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
        <div
          style={{
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Godown</span>
          <span style={{ color: "#1368EC" }}>
            View All <FaArrowRight />
          </span>
        </div>

        <div
          style={{
            border: "1px solid #e6e6e6",
            backgroundColor: "#FBFBFB",
            borderRadius: "8px",
            padding: "24px",
            gap: "24px",
          }}
        >
          <div style={{}}>
            <span
              style={{
                color: "#262626",
                fontWeight: "400",
                fontSize: "14px",
                borderRadius: "8px",
                border: "1px solid #e6e6e6",
                padding: "6 px",
              }}
            >
              <PiWarehouseBold style={{ color: "#1368EC" }} /> Zone 01
            </span>
          </div>
          <div>
            <span style={{ color: "#1368EC" }}>86% Used</span>
          </div>

          <div
            style={{
              width: "670px",
              // height: "56px",
              gap: "8px",
              flex:'wrap'
            }}
          >
            <span
              style={{
                width:'auto',
                fontWeight: "400",
                fontSize: "14px",
                color: "#262626",
                padding: "4px",
                border: "1px solid #e6e6e6e",
                backgroundColor: "#f1f1f1",
              }}
            >
              Construction Material
            </span>
            <span
              style={{
                width:'auto',
                fontWeight: "400",
                fontSize: "14px",
                color: "#262626",
                padding: "4px",
                border: "1px solid #e6e6e6e",
                backgroundColor: "#f1f1f1",
              }}
            >
              
              PlyWood Material
            </span>
            <span
              style={{
                width:'auto',
                fontWeight: "400",
                fontSize: "14px",
                color: "#262626",
                padding: "4px",
                border: "1px solid #e6e6e6e",
                backgroundColor: "#f1f1f1",
              }}
            >
              Paint{" "}
            </span>

            <span
              style={{
                width:'auto',
                fontWeight: "400",
                fontSize: "14px",
                color: "#262626",
                padding: "4px",
                border: "1px solid #e6e6e6e",
                backgroundColor: "#f1f1f1",
              }}
            >
              Adessive{" "}
            </span>

            <span
              style={{
                width:'auto',
                fontWeight: "400",
                fontSize: "14px",
                color: "#262626",
                padding: "4px",
                border: "1px solid #e6e6e6e",
                backgroundColor: "#f1f1f1",
              }}
            >
              Cements{" "}
            </span>

            <span
              style={{
                width:'auto',
                fontWeight: "400",
                fontSize: "14px",
                color: "#262626",
                padding: "4px",
                border: "1px solid #e6e6e6e",
                backgroundColor: "#f1f1f1",
              }}
            >
              Iron Rods{" "}
            </span>
            <span
              style={{
                width:'auto',
                fontWeight: "400",
                fontSize: "14px",
                color: "#262626",
                padding: "4px",
                border: "1px solid #e6e6e6e",
                backgroundColor: "#f1f1f1",
              }}
            >
              Water Heater{" "}
            </span>
            <span
              style={{
                width:'auto',
                fontWeight: "400",
                fontSize: "14px",
                color: "#262626",
                padding: "4px",
                border: "1px solid #e6e6e6e",
                backgroundColor: "#f1f1f1",
              }}
            >
              Plywood
            </span>
            <span
              style={{
                width:'auto',
                fontWeight: "400",
                fontSize: "14px",
                color: "#262626",
                padding: "4px",
                border: "1px solid #e6e6e6e",
                backgroundColor: "#f1f1f1",
              }}
            >
              Sunmica
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetails;
