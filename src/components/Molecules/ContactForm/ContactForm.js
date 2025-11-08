import { useRef, useState } from 'react'
import { sendEmail } from '../../../utility/email'
import Input from '../../Atoms/Input'
import Label from '../../Atoms/Label/Label'
import Button from '../../Atoms/Button'

const ContactForm = ({ successToast, failToast }) => {
  const [fieldCompleted, setFieldCompleted] = useState({
    user_name: false,
    user_email: false,
    message: false,
  })
  const [error, setError] = useState({
    user_name: false,
    user_email: false,
    message: false,
  })
  const formRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    sendEmail(formRef.current)
      .then(() => {
        successToast()
        e.target.reset()
        error && setError(false)
        setFieldCompleted({
          user_name: false,
          user_email: false,
          message: false,
        })
      })
      .catch(error => {
        console.log(error)
        failToast()
      })
  }

  function isFormCompleted() {
    const areAllFieldsCompleted = Object.values(fieldCompleted).every(el => el)
    if (areAllFieldsCompleted) {
      return true
    }
    return false
  }

  function handleInputCompleted(e) {
    const { name, value } = e

    setFieldCompleted(fieldCompleted => ({
      ...fieldCompleted,
      [name]: value,
    }))
  }

  return (
    <section
      className='relative block py-24 bg-gray-800'
      id='contactFormContainer'
    >
      <form
        className='container mx-auto px-4'
        ref={formRef}
        onSubmit={e => handleSubmit(e)}
      >
        <div className='flex flex-wrap justify-center '>
          <div className='w-full lg:w-6/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200'>
              <div className='flex-auto p-5 lg:p-10'>
                <h4 className='text-2xl font-semibold'>Send a quick message</h4>
                <p className='leading-relaxed mt-1 mb-4 text-gray-500'>
                  I'd love to hear from you.
                </p>
                <div className='relative w-full mb-3 mt-8'>
                  <Label htmlFor='user_name' text='Name' />
                  <Input
                    hasError={error.user_name}
                    inputCompleted={e => handleInputCompleted(e)}
                    name='user_name'
                    placeholder='Full Name'
                  />
                </div>

                <div className='relative w-full mb-3'>
                  <Label htmlFor='user_email' text='Email' />

                  <Input
                    hasError={error.user_email}
                    inputCompleted={e => handleInputCompleted(e)}
                    name='user_email'
                    type='email'
                    placeholder='Email'
                  />
                </div>

                <div className='relative w-full mb-3'>
                  <Label htmlFor='message' text='Message' />
                  <Input
                    hasError={error.message}
                    inputCompleted={e => handleInputCompleted(e)}
                    name='message'
                    type='textarea'
                    placeholder='Type a message...'
                  />
                </div>
                <div className='text-center mt-6'>
                  <Button
                    disabled={!isFormCompleted()}
                    type='submit'
                    text='Send Message'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
