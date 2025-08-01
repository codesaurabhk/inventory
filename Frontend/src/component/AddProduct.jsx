import React, { useState } from 'react';
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

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // Added more header options for flexibility
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ],
    };

    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link', 'image'
    ];
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const [description, setDescription] = useState("");
    const handleDescriptionChange = (value) => {
        setDescription(value);
    };


    return (
        <div className="add-product-container">

            {/* path */}
            <div className='add-product-path'>
                <Link to="/Dashboard" style={{textDecoration:'none'}}><span className='gray-color'>Inventory <IoIosArrowForward /></span></Link>
                <span className='ap-name'>Add Product</span>
            </div>

            
            <div style={{marginTop: '20px',width: '100%',border:'1px solid #007B42',backgroundColor:'#BAFFDF',borderRadius:'4px',padding:'3px 5px',maxWidth:'935px',margin:'auto'}}>
              <span>🎉 Great! You have successfully created a category.</span>
            </div>
            
            <div className='add-product-wrapper'>

            {/* Product Info */}
            <div className="section">
                <label>Product Name</label>
                <input type="text" name="name" placeholder="Product name" onChange={handleChange} />

                <div className="row-2">
                    <div>
                        <label>SKU</label>
                        <input type="text" name="sku" placeholder="SKU No" onChange={handleChange} />
                    </div>
                    <div>
                        <label>Quantity</label>
                        <input type="number" name="quantity" placeholder="21" onChange={handleChange} />
                    </div>
                </div>

                <label>Category</label>
                <select name="category" onChange={handleChange}>
                    <option>Select a product category</option>
                </select>

                <div className="checkbox-group">
                    <label><input type="checkbox" name="serial" onChange={handleChange} /> Serial number</label>
                    <label><input type="checkbox" name="batch" onChange={handleChange} /> Batch number</label>
                </div>

                <input id='serialno' type="text" name="serialNumber" placeholder="Enter Serial No" onChange={handleChange} />

                <label className='divider-line'>HSN/SAC</label>
                <input id='hsn' type="text" name="hsn" placeholder="HSN Code" onChange={handleChange} />
            </div>

            {/* Source & Stock */}
            <div className="section">
                <span>Source & Storage</span>
                <div className="row-2">
                    <div>
                        <label>Select Supplier</label>
                        <select name="supplier" onChange={handleChange}>
                            <option>Supplier name</option>
                        </select>
                    </div>
                    <div>
                        <label>Select Warehouse</label>
                        <select name="warehouse" onChange={handleChange}>
                            <option>Warehouse name</option>
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
                        <input type="number" name="reorder" placeholder="15" onChange={handleChange} />
                    </div>
                    <div>
                        <label>Lead time</label>
                        <select name="leadTime" onChange={handleChange}>
                            <option>15 days</option>
                        </select>
                    </div>
                </div>
                <div className="checkbox-group" style={{ marginBottom: '-10px' }}>
                    <label ><input type="checkbox" name="returnable" onChange={handleChange} /> Return option is available for this product.</label>
                </div>
            </div>

            {/* Description & Media */}

            <div className="section">
                
                
                <div style={{borderBottom:'1px solid #D9D9D9',marginBottom: '16px'}}>
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
                <span className="section-title">Description & Media</span>
                <div className="variant-field">
                    <label className="section-title">Description</label>
                    <ReactQuill
                        className="rich-text-editor"
                        theme="snow"
                        value={product.description}
                        onChange={handleDescriptionChange}
                        modules={modules}
                        formats={formats}
                        placeholder="Text Here"
                        defaultValue="<p>paragraph</p>"
                        style={{
                            minHeight: '100px',
                            borderRadius: '8px',
                            backgroundColor: '#f9f9f9',
                            border: '1px solid #ccc'
                        }}
                    />
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
                        <i className="media-icon" /> Drag your image here, or{" "}
                        <span className="browse">browse</span>
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
                        onChange={handleChange}
                    />
                </div>

                <div className="checkbox-group">
                    <label htmlFor="includesTax"> <input
                        type="checkbox"
                        name="includesTax"
                        onChange={handleChange}
                        id="includesTax"
                    />
                        It Includes Tax?</label>
                </div>

                <div className="tax">
                    <select name="tax" onChange={handleChange}>
                        <option>5%</option>
                        <option>12%</option>
                        <option>18%</option>
                        <option>28%</option>
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
                        />
                    </div>
                    <div>
                        <label>Profit</label>
                        <input
                            type="number"
                            name="profit"
                            placeholder="₹ 0.00"
                            onChange={handleChange}
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
                        />
                    </div>

                    <div className="variant-field">
                        <label>Variant Value</label>
                        <input
                            type="text"
                            name="variantValue"
                            placeholder="Red"
                            onChange={handleChange}
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
