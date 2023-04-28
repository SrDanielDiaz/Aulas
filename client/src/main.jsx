import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AulaContextProvider } from './Aula/context/AulaContext'
import { IndexContextProvider } from './context/IndexContext'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IndexContextProvider>
      <AulaContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AulaContextProvider>
    </IndexContextProvider>
  </React.StrictMode>
)
