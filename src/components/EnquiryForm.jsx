import { useState } from 'react'

function EnquiryForm() {
  const [studentName, setStudentName] = useState('')
  const [courseName, setCourseName] = useState('')
  const [submitted, setSubmitted] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted({ studentName, courseName })
    setStudentName('')
    setCourseName('')
  }

  return (
    <div className="card p-4 mt-4">
      <h4>Course Enquiry Form</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            className="form-control"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {submitted && (
        <div className="alert alert-info mt-3">
          <p className="mb-1">Student Name: {submitted.studentName}</p>
          <p className="mb-0">Course Name: {submitted.courseName}</p>
        </div>
      )}
    </div>
  )
}

export default EnquiryForm