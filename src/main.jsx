import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/index.jsx'
import './styles/global.css'
import './assets/font/PokemonGB.ttf'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
