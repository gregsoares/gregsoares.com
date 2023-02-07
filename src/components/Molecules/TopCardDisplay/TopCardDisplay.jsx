import Card from './Card'

const cardData = [
  {
    icon: 'fas fa-award',
    iconBackgroundColor: 'bg-blue-500',
    title: 'Love at First Struggle',
    description: [
      `Reaching people all over the world was mind-blowing as an 8 year old. mIRC real-time chat allowed me to type and have an instant response from someone on the other side of the world. I was hooked.`,
      'This introduced me to scripting, networking, hacking and being self-taugh meant making, and seemingly more often breaking things too, so I had to learn to fix them.',
    ],
  },
  {
    icon: 'fas fa-retweet',
    iconBackgroundColor: 'bg-teal-500',
    title: 'The Connection',
    description: [
      `IRC scripting gave me a taste of how programming allowed me to see an issue and solve it, and even automate things like an admin bot to manage a channel.`,
      `Networking was a natural progression, finding out how things connected to each other and how they communicated. I was fascinated by how the internet worked and how I could make it work for me.`,
      `I've always been a curious person, a problem solver a tinkerer, and now I'm fortunate enough to still play with the network, programming and even cybersecurity.`,
    ],
  },
  {
    icon: 'fas fa-fingerprint',
    iconBackgroundColor: 'bg-yellow-500',
    title: 'Never Stop Learning',
    description: [
      'Writing code allows me to create solutions to problems, improve processes and automate tasks. Networking allows me to understand the underlying systems where it all happens. ',
      `Cybersecurity is a mindset. It's about understanding the risks and how to mitigate them. Always thinking how can this be used and abused, and keeping up with the the latest threats.`,
    ],
  },
]

const CardSection = () => {
  return (
    <section className='pb-20 bg-gray-200 -mt-24'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap' id='card-container'>
          {cardData.map((card, index) => (
            <Card key={index + 1} {...card} />
          ))}
          {/* </div>

        <div className='flex flex-wrap items-center mt-32'>
          <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
            <div className='text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-500'>
              <i className='fas fa-user-friends text-xl'></i>
            </div>
            <h3 className='text-3xl mb-2 font-semibold leading-normal'>
              From the Ground Up
            </h3>
            <p className='text-lg font-light leading-relaxed my-4 text-gray-600'>
              One
            </p>
            <p className='text-lg font-light leading-relaxed mb-4 text-gray-600'>
              Two
            </p>
            <p className='text-lg font-light leading-relaxed mb-4 text-gray-600'>
              Three
            </p>
            <p className='text-lg font-light leading-relaxed mb-4 text-gray-600'>
              Conclusion
            </p>
          </div>

          <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-500'>
              <img
                alt='young people laughing with a laptop on the table'
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
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default CardSection
