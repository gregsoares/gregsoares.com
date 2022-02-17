import React from 'react';
import CardDeck from '../../components/CardDeck';
import Hero from '../../components/Hero';
import LargeCard from '../../components/LargeCard';
import PreviewCard from '../../components/PreviewCard';
import TopHeader from '../../components/TopHeader';

const Test = () => (
  <section className='pageGrid'>
    <TopHeader />
    <Hero />
    <LargeCard />
    <CardDeck>
      <PreviewCard />
    </CardDeck>
  </section>
);

export default Test;
