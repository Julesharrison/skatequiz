// Onyx button with pearl text. Passes through onClick, disabled, etc.
function Button({ className = '', ...props }) {
  return <button className={`button ${className}`.trim()} {...props} />
}

export default Button
