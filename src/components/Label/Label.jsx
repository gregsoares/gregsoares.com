const Label = ({ text, htmlFor }) => (
  <label
    htmlFor={htmlFor}
    className='block uppercase text-gray-600 text-xs font-bold mb-2'
  >
    {text}
  </label>
)

export default Label
