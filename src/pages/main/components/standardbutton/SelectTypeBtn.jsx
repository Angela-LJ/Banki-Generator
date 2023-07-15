import React from 'react';
import './buttons.css';

export default function Button({ id, onClick, selectedValue, text }) {
  const buttonClassAdd = `select-btn ${selectedValue === id ? 'selected-btn' : ''}`
  return (
    <>
      <button
        className={buttonClassAdd}
        id={id}
        onClick={() => onClick(id)}
      >
        {text}
      </button>
    </>
  );
}


