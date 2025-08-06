import { useEffect, useRef, useState } from "react";
import "./CreateQuatations.css";
import { IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import chair2 from "../images/chair2.png";
import chair3 from "../images/chair3.jpg";
import { TbArrowsSort } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BiBarcodeReader } from "react-icons/bi";

function CreateQuatations() {
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
        <span className="gray-color"><Link to="/Quotation" className="gray-color" style={{textDecoration:'none'}}>Quotations</Link></span>
          <span>
            <IoIosArrowForward />
          </span>
        <span className="ac-name">Create Quotations</span>
      </div>

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
                color: "#C2C2C2",
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
          <div style={{ marginTop: "13px", width: "49%" }}>
            <span>Quotation Date</span>
            <br />
            <input
              type="Date"
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
          <div style={{ marginTop: "13px", width: "48%" }}>
            <span>Valid Until</span>
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

      {/* Notes Section */}
      <div className="ac-details">
        <div style={{ marginTop: "20px" }}>
          <span style={{ fontSize: "18px" }}>Notes</span>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={description}
            onChange={handleDescriptionChange}
            modules={modules}
            formats={formats}
            placeholder="Text Here"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #C2C2C2",
              borderRadius: "8px",
              minHeight: "120px",
              fontSize: "14px",
            }}
            className="custom-quill-editor"
          />
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
                color:"#626060ff"
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
              paddingTop:"12px",
              marginBottom: "15px",
              borderTop: "1px solid #C2C2C2",
            }}
          >
            <span>+Add Discount</span>
            <span style={{display:"flex", gap:"8px"}}>
                <input type="number" style={{ width: "110px",
                padding: "7px",
                borderRadius: "4px",
                border: "1px solid #C2C2C2",
                background: "#FBFBFB",
                color:"#626060ff"}} placeholder="00                  %" />
                <input type="number" style={{ width: "110px",
                padding: "7px",
                borderRadius: "4px",
                border: "1px solid #C2C2C2",
                background: "#FBFBFB",
                color:"#626060ff"}} placeholder="00                   ₹ " />
               
            </span>
            
          </div>

          {/* Shipping Charges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
              paddingTop:"15px",
              borderTop: "1px solid #C2C2C2",
            }}
          >
            <input type="checkbox"  />
            <span >
              Any shipping charges for this order?
            </span>
            <span style={{ marginLeft: "auto" }}>₹ 200.00</span>
            
          </div>

          {/* Add Additional Charges */}
          <div
            style={{
                display: "flex",
              justifyContent: "space-between",
              
              cursor: "pointer",
              marginBottom: "10px",
              marginTop:"10px"
            }}
          >
            <span style={{color: "#1368EC",}}>+Add Additional Charges</span>
            <span style={{color:"#676767"}}>₹0.00</span>
          </div>

          {/* Final Total */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "12px",
             
              borderTop: "1px solid #C2C2C2",
              paddingTop:"8px",
            }}
          >
            <span>Total</span>
            <span>₹ 6588.00</span>
          </div>

          {/* Auto Round Off */}
          <div style={{ marginTop: "12px" }}>
            <input type="checkbox" id="roundOff" />
            <label htmlFor="roundOff" style={{ marginLeft: "8px" }}>
              Auto Round Off
            </label>
          </div>
        </div>
      </div>

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
              boxShadow:"0px 0px 5px rgba(0, 0, 0, 0.3)"
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
              boxShadow:"0px 0px 5px rgba(0, 0, 0, 0.3)"
          }}
        >
          Preview
        </button>
        {/* new preview button */}
        <Link to="/CreateQuatationsSuccess"
          style={{
            padding: "6px 12px",
            borderRadius: "5px",
            border: "1px solid black",
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
            boxShadow:"0px 0px 5px rgba(0, 0, 0, 0.3)",
            textDecoration:'none'
          }}
          
        >
          Save
        </Link>
      </div>
    </div>
  );
}

export default CreateQuatations;
