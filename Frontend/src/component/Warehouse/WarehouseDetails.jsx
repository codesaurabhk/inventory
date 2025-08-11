import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import RadioActive from "../images/Radioactive.png";
import CircleLogo from "../images/Circlelogo.png";
import DonutChart from "react-donut-chart";
import LineChart from "react-linechart";

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

  const lineChartData = [
    {
      color: "#1368ec",
      name: "Sold",
      points: [
        { x: 1, y: 40 },
        { x: 2, y: 50 },
        { x: 3, y: 35 },
        { x: 4, y: 55 },
        { x: 5, y: 70 },
        { x: 6, y: 90 },
      ],
    },
    {
      color: "#BBE1FF",
      name: "Purchase",
      points: [
        { x: 1, y: 45 },
        { x: 2, y: 60 },
        { x: 3, y: 40 },
        { x: 4, y: 50 },
        { x: 5, y: 65 },
        { x: 6, y: 75 },
      ],
    },
  ];

  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

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

          {/* Donut Chart */}
          <DonutChart
            data={chartData}
            colors={["#B8D2F9", "#4286F0", "#A1C3F7", "#B8D2F9", "#D0E1FB"]}
            width={220}
            height={220}
            legend={false} // hide built-in legend
            formatValues={(val) => `${val}%`}
            strokeColor="transparent" // remove border
            strokeWidth={0}
            style={{
              margin: "20px auto 0", // center chart
              display: "block",
            }}
          />

          {/* Legend under chart */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
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

         <div
          style={{
            width: "auto",
            height: "520px",
            borderRadius: "8px",
            padding: "24px",
            gap: "8px",
            backgroundColor: "#fff",
            marginTop: "20px",
          }}
        >
          <h3 style={{ marginBottom: "20px", color: "#262626" }}>
            Sales & Purchases (6 Months)
          </h3>
          <LineChart
            width={600}
            height={400}
            data={lineChartData}
            xLabel="Months"
            yLabel="Quantity"
            hidePoints={false}
            interpolate="linear"
            xLabels={monthLabels}
          />
        </div> 
      </div>
    </div>
  );
}

export default WarehouseDetails;
