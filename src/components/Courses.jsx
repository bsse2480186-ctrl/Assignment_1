import { useState } from 'react'
import CourseCard from './CourseCard'
import EnquiryForm from './EnquiryForm'

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState('')

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Courses</h3>

      {selectedCourse ? (
        <div className="alert alert-success">Selected Course: {selectedCourse}</div>
      ) : (
        <div className="alert alert-warning">Please select a course.</div>
      )}

      <div className="row">
        <div className="col-md-4 mb-3">
          <CourseCard name="Web Development" description="Learn HTML, CSS and React" duration="6 weeks"
            buttonText="Select Course" onSelect={() => setSelectedCourse('Web Development')} />
        </div>
        <div className="col-md-4 mb-3">
          <CourseCard name="Database Basics" description="Understand SQL and data" duration="4 weeks"
            buttonText="Select Course" onSelect={() => setSelectedCourse('Database Basics')} />
        </div>
        <div className="col-md-4 mb-3">
          <CourseCard name="Mobile Apps" description="Build apps for phones" duration="8 weeks"
            buttonText="Select Course" onSelect={() => setSelectedCourse('Mobile Apps')} />
        </div>
      </div>

      <EnquiryForm />
    </div>
  )
}

export default Courses