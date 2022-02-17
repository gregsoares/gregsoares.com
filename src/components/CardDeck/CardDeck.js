import React from 'react';
import Card from '../Card';
import './CardDeck.css';

const CardDeck = ({ children }) => {
  return (
    <section className='carddeckContainer'>
      {/* <Card
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
      <Card
        icon={
          <svg
            width='80.01px'
            height='80.01px'
            viewBox='-8.01 0 80.01 80.01'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              id='Citigroup_Center'
              data-name='Citigroup Center'
              d='M618.544,337.486a32,32,0,0,1,8.414-61.234l-2.458,2.458a29.994,29.994,0,0,0-10.5,54V290h-.03v-2h4.052l7.884-7.884.021,0,5.491-5.491H631.4l10.569-10.569V264H644l0-3.01a1,1,0,1,1,2,0l0,3.01h1.971v1H648v67.707a29.972,29.972,0,0,0,2-47.906v-2.555a32.317,32.317,0,0,1,3.628,3.128,32.008,32.008,0,0,1-35.084,52.113ZM631,338a29.983,29.983,0,0,0,10.767-2H620.233A29.984,29.984,0,0,0,631,338Zm-15-4.027q.981.569,2,1.06V334h26v1.033q1.018-.491,2-1.059V266h-3.151l-8.177,8.177-.013,0-5.491,5.491.012,0L618.97,289.88V290H616ZM618,332v-2h26v2Zm0-4v-2h26v2Zm26-4H618v-2h26v2h0Zm0-4H618v-2h26v2h0Zm0-4H618v-2h26v2h0Zm0-4H618v-2h26v2h0Zm0-4H618v-2h26v2h0Zm0-4H618v-2h26v2h0Zm0-4H618v-2h26v2h0Zm-18-6v-2h10v2Z'
              transform='translate(-599 -259.99)'
              fill='#000'
            />
          </svg>
        }
        title='Citygroup Building'
        text='
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio maxime facere perferendis temporibus, incidunt praesentium hic ea ex autem?
        '
      />
      <Card
        icon={
          <svg
            width='80.01px'
            height='80.01px'
            viewBox='-8.01 0 80.01 80.01'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              id='Chrysler_Building'
              data-name='Chrysler Building'
              d='M156.544,203.486a32.011,32.011,0,0,1,5.067-60.63,8.959,8.959,0,0,0-1.185,2.393A29.993,29.993,0,0,0,152,198.707V188h2v.01h2L156,169a12.942,12.942,0,0,1,2-6.932V162a10.953,10.953,0,0,1,2-6.327V155a8.963,8.963,0,0,1,2-5.658V148a6.979,6.979,0,0,1,1.988-4.887L164,141a4.994,4.994,0,0,1,2-4v-2a3.006,3.006,0,0,1,2-2.829l0-5.181a1,1,0,1,1,2,0l0,5.181A3.006,3.006,0,0,1,172,135l0,2a4.994,4.994,0,0,1,2,4l-.011,2.088A6.978,6.978,0,0,1,176,148v1.342A8.963,8.963,0,0,1,178,155l0,.668A10.951,10.951,0,0,1,180,162v.07a12.941,12.941,0,0,1,2,6.93l0,19.011h2V188h2v10.706a29.994,29.994,0,0,0-8.428-53.459,8.939,8.939,0,0,0-1.185-2.392,32.007,32.007,0,1,1-19.843,60.63ZM158,198.01v3.9a30.006,30.006,0,0,0,22,0v-3.9h2v3.025c.661-.32,1.335-.676,2-1.06V196.01h-7v0h-1L176,170a7,7,0,0,0-14,0c0,3.867,0,26.006,0,26.006h-1v0h-7v3.964c.645.374,1.318.732,2,1.061V198.01Zm26-4v-4h-6v4Zm-30,0h6c0-1.036,0-2.418,0-4h-6Zm26-6L180,169a11,11,0,0,0-22,0V188.01h2c0-6.5,0-15.069,0-18.011a9,9,0,0,1,18,0l0,18.011Zm-2.437-28.795a9.005,9.005,0,0,0-17.126,0,13,13,0,0,1,17.126,0Zm-1.755-5.86a7,7,0,0,0-13.615,0,11,11,0,0,1,13.615,0Zm-1.832-5.858a5,5,0,0,0-9.952,0,9.008,9.008,0,0,1,9.952,0ZM172,141.673V141a3,3,0,1,0-6,0v.672a7.019,7.019,0,0,1,6,0Zm-2-5.573V135a1,1,0,0,0-2,0v1.1a5.048,5.048,0,0,1,2,0Zm8,65.911h-2v-4h2v4h0Zm-4,0h-2v-4h2v4h0Zm-4,0h-2v-4h2v4h0Zm-4,0h-2v-4h2v4h0Zm-4,0h-2v-4h2v4h0Zm12-6h-2v-4h2v4h0Zm-4,0h-2v-4h2v4h0Zm-4,0h-2v-4h2v4h0Zm8-6h-2v-4h2v4h0Zm-4,0h-2v-4h2v4h0Zm-4,0h-2v-4h2v4h0Zm6-6v-4h2v4Zm-4,0v-4h2v4Zm-4,0v-4h2v4Zm8-6v-4h2v4Zm-4,0v-4h2v4Zm-4,0v-4h2v4Zm8-6v-4h2v4Zm-4,0v-4h2v4Zm-4,0v-4h2v4Z'
              transform='translate(-137 -125.99)'
              fill='#000'
            />
          </svg>
        }
        title='Chrysler Building'
        text='
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio maxime facere perferendis temporibus, incidunt praesentium hic ea ex autem?
        '
      /> */}
      {children}
    </section>
  );
};

export default CardDeck;
