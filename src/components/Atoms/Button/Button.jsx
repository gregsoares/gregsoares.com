const Button = ({ text, onClick, type }) => (
  <button
    className='m-2 border px-2 py-1 bg-slate-800 text-teal-400'
    type={type}
    onClick={onClick}
  >
    {text}
  </button>
)

export default Button
