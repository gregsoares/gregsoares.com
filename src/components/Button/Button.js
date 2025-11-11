const Button = ({ text, onClick, type, disabled }) => (
  <button
    className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:bg-gray-800"
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
