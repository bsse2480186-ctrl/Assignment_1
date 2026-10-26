import { Link } from 'react-router-dom'

function Breadcrumb({ current }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumb
