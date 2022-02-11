import React from 'react';
import CardDeck from '../../components/CardDeck';
import RightContentSection from '../../components/RightContentSection';
import TopHeader from '../../components/TopHeader';
import Header from '../../components/Header';
import Hero from '../../components/Hero';

import './Home.css';
import Card from '../../components/Card';
import Title from '../../components/Title';

const Home = () => {
  return (
    <main className='homePage'>
      <Header />
      <Hero />
      <CardDeck />
    </main>
  );
};

export default Home;
