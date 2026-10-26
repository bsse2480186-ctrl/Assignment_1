import { useState } from 'react'
import Breadcrumb from './Breadcrumb'
import Button from './Button'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')
  const [sentName, setSentName] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all the fields.')
      setSentName('')
      return
    }

    setError('')
    setSentName(form.name)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="container mt-4">
      <Breadcrumb current="Contact" />
      <h2>Contact</h2>

      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {sentName && (
        <div className="alert alert-success mt-3">
          Thanks {sentName}, your message has been sent.
        </div>
      )}

      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="form-control"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <Button label="Send" type="submit" />
      </form>
    </div>
  )
}

export default Contact
