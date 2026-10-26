import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">LearnSpace</Link>
      <div className="navbar-nav ms-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/courses">Courses</Link>
      </div>
    </nav>
  )
}

export default Navbar