import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cards from './Components/Cards.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    {/*  here we can call multiple cards as many tou want */}
    {/* <Cards/>
    <Cards/> */}
  </React.StrictMode>,
)
