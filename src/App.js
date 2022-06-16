import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./Components/Molecules/TopNav";
import Components from "./Pages/Components";
import Home from "./Pages/Home/Home";
import ToDo from "./Pages/ToDo/ToDo";
import Footer from "./Components/Organisms/Footer/Footer";

const App = () => (
  <Router>
    <TopNav />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/todo" element={<ToDo />} />
      <Route exact path="/components" element={<Components />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
