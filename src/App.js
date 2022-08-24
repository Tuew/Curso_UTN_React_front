import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import News from './pages/News';



function App() {
  return (
    <div className="App">
      <Header />
      
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='services' element={<Services/>} />
          <Route path='news' element={<News/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
