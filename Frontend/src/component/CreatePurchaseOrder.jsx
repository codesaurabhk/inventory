import React, { useEffect, useRef, useState } from "react";
import "./CreatePurchaseOrder.css";
import { IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import chair2 from "../images/chair2.png";
import chair3 from "../images/chair3.jpg";
import { TbArrowsSort } from "react-icons/tb";

function CreatePurchaseOrder() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const quillRef = useRef(null);

  
  const modules = {
    toolbar: [
      [{ font: [] }],
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
      ["code-block"],
      ["clean"],
    ],
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

  
  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.root.setAttribute("data-placeholder", "Type the message");
    }
  }, []);

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
          <span className="gray-color">
            Inventory <IoIosArrowForward /> Purchase Order <IoIosArrowForward />
          </span>
          <span className="ac-name">Create Purchase Order</span>
        </div>

        {/* full wrapper */}
        <div className="ac-details">
          {/* category */}
          <div style={{ display: "flex", gap: "3%" }}>
            <div style={{ marginTop: "16px", width: "48%" }}>
              <span>Supplier</span>
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
                  color: "#C2C2C2",
                }}
              >
                <option value="" style={{ color: "#C2C2C2" }}>
                  Select Supplier
                </option>
                <option value="chair" style={{ color: "#C2C2C2" }}>
                  Chair
                </option>
              </select>
            </div>
            <div style={{ marginTop: "16px", width: "48%" }}>
              <span>Warehouse</span>
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
                  color: "#C2C2C2",
                }}
              >
                <option value="" style={{ color: "#C2C2C2" }}>
                  Select Warehouse
                </option>
                <option value="chair" style={{ color: "#C2C2C2" }}>
                  Chair
                </option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", gap: "3%" }}>
            <div style={{ marginTop: "16px", width: "48%" }}>
              <span>Payment Terms</span>
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
                  color: "#C2C2C2",
                }}
              >
                <option value="" style={{ color: "#C2C2C2" }}>
                  Payment method
                </option>
                <option value="chair" style={{ color: "#C2C2C2" }}>
                  Chair
                </option>
              </select>
            </div>
            <div style={{ marginTop: "16px", width: "48%" }}>
              <span>Courier</span>
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
                  color: "#C2C2C2",
                }}
              >
                <option value="" style={{ color: "#C2C2C2" }}>
                  Select Courier
                </option>
                <option value="chair" style={{ color: "#C2C2C2" }}>
                  Chair
                </option>
              </select>
            </div>
            <div style={{ marginTop: "16px", width: "48%" }}>
              <span>ETA</span>
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
                  color: "#C2C2C2",
                }}
              >
                <option value="" style={{ color: "#C2C2C2" }}>
                  Estimate Time of Arrival
                </option>
                <option value="chair" style={{ color: "#C2C2C2" }}>
                  Chair
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="ac-details">
          {/* products */}
          <div
            style={{
              marginTop: "20px",

              width: "100%",
            }}
          >
            <span>Products</span>
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

              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
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
                {fileName && (
                  <span style={{ fontSize: "14px", color: "#666" }}>
                    {fileName}
                  </span>
                )}
              </div>

              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  width: "192px",
                  height: "36px",
                  padding: "19px 10px",
                  borderRadius: "6px",
                  border: "1px solid #C2C2C2",
                  fontSize: "17px",
                  fontWeight: 500,
                  backgroundColor: "#FBFBFB",
                  color: "#545252",
                  cursor: "pointer",
                }}

                
              >        
                <TbArrowsSort />
                Top Selling
              </button>
            </div>

            {/* when there is no product*/}
            <div
              style={{
                textAlign: "center",
                border: "1px solid #C2C2C2",
                borderRadius: "4px",
                padding: "32px 16px",
                backgroundColor: "#FBFBFB",
                color: "#C2C2C2",
                cursor: "pointer",
                marginTop: "15px",
              }}
            >
              <AiFillProduct
                style={{ fontSize: "50px", marginBottom: "10px" }}
              />
              <br />
              You haven't added any products yet.
              <br />
              Use browse or search to get started.
            </div>
          </div>
        </div>

        {/* Estimate Amount Section */}
        <div className="ac-details">
          <div
            style={
              {
                //   marginTop: '0px',
                //   borderTop: '1px solid #E1E1E1',
                //   paddingTop: '20px'
              }
            }
          >
            <h4 style={{ fontWeight: 600, marginBottom: "16px" }}>
              Estimate Amount
            </h4>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span>Subtotal</span>
              <span>₹ 0.00</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span>Tax (Included)</span>
              <span>₹ 0.00</span>
            </div>
            <div
              style={{
                marginBottom: "12px",
                marginTop: "20px",
                paddingTop: "15px",
                borderTop: "1px solid #C2C2C2",
              }}
            >
              <input type="checkbox" id="shippingCharge" />
              <label htmlFor="shippingCharge" style={{ marginLeft: "8px" }}>
                Is there any shipping charge for this order?
              </label>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "22px",
                paddingTop: "15px",
                borderTop: "1px solid #C2C2C2",
              }}
            >
              <span>Total</span>
              <span>₹ 0.00</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "end",
            gap: "10px",
            marginTop: "16px",
          }}
        >
          <button
            style={{
              padding: "6px 12px",
              borderRadius: "5px",
              border: "1px solid #C2C2C2",
              backgroundColor: "#F2F2F2",
              color: "#333",
              cursor: "pointer",
            }}
          >
            Draft
          </button>
          <button
            style={{
              padding: "6px 12px",
              borderRadius: "5px",
              border: "1px solid black",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </div>
      </div>
  );
}

export default CreatePurchaseOrder;
