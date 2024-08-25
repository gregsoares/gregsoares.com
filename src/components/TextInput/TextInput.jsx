const TextInput = ({ item, setItem }) => (
  <input
    className='m-2 px-2 py-1 rounded-lg border border-gray-300'
    type='text'
    name='name'
    value={item.title}
    onChange={e => setItem({ title: e.target.value })}
  />
)

export default TextInput
