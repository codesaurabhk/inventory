import React from 'react'
import './AboutProduct.css';
import { IoIosArrowForward, IoIosArrowRoundForward, } from "react-icons/io";
import { FaPlusSquare } from "react-icons/fa";
import Chair2 from '../images/chair2.png';
import Chair2r from '../images/chair2r.png';

function AboutProduct() {
  return (
    <div className='ap-container'>

      {/* path */}
      <div className='ap-path'>
        <span className='gray-color'>Inventory <IoIosArrowForward /> All Product <IoIosArrowForward /></span>
        <span className='ap-name'>Product Name</span>
      </div>

      {/* full wrapper */}
      <div className='ap-wrapper'>

        {/* left wrapper */}
        <div className='ap-basic-wrapper'>
          
          {/* 1. basic details */}
          <div className='ap-basic-details'>
            <h4>Basic Details</h4>
            
            <span>Product Name</span>
            <br/>
            <span className='gray-color'>Wheel Chair</span>
            <br/>
            <br/>
            <div style={{display: 'flex', gap: '24px',justifyContent: 'space-between'}}>
              <div>
                <span>SKU</span>
                <br/>
                <span className='gray-color'>WC-12345</span>
              </div>
              <div>
                <span>Quantity</span>
                <br/>
                <span className='gray-color'>09</span>
              </div>
              <div>
                <span>Serial No.</span>
                <br/>
                <span className='gray-color'>00089</span>
              </div>
              <div>
                <span>Category</span>
                <br/>
                <span className='gray-color'>Chair</span>
              </div>
              <div>
                <span>HSN/SAC</span>
                <br/>
                <span className='gray-color'>9854</span>
              </div>
            </div>
          </div>

          {/* 2. source */}
          <div className='ap-basic-details'>
            <h4>Source & Storage</h4>

            <div style={{display: 'flex', gap: '24px',justifyContent: 'space-between'}}>
              <div>
                <span>Supplier</span>
                <br/>
                <span className='gray-color'>Alok Ranjan - Noida(62)</span>
              </div>
              <div>
                <span>Warehouse</span>
                <br/>
                <span className='gray-color'>WH-009</span>
              </div>
              <div></div>
            </div>
          </div>

          {/* 3. pricing */}
          <div className='ap-basic-details'>
            <h4>Pricing & Tax</h4>

            <div>
              <div>
                <span>MRP</span>
                <br/>
                <span className='gray-color'>₹5000.00</span>
              </div>
              <br/>
              <div style={{borderBottom: '1px solid #D9D9D9', paddingBottom: '16px',marginBottom: '16px'}}>
                <input type='checkbox' style={{width: '16px', height: '16px',color:'black'}} />
                <span style={{marginLeft: '8px'}}>This Product Includes 5% taxes</span>
              </div>
            </div>
            <div style={{display: 'flex', gap: '24px',justifyContent: 'space-between',marginTop: '16px'}}>
              <div>
                <span>Cost per item</span>
                <br/>
                <span className='gray-color'>₹1460.00</span>
              </div>
              <div>
                <span>Profit</span>
                <br/>
                <span className='gray-color'>₹3540.00</span>
              </div>
              <div>
                <span>Margin</span>
                <br/>
                <span className='gray-color'>₹70.8%</span>
              </div>
            </div>
          </div>

          {/* 4. stock */}
          <div className='ap-basic-details'>
            <h4>Stock Control</h4>

            <div style={{display: 'flex', gap: '24px',justifyContent: 'space-between'}}>
              <div>
                <span>Recorder</span>
                <br/>
                <span className='gray-color'>30</span>
              </div>
              <div>
                <span>Lead time</span>
                <br/>
                <span className='gray-color'>50</span>
              </div>
              <div></div>
            </div>
            <br/>
              <div>
                <input type='checkbox' style={{width: '16px', height: '16px',color:'black'}} />
                <span style={{marginLeft: '8px',borderBottom:'1px solid #D9D9D9'}}>Returns are accepted for this item.</span>
              </div>
          </div>
          
          {/* 5. variants */}
          <div className='ap-basic-details'>
            <h4>Variants</h4>
            <div style={{borderRadius: '8px', overflow: 'hidden', marginBottom: '16px',border:'1px solid #E1E1E1'}}>
              <table style={{width: '100%', borderCollapse: 'collapse',borderRadius: '8px', overflow: 'hidden',fontSize: '14px'}}>
                <thead style={{backgroundColor: '#E6E6E6', borderRadius: '8px',borderCollapse: 'collapse'}}>
                  <tr>
                    <th style={{textAlign:'left',padding:'8px'}}><input type='checkbox' /> Variant</th>
                    <th style={{textAlign:'left',padding:'8px'}}>SKU</th>
                    <th style={{textAlign:'left',padding:'8px'}}>Price</th>
                    <th style={{textAlign:'left',padding:'8px'}}>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{padding:'8px'}}><input type='checkbox' /> Color <IoIosArrowRoundForward /> Green <IoIosArrowRoundForward /> S</td>
                    <td style={{padding:'8px'}}>CG00192T</td>
                    <td style={{padding:'8px'}}>₹5000.00</td>
                    <td style={{padding:'8px'}}>24</td>
                  </tr>
                  <tr>
                    <td style={{padding:'8px'}}><input type='checkbox' /> Color <IoIosArrowRoundForward /> Green <IoIosArrowRoundForward /> S</td>
                    <td style={{padding:'8px'}}>CG00192T</td>
                    <td style={{padding:'8px'}}>₹5000.00</td>
                    <td style={{padding:'8px'}}>24</td>
                  </tr>
                  <tr>
                    <td style={{padding:'8px'}}><input type='checkbox' /> Color <IoIosArrowRoundForward /> Green <IoIosArrowRoundForward /> S</td>
                    <td style={{padding:'8px'}}>CG00192T</td>
                    <td style={{padding:'8px'}}>₹5000.00</td>
                    <td style={{padding:'8px'}}>24</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* right wrapper */}
        <div>
          
          {/* description and media*/}
          <div className='ap-basic-description'>
            <h4>Description & Media</h4>

          {/* description */}
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

          {/* media */}
          <div>
            <span>Media</span>
            <div style={{border:'2px dashed #d1d1d1ff',borderRadius:'8px',padding:'0px 16px 45px',borderStyle:'dotted',marginTop: '8px'}}>
              <div style={{display: 'flex', gap: '8px', marginTop: '16px',alignItems: 'center'}}>
              <img src={Chair2} style={{width:'68px',border:'2px solid #d1d1d1ff',borderRadius:'10px'}}></img>
              <img src={Chair2r} style={{width:'68px',border:'2px solid #d1d1d1ff',borderRadius:'10px'}}></img>
              <div className='ap-add-media'>
                <FaPlusSquare style={{fontSize: '32px', color: '#d1d1d1ff',borderRadius:'12px'}} />
              </div>
              </div>
            </div>
          </div>
          </div>

          {/* edit button */}
          <div style={{display: 'flex', justifyContent: 'end', marginTop: '24px'}}>
            <span style={{border:'1px solid black',backgroundColor:'black',padding:'5px 8px',color:'white',borderRadius:'5px'}}>Edit</span>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default AboutProduct