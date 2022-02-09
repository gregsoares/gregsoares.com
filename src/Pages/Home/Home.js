import React from 'react'
import CardDeck from '../../components/CardDeck'
import LeftContentSection from '../../components/LeftContentSection'
import RightContentSection from '../../components/RightContentSection'
import TopHeader from '../../components/TopHeader'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

import './Home.css'
import Card from '../../components/Card'
import Title from '../../components/Title'

const Home = () => {
  return (
    <main className='homePage'>
      <TopHeader />
      <Header />
      <Hero />
      <CardDeck />
      <RightContentSection>
        <Card
          icon={
            <svg
              width='80.01px'
              height='80.01px'
              viewBox='-8 0 80.01 80.01'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                id='Woolworth_Building'
                data-name='Woolworth Building'
                d='M464.544,471.486a32.009,32.009,0,0,1,6.183-60.873l-.583,2.178A29.987,29.987,0,0,0,456,463.4v-5.392h2V460h2V438h-2v-2h2V421.5h.018l-.013-.014L463,418.494l3,2.992-.013.014H466V436h2V426.01h-.01v-2H470v-2.994l-.007,0L474.018,406H474v-6h2l0-5.009a1,1,0,1,1,2,0L478,402h-2v2h2v-4h2v6h-.019l4.028,15.014-.008,0v2.994h1.99V425H486v11.007h2V421.5h.018l-.014-.014L491,418.494l3,2.992-.014.014H494v14.509h1.992v2H494v22h2v-2h2V463.4A29.987,29.987,0,0,0,483.89,412.8l-.585-2.179a32.006,32.006,0,1,1-18.761,60.866Zm5.456-.311a30.132,30.132,0,0,0,14,0v-9.169l-14,0Zm16-.554c.671-.212,1.344-.45,2-.709V468h2v1.034a30.082,30.082,0,0,0,6-3.835v-3.191l-10,0ZM464,468h2v1.912c.65.257,1.323.5,2,.709V462l-10,0v3.2a30.145,30.145,0,0,0,6,3.834V468h0Zm22-7.993h6v-22l-6,0Zm-16,0,14,0v-22l-14,0Zm-8,0h6V438l-6,0Zm28-37.683v13.689h2v-13.69l-1-1ZM470,436l14,0v-10h-6v-4h-2v4h-6Zm-8-13.684V436h2V422.319l-1-1Zm18-2.308v4h2v-2.763L477.911,406h-1.823L472,421.247v2.763h2v-4ZM482,470h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm20-4h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-8,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-8,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm28-8h-2v-2h2v2h0Zm-8,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-8,0h-2v-2h2v2h0Zm24-4h-2v-2h2v2h0Zm-8,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-8,0h-2v-2h2v2h0Zm24-4h-2v-2h2v2h0Zm-8,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-8,0h-2v-2h2v2h0Zm24-4h-2v-2h2v2h0Zm-8,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-8,0h-2v-2h2v2h0Zm24-4h-2v-2h2v2h0Zm-8,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-8,0h-2v-2h2v2h0Zm16-8h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm8-4h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm-4,0h-2v-2h2v2h0Zm4-12h-2v-2h2v2h0Zm0-4h-2v-2h2v2h0Z'
                transform='translate(-445 -393.99)'
                fill='#000'
              />
            </svg>
          }
          title='Woolworth Building'
          text='
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio maxime facere perferendis temporibus, incidunt praesentium hic ea ex autem?
        '
        />
        <Title>Lorem Title</Title>
        <p className='text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          voluptatibus? Tenetur provident non culpa cupiditate. At repudiandae
          exercitationem commodi, illum officiis obcaecati repellat,
          voluptatibus iusto consequatur accusantium facilis deserunt!
          Voluptates?
        </p>
      </RightContentSection>
    </main>
  )
}

export default Home
