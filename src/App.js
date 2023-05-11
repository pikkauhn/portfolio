import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe/AboutMe';
import Experience from './pages/Experience/Experience';


import { Route, Routes, HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <div className="screen">
          <Header />
          <Routes>
            <Route path="/" exact element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
        <Footer />
      </div>
    // </Router>
  );
}

export default App;