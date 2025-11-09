import { useState } from 'react';
import TextInput from '../../Atoms/TextInput/TextInput';
import Title from '../../Atoms/Title';
import Button from '../../Atoms/Button';

const AddItem = ({ handleAddItem }) => {
  const [item, setItem] = useState({
    title: '',
    category: '',
    isActive: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem(item, e);
    setItem({ ...item, title: '' });
  };
  return (
    <div className="add-item px-auto mx-1 flex justify-center items-center ">
      <div className="add-item__container px-4 py-4 rounded-xl shadow-lg bg-slate-300 ">
        <Title text="Item" />
        <form
          onSubmit={(e) => handleSubmit(e, item, setItem)}
          onReset={() =>
            setItem({
              title: '',
              category: '',
              isActive: true
            })
          }
        >
          <TextInput item={item} setItem={setItem} />
          <section className="justify-center p-1 m-1 items-center flex">
            <Button
              className="mr-1 bg-green-400 shadow-sm rounded-lg border border-gray-300 p-2 text-sm"
              type="submit"
            >
              Save
            </Button>
            <Button
              className="mr-1 bg-gray-400 shadow-sm  rounded-lg border border-gray-300 p-2 text-sm"
              type="reset"
            >
              Clear
            </Button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
