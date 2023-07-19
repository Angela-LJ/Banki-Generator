
import { Header, MainSection, BottomSection } from './pages/main/containers'

import './App.css'
import { useState } from 'react';

function App() {
  const [selectedTypeValue, setSelectedTypeValue] = useState('javascript');
  const handleTypeSelection = (typeValue) => {
    setSelectedTypeValue(typeValue);
  }

  return (
    <>
      <section className="hero">
        <Header />
        <MainSection 
        selectedTypeValue={selectedTypeValue}
        />
        <BottomSection
        handleTypeSelection={handleTypeSelection}
        />

      </section>
    </>
  )
}

export default App
