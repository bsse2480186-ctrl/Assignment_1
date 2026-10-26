import { Link } from 'react-router-dom'
import CourseCard from './CourseCard'

function Home() {
  return (
    <div>
      <div className="bg-dark text-white p-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Welcome to Learning Hub</h1>
          <p className="lead">Build your skills through well-learned opportunities.</p>
          <Link to="/courses" className="btn btn-primary">View Courses</Link>
        </div>
      </div>

      <div className="container mt-5">
        <h3 className="mb-4">Popular Courses</h3>
        <div className="row">
          <div className="col-md-4 mb-3">
            <CourseCard
              name="Web Development"
              image="/images/web.jpg"
              description="Learn HTML, CSS and React"
              duration="6 weeks"
              buttonText="Explore"
            />
          </div>
          <div className="col-md-4 mb-3">
            <CourseCard
              name="Database Basics"
              image="/images/database.jpg"
              description="Understand SQL and data"
              duration="4 weeks"
              buttonText="Explore"
            />
          </div>
          <div className="col-md-4 mb-3">
            <CourseCard
              name="Mobile Apps"
              image="/images/mobile.jpg"
              description="Build apps for phones"
              duration="8 weeks"
              buttonText="Explore"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home