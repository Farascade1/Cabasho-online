 import { createRoot } from 'react-dom/client'
 import './index.css'
 import Sidenav from './pages/Sidenav'
 import { BrowserRouter } from 'react-router-dom'
 import Header from './components/Header'
import Hero from './components/Hero'
import Complaint from './pages/complaint'
import App from './App'
 


createRoot(document.getElementById('root')).render(

  
  <BrowserRouter>
   <App />

  
  </BrowserRouter>
    

)
