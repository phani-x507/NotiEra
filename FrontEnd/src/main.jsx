import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css'
import { Login } from './UserPanel/Login.jsx'
import { CreateNotes } from './UserPanel/CreateNotes.jsx';
import { Dashboard } from './UserPanel/Dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}  />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/create' element={<CreateNotes />} />
    </Routes>
  </BrowserRouter>
)
