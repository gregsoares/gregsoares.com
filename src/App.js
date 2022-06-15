import { useState } from "react";
import { Link } from "react-router-dom";
import AddItem from "./components/Molecules/AddItem";
import ItemList from "./components/Organisms/ItemList";

const App = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = (item, e) => {
    e.preventDefault();
    setItems([...items, { id: Math.floor(Math.random() * 1029), ...item }]);
  };

  const handleItemClick = (id) =>
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <section className="bg-gray-100 py-4 px-1">
      <section className="mb-6 my-0 mx-4 text-center">
        <p className="mx-auto py-2 border border-slate-300 max-w-xs">
          {" "}
          <Link to="/components">Components</Link>
        </p>
      </section>
      <AddItem
        inputText={input}
        setInput={setInput}
        handleAddItem={handleAddItem}
      />
      <ItemList
        handleRemoveItem={handleRemoveItem}
        items={items}
        onClick={handleItemClick}
      />
    </section>
  );
};

export default App;
