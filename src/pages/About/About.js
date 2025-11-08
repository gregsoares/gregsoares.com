import { useRef, useState, useReducer, useEffect } from 'react'

const About = () => {
  const [error, setError] = useState(false)
  const [dataList, setDataList] = useReducer((state, newState) => {
    return [...state, newState]
  }, [])

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const addressRef = useRef(null)
  const cityRef = useRef(null)
  const stateRef = useRef(null)
  const zipRef = useRef(null)

  function isFormFilled() {
    const inputData = {
      name: { value: nameRef.current.value, error: false },
      email: { value: emailRef.current.value, error: false },
      phone: { value: phoneRef.current.value, error: false },
      address: { value: addressRef.current.value, error: false },
      city: { value: cityRef.current.value, error: false },
      state: { value: stateRef.current.value, error: false },
      zip: { value: zipRef.current.value, error: false },
    }

    if (!inputData?.name?.value) {
      inputData.name.error = true
    }
    if (!inputData?.email?.value) {
      inputData.email.error = true
    }
    if (!inputData?.phone?.value) {
      inputData.phone.error = true
    }
    if (!inputData?.address?.value) {
      inputData.address.error = true
    }
    if (!inputData?.city?.value) {
      inputData.city.error = true
    }
    if (!inputData?.state?.value) {
      inputData.state.error = true
    }
    if (!inputData?.zip?.value) {
      inputData.zip.error = true
    }
    return inputData
  }

  function resetInputFields() {
    nameRef.current.value = ''
    emailRef.current.value = ''
    phoneRef.current.value = ''
    addressRef.current.value = ''
    cityRef.current.value = ''
    stateRef.current.value = ''
    zipRef.current.value = ''
  }
  function updateDataList() {
    setError(false)
    const formDataWithErrorState = isFormFilled()

    if (
      formDataWithErrorState?.name?.error ||
      formDataWithErrorState?.email?.error ||
      formDataWithErrorState?.phone?.error ||
      formDataWithErrorState?.address?.error ||
      formDataWithErrorState?.city?.error ||
      formDataWithErrorState?.state?.error ||
      formDataWithErrorState?.zip?.error
    ) {
      setError(true)
    } else {
      resetInputFields()
    }
    setDataList(formDataWithErrorState)
  }

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }, [error])

  return (
    <div className='py-24 bg-slate-400 min-h-screen'>
      <section id='formSection'>
        <form
          className='flex flex-col items-center justify-center w-1/2 mx-auto'
          onSubmit={e => {
            e.preventDefault()
            updateDataList()
          }}
        >
          <input
            className={`w-1/2 p-2 mb-2 text-slate-900 bg-slate-200 rounded ${
              dataList?.name?.error && 'bg-red-200'
            }`}
            type='text'
            placeholder='Name'
            id='name'
            ref={nameRef}
          />
          <input
            className={`w-1/2 p-2 mb-2 text-slate-900 bg-slate-200 rounded ${
              dataList?.email?.error && 'bg-red-200'
            }`}
            type='text'
            placeholder='Email'
            id='email'
            ref={emailRef}
          />
          <input
            className={`w-1/2 p-2 mb-2 text-slate-900 bg-slate-200 rounded ${
              dataList?.phone?.error && 'bg-red-200'
            }`}
            type='text'
            placeholder='Phone'
            id='phone'
            ref={phoneRef}
          />
          <input
            className={`w-1/2 p-2 mb-2 text-slate-900 bg-slate-200 rounded ${
              dataList?.address?.error && 'bg-red-200'
            }`}
            type='text'
            placeholder='Address'
            id='address'
            ref={addressRef}
          />
          <input
            className={`w-1/2 p-2 mb-2 text-slate-900 bg-slate-200 rounded ${
              dataList?.city?.error && 'bg-red-200'
            }`}
            type='text'
            placeholder='City'
            id='city'
            ref={cityRef}
          />
          <input
            className={`w-1/2 p-2 mb-2 text-slate-900 bg-slate-200 rounded ${
              dataList?.state?.error && 'bg-red-200'
            }`}
            type='text'
            placeholder='State'
            id='state'
            ref={stateRef}
          />
          <input
            className={`w-1/2 p-2 mb-2 text-slate-900 bg-slate-200 rounded ${
              dataList?.zip?.error && 'bg-red-200'
            }`}
            type='text'
            placeholder='Zip'
            id='zip'
            ref={zipRef}
          />
          <button
            className='w-1/2 p-2 mb-2 text-slate-900 bg-slate-200 rounded'
            type='submit'
          >
            Submit
          </button>
        </form>
      </section>
      <section id='displayDataSection'>
        <div className='flex flex-col items-center justify-center w-1/2 mx-auto'>
          {dataList.map((item, index) =>
            item?.name?.value ? (
              <div
                key={index}
                className='flex flex-col items-center justify-center w-full p-2 mb-2 text-slate-900 bg-slate-200 rounded'
              >
                <label htmlFor='name'>
                  Name<p>{item?.name.value}</p>
                </label>
                <label htmlFor='email'>
                  Email<p>{item?.email.value}</p>
                </label>
                <label htmlFor='phone'>
                  Phone<p>{item?.phone.value}</p>
                </label>
                <label htmlFor='address'>
                  Address<p>{item?.address.value}</p>
                </label>
                <label htmlFor='city'>
                  City<p>{item?.city.value}</p>
                </label>
                <label htmlFor='state'>
                  State<p>{item?.state.value}</p>
                </label>
                <label htmlFor='zip'>
                  Zip<p>{item?.zip.value}</p>
                </label>
              </div>
            ) : (
              ''
            )
          )}
        </div>
      </section>
    </div>
  )
}

export default About
