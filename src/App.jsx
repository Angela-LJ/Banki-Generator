import { Header, MainSection } from './pages/main/containers'
import { ScrollBar, ArcadeButton } from './pages/main/components'
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
        <div className="bottom-grid-children grid-arcade-left">
          <ArcadeButton />
          <ArcadeButton />
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
