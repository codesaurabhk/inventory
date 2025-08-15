import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { RiArrowUpDownLine } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import "./Godown.css";

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

  const products = [
    {
      name: "Ponds Moisturizer cream",
      sku: "JDFG846",
      qty: 654,
      img: "https://via.placeholder.com/40",
    },
    {
      name: "Office Chair",
      sku: "JDFG846",
      qty: 566,
      img: "https://via.placeholder.com/40",
    },
    {
      name: "Luxury Handbag",
      sku: "JDFG846",
      qty: 254,
      img: "https://via.placeholder.com/40",
    },
    {
      name: "Gaming Mouse",
      sku: "JDFG846",
      qty: 12,
      img: "https://via.placeholder.com/40",
    },
  ];

  // Pagination state and derived values for the middle table
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 10;
  const totalCount = products.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const endIndexExclusive = Math.min(startIndex + pageSize, totalCount);
  const displayStart = totalCount === 0 ? 0 : startIndex + 1;
  const displayEnd = endIndexExclusive;
  const paginatedProducts = products.slice(startIndex, endIndexExclusive);

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div style={{ padding: "20px", overflowY: "auto", height: "88vh" }}>
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
              alignItems: "center",
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
            <select
              name="zone"
              onChange={(e) => {
                if (e.target.value) {
                  window.location.href = `/${e.target.value
                    .toLowerCase()
                    .replace(" ", "")}`;
                }
              }}
              style={{ border: "none", outline: "none" }}
            >
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
              <option value="/LocalHost:5173/SelectPage">Zone 1</option>
              <option value="/zone2">Zone 2</option>
              <option value="/zone3">Zone 3</option>
              <option value="/zone4">Zone 4</option>
              <option value="/zone5">Zone 5</option>
              <option value="/zone6">Zone 6</option>
              <option value="/zone7">Zone 7</option>
            </select>
          </div>
        </div>

        {/* grid */}
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              transform: "rotate(-0deg)",
              backgroundColor: "#3f99e1",
              padding: "24px",
              color: "#FFF",
              justifyContent: "space-between",
              display: "flex",
              border: "1px solid #e6e6e6",
              borderRadius: "8px",
              marginTop: "40px",
              marginBottom: "20px",
              width: "40%",
            }}
          >
            <span className="invisible">hg</span>
            <span className="zone-text">Zone 04</span>
            <span style={{ transform: "rotate(0deg)" }}>
              <FaArrowRight />
            </span>
          </div>
        </div>
        {/* grid */}

        <main
          style={{
            width: "40%",
            margin: "0 auto",
            display: "grid",
            gridTemplateRows: "40px 40px 40px 40px 40px",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridRowGap: "10px",
            gridColumnGap: "10px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            A1
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            B1
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            C1
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            D1
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            A2
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            B2
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            C2
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            D2
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            A3
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            B3
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            C3
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            C4
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            A4
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            B4
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            C4
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            C5
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            A5
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            B5
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            C5
          </div>
          <div
            style={{
              border: "1px solid #e6e6e6",
              color: "#000000",
              borderRadius: "8px",
              fontFamily: "robot",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            D5
          </div>
        </main>
        {/* other grid & tables */}

        {/* all zone & table */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            padding: "20px",
          }}
        >
          {/* Zone 3 */}
          <div
            style={{
              width: "303px",
              height: "345px",
              marginTop: "30px",
              transform: "rotate(-90deg)",
            }}
          >
            <div
              style={{
                transform: "rotate(-0deg)",
                backgroundColor: "#3f99e1",
                padding: "24px",
                color: "#FFF",
                justifyContent: "space-between",
                display: "flex",
                border: "1px solid #e6e6e6",
                borderRadius: "8px",
                marginTop: "40px",
                marginBottom: "20px",
              }}
            >
              <span className="invisible">hg</span>
              <span className="zone-text">Zone 03</span>
              <span style={{ transform: "rotate(0deg)" }}>
                <FaArrowRight />
              </span>
            </div>

            <div className="grid-container-two">
              <div
                className="zone3-01"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                A1
              </div>
              <div
                className="zone3-02"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                A2
              </div>
              <div
                className="zone3-03"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                A3
              </div>
              <div
                className="zone3-04"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                B1
              </div>
              <div
                className="zone3-05"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                A2
              </div>
              <div
                className="zone3-06"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                B3
              </div>
              <div
                className="zone3-07"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                C1
              </div>
              <div
                className="zone3-08"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                C2
              </div>
              <div
                className="zone3-09"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                C3
              </div>
            </div>
          </div>

          {/* table */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "24px",
              border: "1px solid #e6e6e6",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* table header */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "50px" }}
              >
                <span
                  style={{
                    fontFamily: "roboto",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#262626",
                  }}
                >
                  Zone 04
                </span>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span
                    style={{
                      border: "1px solid #e6e6e6",
                      borderRadius: "4px",
                      padding: "8px",
                      fontFamily: "Roboto",
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#676767",
                    }}
                  >
                    Assign Product Product{" "}
                  </span>

                  <select
                    name=""
                    id=""
                    style={{
                      border: "1px solid #e6e6e6",
                      borderRadius: "4px",
                      padding: "8px",
                      fontFamily: "Roboto",
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#676767",
                    }}
                  >
                    <option
                      value=""
                      disabled
                      selected
                      style={{
                        border: "1px solid #e6e6e6",
                        borderRadius: "4px",
                        padding: "8px",
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#676767",
                      }}
                    >
                      Rack 1
                    </option>
                  </select>

                  <select
                    style={{
                      border: "1px solid #e6e6e6",
                      borderRadius: "4px",
                      padding: "8px",
                      fontFamily: "Roboto",
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#676767",
                    }}
                  >
                    <option
                      value=""
                      disabled
                      selected
                      style={{
                        border: "1px solid #e6e6e6",
                        borderRadius: "4px",
                        padding: "8px",
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#676767",
                      }}
                    >
                      A1
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: "8px",
                border: "1px solid #e6e6e6",
                marginTop: "10px",
              }}
            >
              <table className="customer-tables">
                <thead>
                  <tr
                    style={{
                      backgroundColor: "#e6e6e6",
                      color: "#676767",
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: "Roboto",
                    }}
                  >
                    <th style={{ padding: "8px" }}>Product</th>
                    <th>SKU</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedProducts.map((products, index) => (
                    <tr
                      key={index}
                      style={{ borderBottom: "1px solid #e6e6e6" }}
                    >
                      <td style={{ padding: "8px" }}>{products.name}</td>
                      <td>{products.sku}</td>
                      <td>{products.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* paggination */}
            <div
              className="pagination"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div className="pagination-boxx">10 per page</div>
              <div className="pagination-boxx pagination-info">
                <span></span>
                <span style={{ color: "grey" }}> 1 - 10 of 700</span>
                <button className="pagination-arrow">
                  <FaAngleLeft />
                </button>
                <button className="pagination-arrow">
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* Zone 05 */}
          <div
            style={{
              width: "303px",
              height: "345px",
              marginTop: "30px",
              transform: "rotate(90deg)",
            }}
          >
            <div
              style={{
                transform: "rotate(-0deg)",
                backgroundColor: "#3F99E1",
                padding: "24px",
                color: "#FFF",
                justifyContent: "space-between",
                display: "flex",
                border: "1px solid #e6e6e6",
                borderRadius: "8px",
              }}
            >
              <span className="invisible">hg</span>
              <span className="zone-text">Zone 05</span>
              <span style={{ transform: "rotate(0deg)" }}>
                <FaArrowRight />
              </span>
            </div>

            <div className="grid-container">
              <div className="item a1">A1</div>
              <div className="item a2">A2</div>
              <div className="item a3">A3</div>
              <div className="item a4">A4</div>
              <div className="item a5">A5</div>
              <div className="item b1">B1</div>
              <div className="item b2">B2</div>
            </div>
          </div>
        </div>

        {/* 06 & 07 */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "70px",
            marginRight: "70px",
          }}
        >
          {/* 06 */}
          <div
            style={{
              width: "303px",
              height: "345px",
              marginTop: "-30px",
              transform: "rotate(-90deg)",
            }}
          >
            <div
              style={{
                transform: "rotate(-0deg)",
                backgroundColor: "#3f99e1",
                padding: "24px",
                color: "#FFF",
                justifyContent: "space-between",
                display: "flex",
                border: "1px solid #e6e6e6",
                borderRadius: "8px",
                marginTop: "40px",
                marginBottom: "20px",
              }}
            >
              <span className="invisible">hg</span>
              <span className="zone-text">Zone 03</span>
              <span style={{ transform: "rotate(0deg)" }}>
                <FaArrowRight />
              </span>
            </div>

            <div className="grid-container-two">
              <div
                className="zone3-01"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                A1
              </div>
              <div
                className="zone3-02"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                A2
              </div>
              <div
                className="zone3-03"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                A3
              </div>
              <div
                className="zone3-04"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                B1
              </div>
              <div
                className="zone3-05"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                A2
              </div>
              <div
                className="zone3-06"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                B3
              </div>
              <div
                className="zone3-07"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                C1
              </div>
              <div
                className="zone3-08"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                C2
              </div>
              <div
                className="zone3-09"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                C3
              </div>
            </div>
          </div>
          {/* 07 */}
          <div
            style={{
              width: "303px",
              height: "345px",
              marginTop: "-30px",
              transform: "rotate(90deg)",
            }}
          >
            <div
              style={{
                transform: "rotate(-0deg)",
                backgroundColor: "#3F99E1",
                padding: "24px",
                color: "#FFF",
                justifyContent: "space-between",
                display: "flex",
                border: "1px solid #e6e6e6",
                borderRadius: "8px",
              }}
            >
              <span className="invisible">hg</span>
              <span className="zone-text">Zone 05</span>
              <span style={{ transform: "rotate(0deg)" }}>
                <FaArrowRight />
              </span>
            </div>

            <div className="grid-container">
              <div className="item a1">A1</div>
              <div className="item a2">A2</div>
              <div className="item a3">A3</div>
              <div className="item a4">A4</div>
              <div className="item a5">A5</div>
              <div className="item b1">B1</div>
              <div className="item b2">B2</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer*/}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          bottom: "0px",
          width: "84%",
          backgroundColor: "#f7f7f7",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "5px 15px",
                borderRadius: "5px",
              }}
            ></div>
            <span>Available</span>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <div
                style={{
                  backgroundColor: "#e3f3ff",
                  padding: "5px 15px",
                  borderRadius: "5px",
                }}
              ></div>
              <span>Occupied</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <div
                style={{
                  backgroundColor: "#1368ec",
                  padding: "5px 15px",
                  borderRadius: "5px",
                }}
              ></div>
              <span>Selected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Godown;
