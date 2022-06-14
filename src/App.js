import { useState } from "react";
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
