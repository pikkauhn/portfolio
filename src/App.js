import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe/AboutMe';


import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="screen">
        <Header />
        <Routes>
        <Route path="/portfolio" exact element={<AboutMe />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;