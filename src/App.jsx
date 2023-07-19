import { Header, MainSection } from './pages/main/containers'
import { ScrollBar, ArcadeButtonLightP, ArcadeButtonDarkP, ArcadeButtonLightB, ArcadeButtonDarkB } from './pages/main/components'
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
          <ArcadeButtonLightP />
          <ArcadeButtonDarkP />
        </div>
        <div className='bottom-grid-children grid-scrollbar'>
          <ScrollBar
            handleTypeSelection={handleTypeSelection}
          />
        </div>
        <div className="bottom-grid-children grid-arcade-right">
          <ArcadeButtonLightB />
          <ArcadeButtonDarkB />
        </div>
      </section>
    </>
  )
}

export default App
