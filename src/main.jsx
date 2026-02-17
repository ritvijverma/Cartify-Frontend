import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { AuthProvider } from './context/Auth.jsx'
import {store} from './app/store.js'
import { Provider } from 'react-redux'
import axios from 'axios'

if (import.meta.env.VITE_API) {
  axios.defaults.baseURL = import.meta.env.VITE_API;
}

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <AuthProvider>
  <BrowserRouter>
    <StrictMode>
    <App />
  </StrictMode>,
  </BrowserRouter>
  </AuthProvider>
  </Provider>

)
