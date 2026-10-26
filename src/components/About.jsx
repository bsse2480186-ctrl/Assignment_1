import Breadcrumb from './Breadcrumb'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()

  return (
    <div className="container mt-4">
      <Breadcrumb current="About" />
      <h2>About</h2>
      <p className="mt-3">
        This project was made to practice React basics. It uses components, props,
        state, routing and a simple form, all styled with Bootstrap.
      </p>
      <Button label="Go back home" variant="outline-primary" onClick={() => navigate('/')} />
    </div>
  )
}

export default About
