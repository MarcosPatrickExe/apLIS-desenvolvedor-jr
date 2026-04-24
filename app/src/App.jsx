import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Sidebar from './components/SideBar';
import Medicos from './components/Medicos';
import Pacientes from './components/Pacientes';
import './App.css'


function App() {
  
  const [page, setPage] = useState('medicos');
  const [isOpen, setOpen] = useState(false);
  
  return (
    <div style={{ display: 'flex' }}>
      
      <Sidebar open={isOpen} setOpen={setOpen} setPage={setPage}  />

      <div style={{ marginLeft: 20 }}>
        {page === 'medicos' && <Medicos />}
        {page === 'pacientes' && <Pacientes />}
      </div>

    </div>
  )
}

export default App
