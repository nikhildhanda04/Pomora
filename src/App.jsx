import { Route } from 'react-router-dom'
import './App.css'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import LandingPage from './screens/LandingPage'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
