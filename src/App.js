import React from 'react';
import TopNav from './components/Molecules/TopNav';
import Home from './pages/Home';
import Footer from './components/organisms/Footer/Footer';

//TODO: Implement a context based system to switch pages
// // => use context and a Controller type of component what will return the page to be displayed, like a router.
const App = () => (
  <>
    {/* <TopNav windowWidth={window.innerWidth > 1023 ? 'desktop' : 'mobile'} /> */}
    <Home />
    <Footer />
  </>
);

export default App;
