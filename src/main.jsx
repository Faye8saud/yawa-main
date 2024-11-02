import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import './styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </Router>
  </StrictMode>,
)
