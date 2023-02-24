import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const formRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    console.log(typeof formRef.current)
    console.log(formRef.current)
    emailjs
      .sendForm(
        'service_nrcrtt7',
        'template_a004y3v',
        formRef.current,
        'G_7Uq3PGyX3qRNPFC'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
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
                <h4 className='text-2xl font-semibold'>
                  Want to work with us?
                </h4>
                <p className='leading-relaxed mt-1 mb-4 text-gray-500'>
                  Complete this form and we will get back to you in 24 hours.
                </p>
                <div className='relative w-full mb-3 mt-8'>
                  <label
                    className='block uppercase text-gray-600 text-xs font-bold mb-2'
                    htmlFor='user_name'
                  >
                    Name
                  </label>
                  <input
                    name='user_name'
                    type='text'
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    placeholder='Full Name'
                  />
                </div>

                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-gray-600 text-xs font-bold mb-2'
                    htmlFor='user_email'
                  >
                    Email
                  </label>
                  <input
                    name='user_email'
                    type='email'
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    placeholder='Email'
                  />
                </div>

                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-gray-600 text-xs font-bold mb-2'
                    htmlFor='message'
                  >
                    Message
                  </label>
                  <textarea
                    name='message'
                    rows='4'
                    cols='80'
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                    placeholder='Type a message...'
                  />
                </div>
                <div className='text-center mt-6'>
                  <button
                    className='bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='submit'
                    value='Send'
                  >
                    Send Message
                  </button>
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
