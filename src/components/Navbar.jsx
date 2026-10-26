import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My React App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={open ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={linkClass} to="/" onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/about" onClick={() => setOpen(false)}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/contact" onClick={() => setOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
