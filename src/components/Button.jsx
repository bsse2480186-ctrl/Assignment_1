function Button({ label, variant = 'primary', type = 'button', onClick }) {
  return (
    <button type={type} className={'btn btn-' + variant} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
