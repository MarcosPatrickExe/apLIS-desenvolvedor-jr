import '../styles/SideBar.css';

function Sidebar({ open, setOpen, setPage }) {
  return (
    <>
      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <div className={`sidebar ${open ? 'open' : ''}`}>
        <div onClick={() => setOpen(!open)} className="buttonSelect">☰</div>
         
        <h2 style={{color: 'white', marginTop: '30px' }} >Menu</h2>

        <button onClick={() => { setPage('medicos'); setOpen(false); }}>
          Médicos
        </button>

        <button onClick={() => { setPage('pacientes'); setOpen(false); }}>
          Pacientes
        </button>
      </div>
    </>
  );
}

export default Sidebar;