import React, { useEffect, useRef, useState } from 'react'
import JsBarcode from "jsbarcode";
import { IoIosSearch } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";


function PrintBarCode() {

const [product, setProduct] = useState({
  barcode: "",
});

  const [isFormOpen, setIsFormOpen] = useState(false);

  const formRef = useRef(null);

const generateBarcode = () => {
   setIsFormOpen(true);
  const randomBarcode = Math.floor(100000000000 + Math.random() * 900000000000).toString(); // 12-digit
  setProduct((prev) => ({
    ...prev,
    barcode: randomBarcode,
  }));

  setTimeout(() => {
    JsBarcode("#barcode-svg", randomBarcode, {
      format: "EAN13",
      lineColor: "#000",
      width: 2,
      height: 60,
      displayValue: true,
    });
  }, 100); // allow barcode to render
};

const closeForm = () => {
  setIsFormOpen(false);
  setProduct((prev) => ({ ...prev, barcode: "" }));
};

useEffect(() => {
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      closeForm();
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  return (
    <div style={{margin:'0px',padding:'20px',backgroundColor:'#f8f9fa',fontFamily:'sans-serif'}}>

      {/* path */}
      <div style={{fontSize:'large'}}>
        <span className="ap-name">Print Barcode</span>
      </div>

      <div style={{maxWidth:'750px',margin:'auto',padding:'16px 32px',fontFamily:'sans-serif',backgroundColor:'#F7F7F7'
      }}>
        
        <div className="" style={{backgroundColor:'#fff',border:'1px solid #E1E1E1',borderRadius:'8px',padding:'20px',marginBottom:'24px'
        }}>
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

        <div style={{backgroundColor:'#fff',border:'1px solid #E1E1E1',borderRadius:'8px',padding:'20px',marginBottom:'24px'
        }} >
            <strong>Set Barcode Details</strong>
            
            <div style={{marginTop:'16px'}}>
                
                <div style={{display:'flex',justifyContent:'space-between',gap:'16px' }}>
                    <div style={{width:'100%'}}>
                        <div>Number of Barcode to print</div>
                        <input type="number" style={{border:'1px solid #ccc',color: "#999797ff", backgroundColor: "#FBFBFB",padding:'6px',borderRadius:'8px',width:'100%'  }} placeholder='01' />
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
        <button onClick={generateBarcode}
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

        {/* Show Barcode SVG */}
        {product.barcode && (
            <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(199, 197, 197, 0.4)',
            backdropFilter: 'blur(1px)',
            display: 'flex',
            justifyContent: 'center',
            zIndex: '10',
            overflowY: 'auto',
          }}>
                <div ref={formRef} style={{width:'700px',height:'auto',margin:'auto',marginTop:'80px',marginBottom:'80px',backgroundColor:'white',border:'1px solid #E1E1E1',borderRadius:'8px',padding:'10px 16px',display:'flex',overflowY:'auto'}}>
                    
                    <div className='row'>
                        <div className='col-6'>
                            <div style={{ marginTop: "10px",border:'1px solid #E6E6E6',borderRadius:'8px',width:'320px',padding:'12px 24px',height:'250px' }}>
                                <span>Product Name: </span>
                                <br/>
                                <span>SKU: </span>
                                <br/><br/>
                                <span>MRP: /-</span>
                                <br/>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <span>Expiry: </span>
                                    <span>QTY: 000</span>
                                </div>
                                <svg id="barcode-svg"></svg>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div style={{ marginTop: "10px",border:'1px solid #E6E6E6',borderRadius:'8px',width:'320px',padding:'12px 24px',height:'250px' }}>
                                <span>Product Name: </span>
                                <br/>
                                <span>SKU: </span>
                                <br/><br/>
                                <span>MRP: /-</span>
                                <br/>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <span>Expiry: </span>
                                    <span>QTY: 000</span>
                                </div>
                                <svg id="barcode-svg"></svg>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div style={{ marginTop: "10px",border:'1px solid #E6E6E6',borderRadius:'8px',width:'320px',padding:'12px 24px',height:'250px' }}>
                                <span>Product Name: </span>
                                <br/>
                                <span>SKU: </span>
                                <br/><br/>
                                <span>MRP: /-</span>
                                <br/>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <span>Expiry: </span>
                                    <span>QTY: 000</span>
                                </div>
                                <svg id="barcode-svg"></svg>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )}
          
      </div>
    </div>
  )
}

export default PrintBarCode