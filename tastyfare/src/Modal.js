import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgb(34,34,34)',
  zIndex: 1000,
  height: '90%',
  width: '90%',
  overflowY: 'auto',  // Ensure content is scrollable if too large
  padding: '20px',    // Optional: Add padding for better appearance
  borderRadius: '8px' // Optional: Round the corners
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000
};

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button
          className='btn bg-danger fs-4'
          style={{ position: 'absolute', top: '10px', right: '10px' }}
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  );
}
