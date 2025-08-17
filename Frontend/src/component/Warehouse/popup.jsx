import React from 'react';
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Popup = ({ isOpen, onClose, selectedItem, zoneName = "Zone 01" }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
      //  alignItems: 'center',
        zIndex: '1000'
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          width: '100%',  
          overflowY: 'auto', 
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          position: 'relative',
        }}
      >
        <div
          style={{
            backgroundColor: '#1368ec',
            color: '#fff',
            padding: '16px 18px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2 style={{ margin: '0' }}>Assign Product</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            <IoMdClose />
          </button>
        </div>

        <div style={{ marginTop:'10px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px',
              padding: '5px 10px',
            }}
          >
            <span
              style={{
                color: '#676767',
                fontFamily:'roboto',
                fontWeight:'400',
                fontSize:'16px',
              }}
            >

              {zoneName}  
            </span>
            {/* grid name */}
            <span style={{
                color: '#262626',
                fontFamily:'roboto',
                fontWeight:'400',
                fontSize:'16px',
              }}>
              {selectedItem} 
            </span>
          </div>

          {/* search bar */}

          <div style={{border:'1px solid #c2c2c2', padding:'10px 16px', color:'#fbfbfb', borderRadius:'8px', gap:'8px', display:'flex', alignItems:'center'}}>
            <span><IoSearch style={{color:'#676767'}}/></span>
            <input type="search" style={{border:'none', outline:'none', flex:'1'}}/>
          </div>


          <div style={{border:'1px solid #c2c2c2', color:'#ffffff', borderRadius:'8px', gap:'10px', marginTop:'5px'}}>
            <div style={{padding:'10px 16px', }}> 

              <p style={{ color: '#676767', margin: '20px 0' }}>
            You haven't added any products yet.
            <br /> Use <span style={{color:'#177ecc'}}>browse</span>  or <span style={{color:'#177ecc'}}>search</span> to get started.
          </p>
            </div>
            <div style={{position:'absolute', bottom:'10px', right:'20px', justifyContent:'right', display:'flex'
            
          }}>
            <button
            onClick={onClose}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              
            }}
          >
            Done
          </button>
          </div>
            
          </div>
          
          
        </div>
      </div>

    </div>
  );
};

export default Popup;