import React, { useState } from 'react';
import add1 from '../images/add1.png';
import add2 from '../images/add2.png';
import add3 from '../images/add3.png';
import { Link } from 'react-router-dom';

function ChooseToAddProduct() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedFile(null); // Reset file when changing options
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const getLinkPath = () => {
    switch (selectedOption) {
      case 'manual':
        return '/AddProduct';
      case 'bulk':
        return '/import-bulk-product';
      case 'scan':
        return '/scan-to-add';
      default:
        return '/';
    }
  };

  return (
    <div style={{ marginTop: '200px', width: '100%' }}>
      <h2 style={{ textAlign: 'center' }}>How you want to add product?</h2>
      <div className='row' style={{ padding: '0px 250px', marginTop: '24px' }}>
        <div className='col'>
          <div 
            style={{ 
              border: selectedOption === 'manual' ? '2px solid #007bff' : '2px solid #E6E6E6',
              borderRadius: '16px', 
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
            onClick={() => handleOptionClick('manual')}
          >
            <div style={{ margin: '30px 20px' }}>
              <img src={add1} style={{ width: '40px', marginBottom: '50px' }} />
              <h5>Add Product Manually</h5>
              <span style={{ color: '#676767' }}>You can Import the product manually.</span>
            </div>
          </div>
        </div>
        <div className='col'>
          <div 
            style={{ 
              border: selectedOption === 'bulk' ? '2px solid #007bff' : '2px solid #E6E6E6',
              borderRadius: '16px', 
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
            onClick={() => handleOptionClick('bulk')}
          >
            <div style={{ margin: '30px 20px' }}>
              <img src={add2} style={{ width: '40px', marginBottom: '50px' }} />
              <h5>Import Bulk Product</h5>
              <span style={{ color: '#676767' }}>Upload a supported file for bulk upload.</span>
            </div>
          </div>
        </div>
        <div className='col'>
          <div 
            style={{ 
              border: selectedOption === 'scan' ? '2px solid #007bff' : '2px solid #E6E6E6',
              borderRadius: '16px', 
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
            onClick={() => handleOptionClick('scan')}
          >
            <div style={{ margin: '30px 20px' }}>
              <img src={add3} style={{ width: '40px', marginBottom: '25px' }} />
              <h5>Scan To Add</h5>
              <span style={{ color: '#676767' }}>Scan the product to quickly add it to your inventory.</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        {selectedOption === 'bulk' || selectedOption === 'scan' ? (
          <input 
            type="file" 
            onChange={handleFileChange}
            style={{
              padding: '6px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
            accept={selectedOption === 'bulk' ? '.csv,.xlsx' : 'image/*'}
          />
        ) : (
          <Link 
            to={getLinkPath()} 
            style={{ 
              padding: '6px 16px', 
              backgroundColor: selectedOption ? '#007bff' : '#E6E6E6', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer', 
              fontSize: '14px', 
              textDecoration: 'none' 
            }}
          >
            Continue
          </Link>
        )}
      </div>
    </div>
  );
}

export default ChooseToAddProduct;