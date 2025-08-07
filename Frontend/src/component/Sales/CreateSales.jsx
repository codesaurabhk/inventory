import { useEffect, useRef, useState } from "react";
import "./CreateSales.css";
import { IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import chair2 from "../images/chair2.png";
import chair3 from "../images/chair3.jpg";
import { TbArrowsSort } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BiBarcodeReader } from "react-icons/bi";

function CreateSales() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [description, setDescription] = useState("<p>Text Here</p>");

  const quillRef = useRef(null);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleChange = (content) => {
    const text = content.replace(/(<([^>]+)>)/gi, "");
    const wordCount = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    if (wordCount <= 60) {
      setValue(content);
    }
  };



  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="ac-containers">
      {/* path */}

      <div className="ac-path">
        <span className="gray-color"><Link to="/SalesRecord" className="gray-color" style={{ textDecoration: 'none' }}>Sales</Link></span>
        <span style={{}}>
          <IoIosArrowForward />
        </span>

        <span className="ac-name">Create Sales Order</span>
      </div>
      <div style={{ display: "flex", gap: "25px", justifyContent: "center" }}>

        <div>
          <div className="ac-details">
            {/* category */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "15px",
              }}
            >
              Quotation No :- <span style={{ color: "#676767" }}>123789</span>
            </div>
            <div style={{ display: "flex", gap: "3%" }}>
              <div style={{ marginTop: "16px", width: "100%" }}>
                <span>Customer</span>
                <br />
                <select
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #C2C2C2",
                    fontSize: "16px",
                    marginTop: "5px",
                    backgroundColor: "#FBFBFB",
                    color: "#4f4e4eff",
                  }}
                >
                  <option value="" style={{ color: "#a09f9fff" }}>
                    Select customer
                  </option>
                  <option value="chair" style={{ color: "#C2C2C2" }}>
                    Chair
                  </option>
                </select>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2%" }}>
              <div style={{ marginTop: "13px", width: "48%" }}>
                <span>Contact No.</span>
                <br />
                <input
                  type="number"
                  style={{
                    width: "95%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #C2C2C2",
                    fontSize: "16px",
                    marginTop: "5px",
                    backgroundColor: "#FBFBFB",
                    color: "#737373ff",
                  }}
                  placeholder="Customer Mobile No."
                />
              </div>

            </div>
          </div>

          <div className="ac-details">
            {/* products */}
            <div
              style={{
                marginTop: "13px",

                width: "100%",
              }}
            >
              <span style={{ fontSize: "18px" }}>Products</span>
              <br />
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "500px",
                    height: "37px",
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #C2C2C2",
                    borderRadius: "4px",
                    padding: "0px 8px",
                    backgroundColor: "#FBFBFB",
                  }}
                >
                  <IoMdSearch style={{ fontSize: "20px" }} />
                  <input
                    type="text"
                    style={{
                      outline: "none",
                      border: "none",
                      backgroundColor: "#FBFBFB",
                      color: "#C2C2C2",
                      width: "100%",
                    }}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    onClick={handleClick}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "4px",
                      border: "1px solid #C2C2C2",
                      backgroundColor: "#FBFBFB",
                      color: "#333",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Browse
                  </button>
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </div>

                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "55px",
                    height: "36px",
                    padding: "19px 10px",
                    borderRadius: "6px",
                    border: "1px solid #C2C2C2",
                    fontSize: "30px",
                    fontWeight: 500,
                    backgroundColor: "#FBFBFB",
                    color: "#545252",
                    cursor: "pointer",
                  }}
                >
                  <BiBarcodeReader />
                </button>
              </div>

              <div
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  border: " 1px dashed #BBE1FF",
                  borderRadius: "9px",
                  padding: "8px 0px",
                  backgroundColor: "#FBFBFB",
                  color: "#1368EC",
                  cursor: "pointer",
                  marginTop: "12px",
                  fontWeight: "500",
                  bottom: "2px",
                }}
              >
                + Add Products
              </div>
            </div>
          </div>




          <div className="ac-details">
            <div style={{ marginTop: "16px" }}>
              <h4 style={{ fontWeight: 600, marginBottom: "16px" }}>
                Estimate Amount
              </h4>

              {/* Subtotal */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span>Subtotal</span>
                <span>₹ 7160.00</span>
              </div>

              {/* Tax Dropdown */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span>
                  <a href="#" style={{ color: "#1368EC", textDecoration: "none" }}>
                    Tax
                  </a>
                </span>
                <select
                  style={{
                    width: "120px",
                    padding: "6px",
                    borderRadius: "4px",
                    border: "1px solid #C2C2C2",
                    background: "#FBFBFB",
                    color: "#626060ff",
                  }}
                >
                  <option value="">None</option>
                </select>
              </div>

              {/* Total */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  marginTop: "15px",
                  paddingTop: "12px",
                  borderTop: "1px solid #C2C2C2",
                }}
              >
                <span>Total</span>
                <span>₹ 8448.8</span>
              </div>

              {/* Add Discount */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#1368EC",
                  cursor: "pointer",
                  paddingTop: "12px",
                  marginBottom: "15px",
                  borderTop: "1px solid #C2C2C2",
                }}
              >
                <span>+Add Discount</span>
                <span style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="number"
                    style={{
                      width: "110px",
                      padding: "7px",
                      borderRadius: "4px",
                      border: "1px solid #C2C2C2",
                      background: "#FBFBFB",
                      color: "#626060ff",
                    }}
                    placeholder="00                  %"
                  />
                  <span style={{ color: "grey" }}>or</span>
                  <input
                    type="number"
                    style={{
                      width: "110px",
                      padding: "7px",
                      borderRadius: "4px",
                      border: "1px solid #C2C2C2",
                      background: "#FBFBFB",
                      color: "#626060ff",
                    }}
                    placeholder="00                   ₹ "
                  />
                </span>
              </div>


              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                  paddingTop: "15px",
                  borderTop: "1px solid #C2C2C2",
                }}
              >
                <input type="checkbox" />
                <span style={{ color: "#1368EC" }}>Any shipping charges for this order?</span>
                <span style={{ marginLeft: "auto" }}>₹ 200.00</span>
              </div>


              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",

                  cursor: "pointer",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                <span style={{ color: "#1368EC" }}>+Add Additional Charges</span>
                <span style={{ color: "#676767" }}>₹0.00</span>
              </div>


              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "12px",

                  borderTop: "1px solid #C2C2C2",
                  paddingTop: "8px",
                }}
              >
                <span>Total</span>
                <span>₹ 6588.00</span>
              </div>


              <div style={{ marginTop: "12px" }}>
                <input type="checkbox" id="roundOff" />
                <label htmlFor="roundOff" style={{ marginLeft: "8px" }}>
                  Auto Round Off
                </label>
              </div>
            </div>
          </div>


          <div className="ac-details">
            <div style={{ marginTop: "10px" }}>
              <span style={{ fontSize: "18px", fontWeight: "500" }}>payment Info.</span>
              <br />
              <div style={{ display: "flex", gap: "2%" }}>
                <div style={{ marginTop: "13px", width: "65%" }}>
                  <span style={{ marginLeft: "2px" }}>Payment Method</span>
                  <br />
                  <select
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #C2C2C2",
                      fontSize: "16px",
                      marginTop: "5px",
                      backgroundColor: "#FBFBFB",
                      color: "#4f4e4eff",
                    }}
                  >
                    <option value="" style={{ color: "#a09f9fff" }}>
                      UPI - BHIM
                    </option>
                    <option value="chair" style={{ color: "#C2C2C2" }}>
                      Chair
                    </option>
                  </select>
                </div>
                <div style={{ marginTop: "13px", width: "33%" }}>
                  <span >Amount Received</span>
                  <br />
                  <input
                    type="number"
                    style={{
                      width: "95%",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #C2C2C2",
                      fontSize: "16px",
                      marginTop: "5px",
                      backgroundColor: "#FBFBFB",
                      color: "#C2C2C2",
                    }}
                    placeholder="₹ 1588"
                  />
                </div>


              </div>
              <div style={{ marginTop: "15px", paddingTop: "15px", borderTop: "1px solid #C2C2C2", }}>
                <input type="checkbox" id="roundOff" />
                <label htmlFor="roundOff" style={{ marginLeft: "8px" }}>
                  Generate Invoice
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "12px",
                  paddingTop: "12px",

                  borderTop: "1px solid #C2C2C2",
                }}
              >
                <span>Balance Amount</span>
                <span>₹ 5000.00</span>
              </div>
            </div>
          </div>



          {/* buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              gap: "10px",
              maxWidth: "645px",
              margin: "auto",
              marginTop: "16px",
            }}
          >
            <button
              style={{
                padding: "6px 12px",
                borderRadius: "5px",
                border: "1px solid #E6E6E6",
                backgroundColor: "#FFFFFF",
                color: "#333",
                cursor: "pointer",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              Draft
            </button>
            <button
              style={{
                padding: "6px 12px",
                borderRadius: "5px",
                border: "1px solid #E6E6E6",
                backgroundColor: "#FFFFFF",
                color: "#333",
                cursor: "pointer",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              Print
            </button>

            <button
              style={{
                padding: "6px 12px",
                borderRadius: "5px",
                border: "1px solid black",
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              Save
            </button>
          </div></div>

        {/* // outside */}
        <div className="ac-detailsz">
          <div style={{ display: "flex", gap: "2%" }}>
            <div style={{ marginTop: "13px", width: "49%" }}>
              <span>Sales Order No.</span>
              <br />
              <select
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #C2C2C2",
                  fontSize: "16px",
                  marginTop: "5px",
                  backgroundColor: "#FBFBFB",
                  color: "#4f4e4eff",
                }}
              >
                <option value="" style={{ color: "#a09f9fff" }}>
                  12
                </option>
                <option value="chair" style={{ color: "#C2C2C2" }}>
                  Chair
                </option>
              </select>
            </div>
            <div style={{ marginTop: "13px", width: "48%" }}>
              <span>Sales Date</span>
              <br />
              <input
                type="date"
                style={{
                  width: "95%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #C2C2C2",
                  fontSize: "16px",
                  marginTop: "5px",
                  backgroundColor: "#FBFBFB",
                  color: "#C2C2C2",
                }}
              />
            </div>


          </div>
          <div>
            <span>Due Date</span>
            <input
              type="date"
              style={{
                width: "95%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #C2C2C2",
                fontSize: "16px",
                marginTop: "5px",
                backgroundColor: "#FBFBFB",
                color: "#C2C2C2",
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default CreateSales;
