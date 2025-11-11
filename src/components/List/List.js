const List = ({ items }) => (
  <ul className="mt-2 mb-4 list-disc">
    {items.map((item) => (
      <li className="text-lg text-left text-gray-200 mb-6">{item}</li>
    ))}
  </ul>
);

export default List;
