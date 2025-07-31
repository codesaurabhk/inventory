import React from 'react';
import './Track.css'

function Track() {
  return (
    <div className='tr-container'>
        <div style={{marginTop: '16px',border:'1px solid #007B42',backgroundColor:'#BAFFDF',borderRadius:'4px',padding:'3px 15px'}}>
            <span>This item has been returned successfully.</span>
        </div>
        
        <div style={{border:'1px solid #C2C2C2',padding:'10px 16px',marginTop:'16px',borderRadius:'16px',lineHeight:'25px'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>
                    <span>Order Details</span>
                    <br/>
                    <span style={{color:'#676767'}}>Ponds Cream</span>
                    <br/>
                    <span style={{color:'#676767'}}>Order ID - DAC7634</span>
                    <br/>
                    <span style={{color:'#676767'}}>Amount -</span> <span>₹ 543.00</span>
                </div>
                <div>
                    <span style={{border:'1px solid #E4F3FF',padding:'2px 4px',backgroundColor:'#E4F3FF',color:'rgb(51, 157, 244)',borderRadius:'5px'}}>Return</span>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'16px'}}>
                <div>
                    <span>SKU</span>
                    <br/>
                    <span style={{color:'#676767'}}>PMC425</span>
                </div>
                <div>
                    <span>Quantity</span>
                    <br/>
                    <span style={{color:'#676767'}}>03</span>
                </div>
                <div>
                    <span>Serial no.</span>
                    <br/>
                    <span style={{color:'#676767'}}>89</span>
                </div>
                <div>
                    <span>Category</span>
                    <br/>
                    <span style={{color:'#676767'}}>Makeup & Beauty</span>
                </div>
            </div>
        </div>

        <div>
            <div style={{borderLeft:'2px dashed #CCDEFA',height:'60px',width:'1px',marginLeft:'25px'}}></div>
        </div>

        <div>
            <div style={{display:'flex',gap:'16px'}}>
                <div>
                    <div style={{color:' #1368EC',marginLeft:'13px',fontSize:'10px',border:'5px solid rgb(222, 231, 246)',borderRadius:'50%',padding:'2px 6px',backgroundColor:'#1368EC'}}>•</div>
                    <div style={{borderLeft:'2px solid #CCDEFA',height:'64px',width:'1px',marginLeft:'25px',marginTop:'0px'}}></div>
                </div>
                <div>
                    <span>Return Requested</span>
                    <br/>
                    <span style={{color:'#676767'}}>Wed, 16th Jan</span>
                </div>
            </div>
            <div style={{display:'flex',gap:'16px'}}>
                <div>
                    <div style={{color:' #1368EC',marginLeft:'13px',fontSize:'10px',border:'5px solid rgb(222, 231, 246)',borderRadius:'50%',padding:'2px 6px',backgroundColor:'#1368EC'}}>•</div>
                    <div style={{borderLeft:'2px solid #CCDEFA',height:'64px',width:'1px',marginLeft:'25px',marginTop:'0px'}}></div>
                </div>
                <div>
                    <span>Return Approved</span>
                    <br/>
                    <span style={{color:'#676767'}}>Wed, 16th Jan</span>
                </div>
            </div>
            <div style={{display:'flex',gap:'16px'}}>
                <div>
                    <div style={{color:' #1368EC',marginLeft:'13px',fontSize:'10px',border:'5px solid rgb(222, 231, 246)',borderRadius:'50%',padding:'2px 6px',backgroundColor:'#1368EC'}}>•</div>
                    <div style={{borderLeft:'2px solid #CCDEFA',height:'64px',width:'1px',marginLeft:'25px',marginTop:'0px'}}></div>
                </div>
                <div>
                    <span>Prder picked up from customer</span>
                    <br/>
                    <span style={{color:'#676767'}}>Thru, 18th Jan</span>
                </div>
            </div>
            <div style={{display:'flex',gap:'16px'}}>
                <div>
                    <div style={{color:' #1368EC',marginLeft:'13px',fontSize:'10px',border:'5px solid rgb(222, 231, 246)',borderRadius:'50%',padding:'2px 6px',backgroundColor:'#1368EC'}}>•</div>
                    <div style={{borderLeft:'2px solid #CCDEFA',height:'64px',width:'1px',marginLeft:'25px',marginTop:'0px'}}></div>
                </div>
                <div>
                    <span>Returned to warehouse</span>
                    <br/>
                    <span style={{color:'#676767'}}>Fri, 19th Jan</span>
                    <br/>
                    <span style={{color:'#676767'}}>Received to WH-009</span>
                </div>
            </div>
            <div style={{display:'flex',gap:'16px'}}>
                <div>
                    <div style={{color:' #1368EC',marginLeft:'13px',fontSize:'10px',border:'5px solid rgb(222, 231, 246)',borderRadius:'50%',padding:'2px 6px',backgroundColor:'#1368EC'}}>•</div>
                </div>
                <div>
                    <span>Refund Successful</span>
                    <br/>
                    <span style={{color:'#676767'}}>Sun, 21th Jan</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Track