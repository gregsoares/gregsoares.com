const Title = ({ text, isActive }) => (
  <label
    className={`text-xl font-semibold mx-2 my-3 ${
      isActive ? "line-through" : ""
    }`}
  >
    {text}
  </label>
);

export default Title;
