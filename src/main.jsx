import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// LOGIN PAGE
import SignUp from './Sign-up/Sign-up'
// REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
