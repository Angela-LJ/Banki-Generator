import React, { useState } from "react";
import "./scrollbar.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


export default function ScrollBar({ handleTypeSelection }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const [clickEnabled, setClickEnabled] = useState(true);

  function slide(direction) {
    setSlideDirection(direction)
    
    setTimeout(() => {
      let newIndex; 

      if (direction === 'left'){
        newIndex = (currentIndex - 1 + scrollItems.length) % scrollItems.length
      } else if (direction === 'right'){
        newIndex = (currentIndex + 1) % scrollItems.length
      }

      setCurrentIndex(newIndex)
      setSlideDirection("")

      const currentItem = scrollItems[newIndex]
      handleTypeSelection(currentItem.toLowerCase())
    }, 300)
  }

  const slideLeft = () => {
    if (!clickEnabled) return;
    slide('left');
    setClickEnabled(false)
    setTimeout(() => {
      setClickEnabled(true)
    }, 700)
  }

  const slideRight = () => {
    if (!clickEnabled) return;
    slide('right');
    setClickEnabled(false)
    setTimeout(() => {
      setClickEnabled(true)
    }, 700)
  }

  const scrollItems = ["Javascript", "Git", "Python", "C", "Tailwind"];

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

