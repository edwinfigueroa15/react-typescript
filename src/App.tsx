import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRouter } from './Router'
import { NavBar } from './components/molecules'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full mb-6" style={{ backgroundColor: '#111827', color: '#ffffff' }}>
          <NavBar />
        </div>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
