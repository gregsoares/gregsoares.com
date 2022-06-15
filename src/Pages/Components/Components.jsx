import ItemList from "../../Components/Organisms/ItemList";

const Components = () => (
  <section className="min-h-screen bg-slate-400 p-4">
    <div className="bg-gray-100 p-8">
      <ItemList
        items={[
          { id: 123, title: "Title Here", category: "BAD", isActive: false },
        ]}
      />
    </div>
  </section>
);

export default Components;
