import { useState, useEffect } from 'react'
import AddItem from '../../components/Molecules/AddItem'
import ItemList from '../../components/organisms/ItemList'

const ToDo = () => {
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')

  const clearInput = () => setInput('')

  const handleAddItem = (item, e) => {
    e.preventDefault()
    setItems([...items, { id: Math.floor(Math.random() * 1029), ...item }])
    clearInput()
  }

  const handleItemClick = id =>
    setItems(
      items.map(item =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    )

  const handleRemoveItem = id => {
    setItems(items.filter(item => item.id !== id))
  }

  useEffect(() => {
    const fromLocalStorage = localStorage.getItem('items')
    const itemsInLocalStorage =
      (fromLocalStorage && JSON.parse(fromLocalStorage)) || []
    itemsInLocalStorage.length &&
      localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  console.log('items', items)

  return (
    <div className='relative z-0 lg:pt-16 pt-40  pb-32 flex content-center items-center justify-center min-h-screen-75'>
      <div
        className='absolute top-0 w-full h-full bg-center bg-cover'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
        }}
      >
        <span
          id='blackOverlay'
          className='w-full h-full absolute opacity-75 bg-black'
        ></span>
      </div>
      <div className='container relative mx-auto'>
        <div className='items-center flex flex-wrap'>
          <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
            <div className='pr-12'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDo
