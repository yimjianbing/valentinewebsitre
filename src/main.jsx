import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Valentine from './valentine.jsx'
import Valentine1 from './valentine1.jsx'
import Valentine2 from './valentine2.jsx'
import Valentine3 from './valentine3.jsx'
import Valentine4 from './valentine4.jsx'
import Valentine5 from './valentine5.jsx'
import Valentine6 from './valentine6.jsx'
import Valentine7 from './valentine7.jsx'
import Valentine8 from './valentine8.jsx'
import Valentinee from './valentinee.jsx'
import QR from './qr.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Valentine />} />
        <Route path="/valentine1" element={<Valentine1 />} />
        <Route path="/valentine2" element={<Valentine2 />} />
        <Route path="/valentine3" element={<Valentine3 />} />
        <Route path="/valentine4" element={<Valentine4 />} />
        <Route path="/valentine5" element={<Valentine5 />} />
        <Route path="/valentine6" element={<Valentine6 />} />
        <Route path="/valentine7" element={<Valentine7 />} />
        <Route path="/valentinee" element={<Valentinee />} />
        <Route path="/valentine8" element={<Valentine8 />} />
        <Route path="/valentine" element={<App />} />
        <Route path ="/qr" element={<QR />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)