import React from 'react';
import './LargeCard.css';

const LargeCard = () => (
  <article className='card_large'>
    <div className='image_wrapper'></div>
    <div className='content_wrapper'>
      <h3 className='card_title'>Lorem, ipsum dolor.</h3>
      <p className='card_description'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum culpa
        cupiditate, inventore porro ducimus quisquam? Corrupti eligendi
        voluptate cumque, sunt accusamus explicabo vitae nesciunt quod repellat
        ullam rem, nihil nisi!
      </p>
    </div>
  </article>
);

export default LargeCard;
