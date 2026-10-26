function CourseCard({ name, description, duration, buttonText, onSelect }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="ratio ratio-16x9 bg-secondary text-white d-flex align-items-center justify-content-center">
        <span>Image</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="text-muted">Duration: {duration}</p>
        <button className="btn btn-dark w-100" onClick={onSelect}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default CourseCard