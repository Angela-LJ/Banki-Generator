import './displaysection.css'
import React, { useState, useEffect } from 'react';
import { useCardTextContext } from "../../hooks/CardTextContext";


export default function DisplaySection({ }) {
  const { selectedTypeValue } = useCardTextContext();
  const [imagePath, setImagePath] = useState(selectedTypeValue);

  useEffect(() => {
    if (selectedTypeValue) {
      const formattedType = selectedTypeValue.toLowerCase();
      setImagePath(formattedType);
    }
  }, [selectedTypeValue]);
  
  return (
    <>
      {imagePath && (
        <>
          <img
            className={`svg-container ${selectedTypeValue === 'c' ? '' : 'hidden'}`}
            src="c.svg"
            alt="C"
          />
          <img
            className={`svg-container ${selectedTypeValue === 'git' ? '' : 'hidden'}`}
            src="git.svg"
            alt="Git"
          />
          <img
            className={`svg-container ${selectedTypeValue === 'javascript' ? '' : 'hidden'}`}
            src="javascript.svg"
            alt="JavaScript"
          />
          <img
            className={`svg-container ${selectedTypeValue === 'python' ? '' : 'hidden'}`}
            src="python.svg"
            alt="Python"
          />
        </>
      )}
    </>
  )
}