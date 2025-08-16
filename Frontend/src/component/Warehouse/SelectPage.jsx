import React, { useState } from 'react';
import Popup from './popup';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { IoFilter } from 'react-icons/io5';

const dummyData = [
  { id: 1, category: 'Electronics', status: 'Active', skus: 15, products: 120 },
  { id: 2, category: 'Furniture', status: 'Inactive', skus: 8, products: 45 },
  { id: 3, category: 'Clothing', status: 'Active', skus: 20, products: 300 },
  { id: 4, category: 'Toys', status: 'Active', skus: 10, products: 95 },
  { id: 5, category: 'Sports', status: 'Inactive', skus: 12, products: 80 },
];

function SelectPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [zoneName, setZoneName] = useState("Zone 04"); // Initialized to match zone header

  const handleGridClick = (e, item) => {
    const style = window.getComputedStyle(e.target);
    console.log('Clicked item:', item, 'Background color:', style.backgroundColor); // Debug log
    if (style.backgroundColor === 'rgb(255, 255, 255)' || style.backgroundColor === '#ffffff') {
      setSelectedItem(item);
      setIsPopupOpen(true);
    } else {
      console.log('Popup not opened, background color:', style.backgroundColor); // Debug log
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div style={{ padding: '20px' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              color: '#676767',
              display: 'flex',
              gap: '16px',
              fontWeight: '500',
              alignItems: 'center',
            }}
          >
            <span>Warehouse</span>
            <MdArrowForwardIos style={{ color: '#b0afafff' }} />
            <span>All Warehouse</span>
            <MdArrowForwardIos style={{ color: '#b0afafff' }} />
            <span>Wh-001</span>
            <MdArrowForwardIos style={{ color: '#b0afafff' }} />
            <span
              style={{
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '18px',
                color: '#676767',
              }}
            >
              Godown
            </span>
            <MdArrowForwardIos style={{ color: '#b0afafff' }} />
            <span
              style={{
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '18px',
                color: '#262626',
              }}
            >
              {zoneName}
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '9px',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              backgroundColor: '#fff',
              width: '90%',
              gap: '19px',
              justifyContent: 'space-between',
              padding: '4px 16px',
            }}
          >
            <div
              style={{
                padding: '4px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
              }}
            >
              <FaSearch />
              <input
                type='search'
                placeholder='Search Items'
                style={{ border: 'none', outline: 'none' }}
              />
            </div>
            <div
              style={{
                padding: '4px',
                border: '1px solid #f1f1f1',
                borderRadius: '4px',
              }}
            >
              <RiArrowUpDownLine />
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '8px 16px',
              border: '1px solid #e6e6e6',
              borderRadius: '8px',
            }}
          >
            <select name='zone' style={{ border: 'none', outline: 'none' }} onChange={(e) => setZoneName(e.target.value)}>
              <option
                value=''
                style={{
                  padding: '4px 16px',
                  color: '#676767',
                  fontFamily: 'Roboto',
                  fontWeight: '400',
                  fontSize: '16px',
                }}
              >
                All Zones
              </option>
              {['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5', 'Zone 6', 'Zone 7'].map(
                (zone, idx) => (
                  <option key={idx} value={zone}>
                    {zone}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/* Zone Header */}
        <div
          style={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              transform: 'rotate(-0deg)',
              backgroundColor: '#3f99e1',
              padding: '24px',
              color: '#FFF',
              justifyContent: 'space-between',
              display: 'flex',
              border: '1px solid #e6e6e6',
              borderRadius: '8px',
              marginTop: '40px',
              marginBottom: '20px',
              width: '26%',
            }}
          >
            <span className='invisible'>hg</span>
            <span className='zone-text'>{zoneName}</span>
            <span style={{ transform: 'rotate(0deg)' }}>
              <FaArrowRight />
            </span>
          </div>
        </div>

        {/* Grid */}
        <main
          style={{
            width: '26%',
            margin: '0 auto',
            display: 'grid',
            gridTemplateRows: '40px 40px 40px 40px 40px',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridRowGap: '10px',
            gridColumnGap: '10px',
            justifyContent: 'space-between',
          }}
        >
          {['A1', 'B1', 'C1', 'D1', 'A2', 'B2', 'C2', 'D2', 'A3', 'B3', 'C3', 'C4', 'A4', 'B4', 'C4', 'C5', 'A5', 'B5', 'C5', 'D5'].map((item, idx) => (
            <div
              key={idx}
              onClick={(e) => handleGridClick(e, item)}
              style={{
                border: '1px solid #e6e6e6',
                color: '#000000',
                borderRadius: '8px',
                fontFamily: 'Roboto',
                fontWeight: '400',
                fontSize: '16px',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                cursor: 'pointer',
                backgroundColor: ['A1', 'C2', 'D1'].includes(item) ? '#ffffff' : '#e3f3ff',
              }}
            >
              {item}
            </div>
          ))}
        </main>

        {/* Table Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            border: '1px solid #e6e6e6',
            backgroundColor: '#ffffff',
            marginTop: '20px',
          }}
        >
          <span>{zoneName}</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <select name='' id=''>
              <option value=''>Assign Products</option>
            </select>
            <select name='' id=''>
              <option value=''>Rack A</option>
            </select>
            <select name='' id=''>
              <option value=''>A1</option>
            </select>
          </div>
        </div>

        {/* Table Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderRight: '1px solid #e6e6e6',
            borderLeft: '1px solid #e6e6e6',
            borderBottom: '1px solid #e6e6e6',
            borderTop: 'none',
            padding: '8px 24px',
            backgroundColor: '#ffffff',
          }}
        >
          <div
            style={{
              backgroundColor: '#f1f1f1',
              borderRadius: '4px',
              padding: '8px',
              gap: '8px',
            }}
          >
            <span
              style={{
                fontFamily: 'Roboto',
                fontWeight: '400',
                fontSize: '16px',
                color: '#262626',
              }}
            >
              All
            </span>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #f1f1f1',
                gap: '4px',
                borderRadius: '4px',
                color: '#676767',
                padding: '4px',
              }}
            >
              <span>
                <FaSearch />
              </span>
              <span>
                <IoFilter />
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #f1f1f1',
                gap: '4px',
                borderRadius: '4px',
                color: '#676767',
                padding: '4px',
              }}
            >
              <span>
                <RiArrowUpDownLine />
              </span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div style={{ backgroundColor: '#ffffff' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: '#fff',
              padding: '16px 24px',
            }}
          >
            <thead style={{ backgroundColor: '#f1f1f1' }}>
              <tr
                style={{
                  padding: '24px',
                  color: '#676767',
                  fontFamily: 'Roboto',
                  fontSize: '16px',
                  fontWeight: '400',
                }}
              >
                <th style={{ padding: '10px', textAlign: 'left' }}>
                  <input type='checkbox' />
                </th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Product</th>
                <th style={{ padding: '10px', textAlign: 'center' }}>Stored In</th>
                <th style={{ padding: '10px', textAlign: 'center' }}>QTY</th>
                <th style={{ padding: '10px', textAlign: 'center' }}>Stored Since</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr key={item.id}>
                  <td
                    style={{
                      padding: '10px',
                      textAlign: 'left',
                      borderBottom: '1px solid #e6e6e6',
                    }}
                  >
                    <input type='checkbox' />
                  </td>
                  <td
                    style={{
                      padding: '10px',
                      borderBottom: '1px solid #e6e6e6',
                    }}
                  >
                    <img src='' alt='' />
                    {item.category}
                  </td>
                  <td
                    style={{
                      padding: '10px',
                      textAlign: 'center',
                      borderBottom: '1px solid #e6e6e6',
                    }}
                  >
                    {item.id}
                  </td>
                  <td
                    style={{
                      padding: '10px',
                      textAlign: 'center',
                      borderBottom: '1px solid #e6e6e6',
                    }}
                  >
                    {item.skus} Pieces
                  </td>
                  <td
                    style={{
                      padding: '10px',
                      textAlign: 'center',
                      borderBottom: '1px solid #e6e6e6',
                    }}
                  >
                    {item.products}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed',
            bottom: '0px',
            width: '84%',
            backgroundColor: '#f7f7f7',
            padding: '10px',
          }}
        >
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '5px 15px',
                  borderRadius: '5px',
                }}
              ></div>
              <span>Available</span>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div
                style={{
                  backgroundColor: '#e3f3ff',
                  padding: '5px 15px',
                  borderRadius: '5px',
                }}
              ></div>
              <span>Occupied</span>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div
                style={{
                  backgroundColor: '#1368ec',
                  padding: '5px 15px',
                  borderRadius: '5px',
                }}
              ></div>
              <span>Selected</span>
            </div>
          </div>
        </div>

        {/* Popup */}
        {['A1', 'B1', 'C1', 'D1', 'A2', 'B2', 'C2', 'D2', 'A3', 'B3', 'C3', 'C4', 'A4', 'B4', 'C4', 'C5', 'A5', 'B5', 'C5', 'D5'].map((zone, idx) => (
          <Popup 
            key={idx} 
            isOpen={isPopupOpen && selectedItem === zone} 
            onClose={closePopup} 
            selectedItem={zone} 
            zoneName={zoneName} // Use state-managed zoneName
          />
        ))}
      </div>
    </div>
  );
}

export default SelectPage;