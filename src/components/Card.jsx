import Button from './Button'

function Card({ title, text, buttonText, onButtonClick }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <div className="mt-auto">
          <Button label={buttonText} onClick={onButtonClick} />
        </div>
      </div>
    </div>
  )
}

export default Card
