import React from 'react';
import './buttons.css';

export default function Button({ id, onClick, selectedValue, text }) {
  const buttonClassAdd = `options-btn button ${selectedValue === id ? 'selected-btn' : ''}`
  return (
    <div className="button-container">
      <button
        className={buttonClassAdd}
        id={id}
        onClick={() => onClick(id)}
      >
        {text}
      </button>
    </div>
  );
}


