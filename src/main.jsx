import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from './context/GlobalContext.jsx';
import CartProvider from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <GlobalProvider>
      <CartProvider>
      <BrowserRouter>
       <App />
      </BrowserRouter> 
      </CartProvider>
      </GlobalProvider>

   
  </StrictMode>,
)
