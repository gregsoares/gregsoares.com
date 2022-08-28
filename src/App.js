import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNav from './components/Molecules/TopNav'
import Components from './Pages/Components'
import Home from './Pages/Home/Home'
import ToDo from './Pages/ToDo/ToDo'
import Footer from './components/organisms/Footer/Footer'

const App = () => (
  <Router>
    <TopNav windowWidth={window.innerWidth > 1023 ? 'desktop' : 'mobile'} />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/Home' element={<Home />} />
      <Route exact path='/todo' element={<ToDo />} />
      <Route exact path='/Components' element={<Components />} />
    </Routes>
    <Footer />
  </Router>
)

export default App
