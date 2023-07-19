import { Header, MainSection } from './pages/main/containers'
import { ScrollBar, ArcadeButton } from './pages/main/components'
import generate from '../src/assets/svg/generate.svg'
import answer from '../src/assets/svg/answer.svg'
import './App.css'
import { useState } from 'react';

function App() {
  const [selectedTypeValue, setSelectedTypeValue] = useState('javascript');

  const handleTypeSelection = (typeValue) => {
    setSelectedTypeValue(typeValue);
  }

  return (
    <>
      <Header />
      <MainSection 
      selectedTypeValue={selectedTypeValue}
      />
      <section className='bottom-grid'>
        <div className="bottom-grid-children grid-arcade-left w-full">
          <div className='svg-btn-container items-center w-auto'>
            <img className="-mb-6" src={generate} alt='Generate question button' />
            <ArcadeButton />
          </div>
        </div>
        <div className="bottom-grid-children grid-arcade-left w-full">
          <div className='svg-btn-container w-auto items-center'>
            <img className="-mb-4" src={answer} alt="Answer toggle button" />
            <ArcadeButton />
          </div>
        </div>
        <div className='bottom-grid-children grid-scrollbar'>
          <ScrollBar 
            handleTypeSelection={handleTypeSelection}
          />
        </div>
        <div className="bottom-grid-children grid-arcade-right">
          <ArcadeButton />
          <ArcadeButton />
        </div>
      </section>
    </>
  )
}

export default App
