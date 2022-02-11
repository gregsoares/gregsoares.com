import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import AboutMe from './Pages/AboutMe';
import Test from './Pages/Test';
import './App.css';

const App = () => {
  return (
    <main className='main'>
      <Router>
        <Route exact path='/' component={<Home />} />
        <Route exact path='/projects' component={<Projects />} />
        <Route exact path='/contact' component={<Contact />} />
        <Route exact path='/aboutme' component={<AboutMe />} />
        <Route exact path='/test' component={<Test />} />
      </Router>
    </main>
  );
};

export default App;
