import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
import Button from './Button'

function Home() {
  const [clicks, setClicks] = useState(0)
  const navigate = useNavigate()

  const addClick = () => setClicks(clicks + 1)

  return (
    <div className="container mt-4">
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <h1 className="display-5 fw-bold">Welcome</h1>
        <p className="lead">A small React project built with Bootstrap.</p>
        <Button label="Contact us" variant="success" onClick={() => navigate('/contact')} />
      </div>

      <div className="alert alert-info text-center">
        Card buttons clicked: <strong>{clicks}</strong>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <Card
            title="Components"
            text="Each part of the page lives in its own file."
            buttonText="Click me"
            onButtonClick={addClick}
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Props"
            text="Cards and buttons get their content from props."
            buttonText="Click me"
            onButtonClick={addClick}
          />
        </div>
        <div className="col-md-4">
          <Card
            title="State"
            text="The counter above is kept with useState."
            buttonText="Click me"
            onButtonClick={addClick}
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <Button label="Reset counter" variant="secondary" onClick={() => setClicks(0)} />
      </div>
    </div>
  )
}

export default Home
