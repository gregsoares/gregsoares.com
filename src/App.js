import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/aboutme' element={<AboutMe />} />
          <Route exact path='/test' element={<Test />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
