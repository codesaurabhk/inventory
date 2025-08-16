import React from 'react';
import { IoMdClose } from "react-icons/io";

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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          width: '90%', // Adjusted for better visibility
          maxHeight: '80vh', // Limits height with scrollbar if needed
          overflowY: 'auto', // Adds scrollbar if content overflows
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
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
        <div style={{ padding: '20px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                backgroundColor: '#e3f3ff',
                padding: '5px 10px',
                borderRadius: '4px',
                color: '#007bff',
              }}
            >
              {zoneName} - {selectedItem} {/* Display zone name before grid name */}
            </span>
            <input
              type="text"
              placeholder="Search"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
          <p style={{ color: '#666', margin: '20px 0' }}>
            You haven't added any products yet. Use browse or search to get started.
          </p>
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
  );
};

export default Popup;