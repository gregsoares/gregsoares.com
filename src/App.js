import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/Molecules/TopNav';
// import Components from './pages/Components';
import Home from './pages/Home/Home';
// import ToDo from './pages/ToDo/ToDo';
import Footer from './components/organisms/Footer/Footer';
// import About from './pages/About/About';

const App = () => (
  <>
    <TopNav windowWidth={window.innerWidth > 1023 ? 'desktop' : 'mobile'} />
    <Home />
    {/* <Route exact path="/" element={<Home />} /> 
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/todo" element={<ToDo />} />
      <Route exact path="/Components" element={<Components />} /> */}
    {/* <Route exact path="/about" element={<About />} /> */}
    <Footer />
  </>
);

export default App;
