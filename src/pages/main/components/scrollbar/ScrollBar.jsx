import React, { useState } from "react";
import "./scrollbar.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { Button } from '../index';

export default function ScrollBar({ handleTypeSelection }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(""); // New state for slide direction

  const slideLeft = () => {
    setSlideDirection("left"); // Set slide direction to "left"
    setTimeout(() => {
      const newIndex = (currentIndex - 1 + scrollItems.length) % scrollItems.length;
      setCurrentIndex(newIndex);
      setSlideDirection(""); // Reset slide direction
      const currentItem = scrollItems[newIndex];
      handleTypeSelection(currentItem.toLowerCase()); // Pass the value to handleTypeSelection
    }, 200); // Adjust the delay time (in milliseconds) as needed
  };
  
  const slideRight = () => {
    setSlideDirection("right"); // Set slide direction to "right"
    setTimeout(() => {
      const newIndex = (currentIndex + 1) % scrollItems.length;
      setCurrentIndex(newIndex);
      setSlideDirection(""); // Reset slide direction
      const currentItem = scrollItems[newIndex];
      handleTypeSelection(currentItem.toLowerCase()); // Pass the value to handleTypeSelection
    }, 200); // Adjust the delay time (in milliseconds) as needed
  };

  const scrollItems = ["Javascript", "Git", "Tailwind", "Python", "C", "This", "That", "Someother"];

  const visibleItems = [scrollItems[currentIndex]];
  
  return (
    <div className="scroll-container">
      <div className={`scroll-chevron -left-14`}>
        <BsChevronCompactLeft className="scroll-svg" 
        onClick={() => slideLeft(visibleItems[0])} 
        size={45} />
      </div>
      <div id="slider" className={`scroll-items ${slideDirection}`}>
        {visibleItems.map((item, index) => {
          return (
            <div className="btn-container" key={index}>
              <button 
                className={`select-btn`}
                id={item.toLowerCase()}
                text={item}
                >
                {item}
              </button>
            </div>
          );
        })}
      </div>
      <div className={`scroll-chevron -right-14`}>
        <BsChevronCompactRight className="scroll-svg" 
        onClick={() => slideRight(visibleItems[0])}
        size={45} />
      </div>
    </div>
  );
}

