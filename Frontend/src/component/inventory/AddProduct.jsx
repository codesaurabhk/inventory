import React, { useEffect, useRef, useState } from 'react';
import './AddProduct.css';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlusSquare } from "react-icons/fa";
import Chair2 from '../images/chair2.png';
import Chair2r from '../images/chair2r.png';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        sku: '',
        quantity: '',
        category: '',
        serial: false,
        batch: false,
        serialNumber: '',
        hsn: '',
        supplier: '',
        warehouse: '',
        reorder: '',
        leadTime: '',
        returnable: false,
        description: '',
        mrp: '',
        includesTax: false,
        tax: '',
        cost: '',
        profit: '',
        margin: '',
        variantName: '',
        variantValue: '',
    });


   const [value, setValue] = useState("");
    const inputRef = useRef(null);
    const [fileName, setFileName] = useState("");

  const quillRef = useRef(null);

  // Toolbar options matching the screenshot
  const modules = {
    toolbar: [
      [{ 'font': [] }],
      ['bold', 'italic', 'underline'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['code-block'],
      ['clean']
    ],
  };
  
  // Word count logic
  const handleChange = (content) => {
    const text = content.replace(/(<([^>]+)>)/gi, ''); // Strip HTML tags
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount <= 60) {
      setValue(content);
    }
  };
  
  // Workaround for findDOMNode issue
  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.root.setAttribute('data-placeholder', 'Type the message');
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
        <div className="add-product-container">

            {/* path */}
            <div className='add-product-path'>
                <Link to="/Dashboard" style={{textDecoration:'none'}}><span className='gray-color'>Inventory <IoIosArrowForward /></span></Link>
                <span className='ap-name'>Add Product</span>
            </div>

            
            <div style={{marginTop: '20px',width: '100%',border:'1px solid #007B42',backgroundColor:'#BAFFDF',borderRadius:'4px',padding:'3px 5px',maxWidth:'930px',margin:'auto'}}>
              <span>🎉 Great! You have successfully created a category.</span>
            </div>
            
            <div className='add-product-wrapper'>

            {/* Product Info */}
            <div className="section">
                <label>Product Name</label>
                <input type="text" name="name" placeholder="Product name" onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}} />

                <div className="row-2">
                    <div>
                        <label>SKU</label>
                        <input type="text" name="sku" placeholder="SKU No" onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}} />
                    </div>
                    <div>
                        <label>Quantity</label>
                        <input type="number" name="quantity" placeholder="21" onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}} />
                    </div>
                </div>

                <label>Category</label>
                <select name="category" onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>
                    <option style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>Select a product category</option>
                </select>
                
                <label>Sub Category</label>
                <select name="category" onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>
                    <option style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>Select a product sub category</option>
                </select>
                
                <label>Brand</label>
                <select name="category" onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>
                    <option style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>Select a product category</option>
                </select>

                <br/>


                <span>This Product have :-</span>

                <div className="checkbox-group" style={{display:'flex',alignItems:'center'}}>
                    <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                        <input type="radio" name="number" onChange={handleChange} style={{marginTop:'15px'}} />
                        <span>Serial number</span>
                    </div>
                    <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                        <input type="radio" name="number" onChange={handleChange} style={{marginTop:'15px'}} />
                        <span>Batch number</span>
                    </div>
                </div>

                <input id='serialno' type="text" name="serialNumber" placeholder="Enter Number" onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}} />

                <label className='divider-line'>HSN/SAC</label>
                <input id='hsn' type="text" name="hsn" placeholder="HSN Code" onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}} />
            </div>

            {/* Source & Stock */}
            <div className="section">
                <span>Source & Storage</span>
                <div className="row-2">
                    <div>
                        <label>Select Supplier</label>
                        <select name="supplier" onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>
                            <option style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>Supplier name</option>
                        </select>
                    </div>
                    <div>
                        <label>Select Warehouse</label>
                        <select name="warehouse" onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>
                            <option style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>Warehouse name</option>
                        </select>
                    </div>
                </div>

            </div>
            {/* stock control */}
            <div className='section'>
                <span >Stock Control</span>
                <div className="row-2" >
                    <div>
                        <label>Reorder</label>
                        <input type="number" name="reorder" placeholder="15" onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}} />
                    </div>
                    <div>
                        <label>Lead time</label>
                        <select name="leadTime" onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>
                            <option style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>15 days</option>
                        </select>
                    </div>
                </div>
                <div className="checkbox-group" style={{ marginBottom: '-10px' }}>
                    <label ><input type="checkbox" name="returnable" onChange={handleChange} /> Return option is available for this product.</label>
                </div>
            </div>

            {/* Description & Media */}

            <div className="section">
                
                <div>
                <span className="section-title">Description & Media</span>
                <div className="variant-field">
                    <label className="section-title">Description</label>
                    <ReactQuill ref={quillRef} theme="snow" value={value} onChange={handleChange} modules={modules} placeholder="Text Here" style={{height:'150px'}}/>
                </div>
                </div>
                
                <div style={{borderBottom:'1px solid #D9D9D9',marginBottom: '16px',marginTop:'50px'}}>
                    <span>Description</span>
          
                    <div style={{padding: '16px',backgroundColor: '#f8f9fa',borderRadius: '8px',marginBottom: '24px', marginTop:'8px', fontSize:'14px', }} className='gray-color'>
                        <span>Key Features</span>
                        <ul>
                            <li>Foldable & Portable</li>
                            <li>Confortable Padded Seat</li>
                            <li>Detachable Footrests</li>
                            <li>Strong, lightweight build</li>
                            <li>Support upto 100 Kg</li>
                        </ul>
                        <br/>
                        <span>Ideal for personal or medical use.</span>
                    </div>
                </div>
                
                <div>
                <label className="section-title">Media</label>
                <div className='media-box'>
                    <div style={{display: 'flex', gap: '8px', marginTop: '16px',alignItems: 'center'}}>
                        <img src={Chair2} style={{width:'68px',border:'2px solid #d1d1d1ff',borderRadius:'10px'}}></img>
                        <img src={Chair2r} style={{width:'68px',border:'2px solid #d1d1d1ff',borderRadius:'10px'}}></img>
                        <div className='ap-add-media'>
                            <FaPlusSquare style={{fontSize: '32px', color: '#d1d1d1ff',borderRadius:'12px'}} />
                        </div>
                    </div>
                </div>
                </div>
                
                <div>
                <label className="section-title">Media</label>
                <div className="media-box">
                    <p>

                <i className="media-icon" /> Drag your image here, or

                <button
                  onClick={handleClick}
                  style={{
                    padding: "8px 8px",
                    borderRadius: "4px",
                    color: "#007bff",
                    backgroundColor:'#FAFAFA',
                    fontSize: "16px",
                    cursor: "pointer",
                    border:'none'
                  }}
                >
                  browse
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

                    </p>
                    <small>Supports JPEG, PNG, JPG</small>
                </div>
                </div>

            </div>
            

            {/* Pricing & Tax */}
            <div className="section pricing-section">
                <h4>Pricing & Tax</h4>

                <div className="mrp">
                    <label>MRP</label>
                    <input
                        className='mrp'
                        type="number"
                        name="mrp"
                        placeholder="₹ 0.00"
                        onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}
                    />
                </div>

                <div className="checkbox-group">
                    <label htmlFor="includesTax">
                    <input
                        type="checkbox"
                        name="includesTax"
                        onChange={handleChange}
                        id="includesTax"
                        style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}
                    />
                        It Includes Tax?</label>
                </div>

                <div className="tax">
                    <select name="tax" onChange={handleChange} style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>
                        <option style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>5%</option>
                        <option style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>12%</option>
                        <option style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>18%</option>
                        <option style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}>28%</option>
                    </select>
                </div>

                {/* <hr /> */}

                <div className="row-3">
                    <div>
                        <label>Cost per item</label>
                        <input
                            type="number"
                            name="cost"
                            placeholder="₹ 0.00"
                            onChange={handleChange}
                            style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}
                        />
                    </div>
                    <div>
                        <label>Profit</label>
                        <input
                            type="number"
                            name="profit"
                            placeholder="₹ 0.00"
                            onChange={handleChange}
                            style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}
                        />
                    </div>
                    <div>
                        <label>Margin</label>
                        <div className="margin-group">
                            <input
                                type="number"
                                name="margin"
                                placeholder="0.00                                 %"
                                onChange={handleChange}
                                style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}
                            />
                            {/* <span>%</span> */}
                        </div>
                    </div>
                </div>
            </div>


            {/* Variants */}
            <div className="section">
                <label className="section-title">Add Variants</label>

                <div className="variant-row">
                    <div className="variant-field">
                        <label>Variant Name</label>
                        <input
                            type="text"
                            name="variantName"
                            placeholder="Color"
                            onChange={handleChange}
                            style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}
                        />
                    </div>

                    <div className="variant-field">
                        <label>Variant Value</label>
                        <input
                            type="text"
                            name="variantValue"
                            placeholder="Red"
                            onChange={handleChange}
                            style={{color:'#999797ff',backgroundColor:'#F1F1F1'}}
                        />
                    </div>
                </div>

                <button className="done-btn">Done</button>
                <br />
                <button className="add-variant">+ Add another variants</button>
            </div>

            {/* Footer */}
            <div className="footer-actions">
                <button className="btn-draft">Draft</button>
                <button className="btn-save">Save</button>
            </div>
            </div>

        </div >
    );
};

export default AddProduct;
