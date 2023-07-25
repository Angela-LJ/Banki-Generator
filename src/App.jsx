
import { Header, MainSection, BottomSection } from './pages/main/containers'
import { CardTextContextProvider } from "./pages/main/hooks/CardTextContext";
import './App.css'

function App() {

  return (
    <>
      <section className="hero">
        <Header />
        <CardTextContextProvider>
          <MainSection />
          <BottomSection />
        </CardTextContextProvider>
      </section>
    </>
  )
}

export default App
