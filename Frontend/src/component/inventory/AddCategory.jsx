import React, { useEffect, useRef, useState } from 'react'
import './AddCategory.css';
import { IoIosArrowForward,IoMdSearch } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import chair2 from '../images/chair2.png';
import chair3 from '../images/chair3.jpg';
import { Link } from 'react-router-dom';

function AddCategory() {
    
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
    <div className='ac-container'>
    
          {/* path */}
          <div className='ac-path'>
            <span className='gray-color'>Inventory <IoIosArrowForward /> <Link to="/CategoryDashbord" style={{textDecoration:'none',color:'#828486'}}>Category</Link> <IoIosArrowForward /></span>
            <span className='ac-name'>Add Category</span>
          </div>
          
    
          {/* full wrapper */}
          <div className='ac-details'>

          {/* added successfully message */}
          
            <div style={{marginTop: '16px',width: '98%',border:'1px solid #007B42',backgroundColor:'#BAFFDF',borderRadius:'4px',padding:'3px 5px'}}>
              <span>🎉 Great! You have successfully created a category.</span>
            </div>

            {/* category */}
            <div style={{marginTop: '16px',width: '100%'}}>
                <span>Category Name</span>
                <br/>
                <input type="text" style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #C2C2C2', fontSize: '16px',marginTop: '5px',backgroundColor: '#FBFBFB',color: '#C2C2C2'}} placeholder='Enter Category Name'>
                </input>
            </div>
            
            {/* sub category */}
            <div style={{marginTop: '16px',width: '100%'}}>
                <span>Sub Category</span>
                <br/>
                <input type="text" style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #C2C2C2', fontSize: '16px',marginTop: '5px',backgroundColor: '#FBFBFB',color: '#C2C2C2'}} placeholder='Enter Sub category'>
                </input>
            </div>
            
            {/* brand */}
            <div style={{marginTop: '16px',width: '100%'}}>
                <span>Brand</span>
                <br/>
                <input type="text" style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #C2C2C2', fontSize: '16px',marginTop: '5px',backgroundColor: '#FBFBFB',color: '#C2C2C2'}} placeholder='Enter Brand'>
                </input>
            </div>

            {/* description */}
            <div style={{marginTop: '24px',width: '100%'}}>
                <span>Description</span>
                <br/>
                <div style={{marginTop:'10px'}}>
                <ReactQuill ref={quillRef} theme="snow" value={value} onChange={handleChange} modules={modules} placeholder="Text Here" style={{height:'150px'}}/>
                </div>
            </div>

            {/* products */}
            <div style={{marginTop: '80px',width: '100%'}}>
                
                <span>Products</span>
                <br/>
                <div style={{display: 'flex',gap: '10px', marginTop: '10px', justifyContent: 'space-between',alignItems: 'center'}}>

                    <div style={{width:'500px',height:'37px',display: 'flex', alignItems: 'center', border: '1px solid #C2C2C2', borderRadius: '4px',padding:'0px 8px',backgroundColor: '#FBFBFB'}}>
                        <IoMdSearch style={{fontSize:'20px'}}/>
                        <input type='text' style={{outline:'none',border: 'none',backgroundColor: '#FBFBFB',color: '#C2C2C2',width:'100%'}} />
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

                    <select style={{width: '150px',height:'37px',padding:'0px 8px',borderRadius: '4px', border: '1px solid #C2C2C2', fontSize: '16px',backgroundColor: '#FBFBFB',color: '#C2C2C2'}}>
                        <option value="" style={{color:'#C2C2C2'}}>Top Selling</option>
                    </select>

                </div>

                {/* when there is no product*/}
                <div style={{borderRadius: '8px', overflow: 'hidden', marginBottom: '16px',border:'1px solid #E1E1E1',marginTop:'15px'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse',borderRadius: '8px', overflow: 'hidden',fontSize: '14px'}}>
                    <thead style={{backgroundColor: '#E6E6E6', borderRadius: '8px',borderCollapse: 'collapse'}}>
                      <tr>
                        <th style={{textAlign:'left',padding:'8px',color:'#615f5fff'}}><input type='checkbox' /> Product</th>
                        <th style={{textAlign:'left',padding:'8px',color:'#615f5fff'}}>Quantity</th>
                        <th style={{textAlign:'left',padding:'8px',color:'#615f5fff'}}>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{padding:'8px'}}><div style={{display:'flex',alignItems:'center',gap:'5px'}}><input type='checkbox' /><img src={chair2} style={{width:'35px'}} /> <span>Wheel Chair</span></div></td>
                        <td style={{padding:'8px'}}><input type='number' placeholder='10' style={{borderRadius:'5px',border:'1px solid #615f5fff',padding:'4px 8px'}} /></td>
                        <td style={{padding:'8px'}}><input type='number' placeholder='₹50,000.00' style={{borderRadius:'5px',border:'1px solid #615f5fff',padding:'4px 8px'}} /></td>
                      </tr>
                      <tr>
                        <td style={{padding:'8px'}}><div style={{display:'flex',alignItems:'center',gap:'5px'}}><input type='checkbox' /><img src={chair3} style={{width:'35px'}} /> <span>Office Chair</span></div></td>
                        <td style={{padding:'8px'}}><input type='number' placeholder='5' style={{borderRadius:'5px',border:'1px solid #615f5fff',padding:'4px 8px'}} /></td>
                        <td style={{padding:'8px'}}><input type='number' placeholder='₹25,000.00' style={{borderRadius:'5px',border:'1px solid #615f5fff',padding:'4px 8px'}} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{display: 'flex', justifyContent: 'end', marginTop: '16px'}}>
                    <span style={{border:'1px solid black',backgroundColor:'black',padding:'5px 8px',color:'white',borderRadius:'5px'}}>Save</span>
                </div>
                <div style={{textAlign:'center',border: '1px solid #C2C2C2', borderRadius: '4px', padding: '32px 16px', backgroundColor: '#FBFBFB', color: '#C2C2C2', cursor: 'pointer',marginTop: '15px'}}>
                    <AiFillProduct style={{fontSize: '50px', marginBottom: '10px'}} />
                    <br/>
                    You haven't added any products yet.
                    <br/>
                    Use browse or search to get started.
                </div>
                <div style={{display: 'flex', justifyContent: 'end', marginTop: '16px'}}>
                    <span style={{border:'1px solid black',backgroundColor:'black',padding:'5px 8px',color:'white',borderRadius:'5px'}}>Done</span>
                </div>
                        
                {/* save button */}

            </div>

          </div>
          
        </div>
  )
}

export default AddCategory
