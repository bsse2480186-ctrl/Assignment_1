function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">&copy; {year} My React App. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
