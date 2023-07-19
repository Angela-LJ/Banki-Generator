import './displaysection.css'
import React, { useState, useEffect } from 'react';


export default function DisplaySection({ selectedTypeValue }) {
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
            className={`h-24 w-24 ${selectedTypeValue === 'c' ? '' : 'hidden'}`}
            src="c.svg"
            alt="C"
          />
          <img
            className={`h-24 w-24 ${selectedTypeValue === 'git' ? '' : 'hidden'}`}
            src="git.svg"
            alt="Git"
          />
          <img
            className={`h-24 w-24 ${selectedTypeValue === 'javascript' ? '' : 'hidden'}`}
            src="javascript.svg"
            alt="JavaScript"
          />
          <img
            className={`h-24 w-24 ${selectedTypeValue === 'python' ? '' : 'hidden'}`}
            src="python.svg"
            alt="Python"
          />
        </>
      )}
    </>
  )
}