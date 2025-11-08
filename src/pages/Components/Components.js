import React, { useReducer } from 'react'
import Button from '../../components/Atoms/Button'
import Title from '../../components/Atoms/Title'
import Text from '../../components/Atoms/Text'

const isInRangeOf = (num, min, max) => num >= min && num <= max
const Components = () => {
  const [list, setList] = useReducer((prev, next) => {
    if (isInRangeOf(next, 0, 10)) {
      return next
    } else {
      return prev
    }
  }, 0)

  return (
    <section className='bg-slate-400 min-h-screen py-24 px-4'>
      <Title text='Click to test reducer' />
      <Button
        text='Count'
        onClick={() => {
          setList(list + 1)
        }}
      />
      <Button text='Reset' onClick={() => setList(0)} />
      <div className='my-4'>
        <Text text={list} />
      </div>
    </section>
  )
}

export default Components
