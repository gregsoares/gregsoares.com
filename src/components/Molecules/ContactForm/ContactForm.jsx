import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Input from '../../Atoms/Input'
import Label from '../../Atoms/Label/Label'
import Button from '../../Atoms/Button'

//TODO: Add "Message Sent" after successful message delivery
//TODO: form Validation
const ContactForm = () => {
  const [fieldCompleted, setFieldCompleted] = useState({
    user_name: false,
    user_email: false,
    message: false,
  })
  const formRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    console.log(typeof formRef.current)
    console.log(formRef.current)
    //TODO: Export this function to utility file
    emailjs
      .sendForm(
        'service_nrcrtt7',
        'template_a004y3v',
        formRef.current,
        'G_7Uq3PGyX3qRNPFC'
      )
      .then(() => {
        e.target.reset()
        error && setError(false)
      })
      .catch(error => {
        setError(true)
        console.log(error)
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
    console.log('handleInputCompleted:: \nname: %o\nvalue: %o', name, value)

    setFieldCompleted(fieldCompleted => ({
      ...fieldCompleted,
      [name]: value,
    }))
  }
  console.log('form input states:\n %o', fieldCompleted)
  console.log(isFormCompleted())

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
                <h4 className='text-2xl font-semibold'>
                  Want to work with us?
                </h4>
                <p className='leading-relaxed mt-1 mb-4 text-gray-500'>
                  Complete this form and we will get back to you in 24 hours.
                </p>
                {/* Input(+label) component here */}
                <div className='relative w-full mb-3 mt-8'>
                  <Label htmlFor='user_name' text='Name' />
                  <Input
                    inputCompleted={e => handleInputCompleted(e)}
                    name='user_name'
                    placeholder='Full Name'
                  />
                </div>

                <div className='relative w-full mb-3'>
                  <Label htmlFor='user_email' text='Email' />

                  <Input
                    inputCompleted={e => handleInputCompleted(e)}
                    name='user_email'
                    type='email'
                    placeholder='Email'
                  />
                </div>

                <div className='relative w-full mb-3'>
                  <Label htmlFor='message' text='Message' />
                  <Input
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
