import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css'
import { Login } from './UserPanel/Login.jsx';
import { CreateNotes } from './UserPanel/CreateNotes.jsx';
import { Dashboard } from './UserPanel/Dashboard.jsx';
import { ViewNotes } from './UserPanel/ViewNotes.jsx';
import { Profile } from './UserPanel/Profile.jsx';
import { Register } from './UserPanel/Register.jsx';
import { EditNotes } from './UserPanel/EditNotes.jsx';
import { NotFound } from './UserPanel/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}  />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/create' element={<CreateNotes />} />
      <Route path='/view' element={<ViewNotes />} />
      <Route path='/edit' element={<EditNotes />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
