import { Link } from 'react-router-dom'
import Card from './Card'

const cardData = [
  {
    icon: 'fas fa-award',
    iconBackgroundColor: 'bg-red-400',
    title: 'Awarded Agency',
    description:
      ' Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.',
  },
  {
    icon: 'fas fa-retweet',
    iconBackgroundColor: 'bg-teal-500',
    title: 'Free Revisions',
    description:
      'Keep you user engaged by providing meaningful information.  Remember that by this time, the user is curious.',
  },
  {
    icon: 'fas fa-fingerprint',
    iconBackgroundColor: 'bg-green-500',
    title: 'Verified Company',
    description:
      ' Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!',
  },
]

const CardSection = () => {
  return (
    <section className='pb-20 bg-gray-200 -mt-24'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap' id='card-container'>
          {cardData.map(
            (card, index) => (
              console.log('Index from cardData.map: ', index),
              (<Card keyIndex={index + 1} {...card} />)
            )
          )}
        </div>

        <div className='flex flex-wrap items-center mt-32'>
          <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
            <div className='text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
              <i className='fas fa-user-friends text-xl'></i>
            </div>
            <h3 className='text-3xl mb-2 font-semibold leading-normal'>
              Working with us is a pleasure
            </h3>
            <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-600'>
              Don't let your uses guess by attaching tooltips and popoves to any
              element. Just make sure you enable them first via JavaScript.
            </p>
            <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-gray-600'>
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              Just make sure you enable them first via JavaScript.
            </p>
            <Link to='/' className='font-bold text-gray-700 mt-8'>
              Check Notus React!
            </Link>
          </div>

          <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-500'>
              <img
                alt='...'
                src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
                className='w-full align-middle rounded-t-lg'
              />
              <blockquote className='relative p-8 mb-4'>
                <h4 className='text-xl font-bold text-white'>
                  Top Notch Services
                </h4>
                <p className='text-md font-light mt-2 text-white'>
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSection
