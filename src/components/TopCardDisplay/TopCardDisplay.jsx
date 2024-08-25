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
    <section className='pb-20 bg-gray-200 -mt-24 '>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap' id='card-container'>
          {cardData.map((card, index) => (
            <Card key={index + 1} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardSection
