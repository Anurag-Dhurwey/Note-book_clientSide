import React from 'react'
import { Link, useLocation, useNavigate  } from 'react-router-dom'

export default function Navbar() {
  let Navigate=useNavigate();
  let location=useLocation();

  const handle_logout=()=>{
        localStorage.removeItem('auth-token');
        Navigate('/login')
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand f-bold " to={"/"}>InoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link f-bold  ${location.pathname==="/notes"? "active":""}`} aria-current="page" to={"/notes"}>Notes</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link f-bold  ${location.pathname==="/about"? "active":""}`}to={"/about"}>About</Link>
        </li>
        
      </ul>
      {!localStorage.getItem('auth-token')?<ul className='navbar-nav mr-auto mb-lg-0'>
      <li className="nav-item ">
          <Link className={`nav-link f-bold  ${location.pathname==="/login"? "active":""}`} aria-current="page" to={"/login"}>Login</Link>
        </li>
        <li className="nav-item ">
          <Link className={`nav-link f-bold  ${location.pathname==="/sinup"? "active":""}`}to={"/sinup"}>Sinup</Link>
        </li>
      </ul>
      :<ul>
        <li className="nav-item ">
          <button className={`nav-link f-bold `} onClick={handle_logout}>Logout</button>
        </li>
        </ul>}
    </div>
    
  </div>
</nav>
    </>

  )
}
