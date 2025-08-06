import React from 'react'
import './PrintBarCode.css'
import { IoIosSearch } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";

function PrintBarCode() {
  return (
    <div className="pbc-container">

      {/* path */}
      <div className="pbc-path">
        <span className="ap-name">Print Barcode</span>
      </div>

      <div className="pbc-wrapper">
        
        <div className="pbc-section">
            <strong>Estimate Amount</strong>
            
            <div style={{marginTop:'16px'}}>
                <div>Products</div>
                <div style={{border:'1px solid #ccc',color: "#999797ff", backgroundColor: "#FBFBFB",padding:'6px',borderRadius:'8px' }}>
                    <IoIosSearch style={{fontSize:'25px'}}/>
                    <input type="text" style={{border:'none',outline:'none',color: "#999797ff", backgroundColor: "#FBFBFB" }} />
                </div>
            </div>

            <div style={{marginTop:'16px'}}>
                <div>SKU</div>
                <div style={{border:'1px solid #ccc',color: "#999797ff", backgroundColor: "#FBFBFB",padding:'6px',borderRadius:'8px' }}>
                    <IoIosSearch style={{fontSize:'25px'}}/>
                    <input type="text" style={{border:'none',outline:'none',color: "#999797ff", backgroundColor: "#FBFBFB" }} />
                </div>
            </div>

            <div style={{border:'1px solid #ccc',color: "#999797ff", backgroundColor: "white",padding:'40px',borderRadius:'8px',marginTop:'24px',textAlign:'center' }}>
                <AiFillProduct style={{fontSize:'25px'}}/>
                <br/>
                <span style={{color:'#1368EC'}}>Search Product</span><span> to Generate Barcode</span>
            </div>
        </div>

        <div className="pbc-section">
            <strong>Set Barcode Details</strong>
            
            <div style={{marginTop:'16px'}}>
                
                <div style={{display:'flex',justifyContent:'space-between',gap:'16px' }}>
                    <div style={{width:'100%'}}>
                        <div>Number of Barcode to print</div>
                        <input type="number" style={{border:'1px solid #ccc',color: "#999797ff", backgroundColor: "#FBFBFB",padding:'6px',borderRadius:'8px',width:'100%'  }} />
                    </div>

                    <div style={{width:'100%'}}>
                        <div>Lable Formate</div>
                        <select type="text" style={{border:'1px solid #ccc',color: "#999797ff", backgroundColor: "#FBFBFB",padding:'6px',borderRadius:'8px',width:'100%'  }}>
                            <option>Large</option>
                            <option>Mediam</option>
                            <option>Small</option>
                        </select>
                    </div>

                    <div style={{width:'100%'}}>
                        <div>Page Type & Size</div>
                        <select type="text" style={{border:'1px solid #ccc',color: "#999797ff", backgroundColor: "#FBFBFB",padding:'6px',borderRadius:'8px',width:'100%'  }}>
                            <option>Roll</option>
                        </select>
                    </div>
                </div>
            </div>

            <div style={{marginTop:'16px'}}>
                <div>Barcode Content Options</div>
                <div style={{display:'flex',justifyContent:'space-between',gap:'16px'}}>
                    <div style={{display:'flex',gap:'6px'}}>
                        <input type='checkbox'/>
                        <span>Product Name</span>
                    </div>
                    <div style={{display:'flex',gap:'6px'}}>
                        <input type='checkbox'/>
                        <span>SKU</span>
                    </div>
                    <div style={{display:'flex',gap:'6px'}}>
                        <input type='checkbox'/>
                        <span>Price</span>
                    </div>
                    <div style={{display:'flex',gap:'6px'}}>
                        <input type='checkbox'/>
                        <span>Expiry Date</span>
                    </div>
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
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          Cancel
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
          Preview
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
          Print
        </button>
      </div>
          
      </div>
    </div>
  )
}

export default PrintBarCode