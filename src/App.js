
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookingPage from './Componants/BookingPage';
import HomePage from './Componants/HomePage';
import About from './Componants/About';
import Header from './Componants/Header';
import Specials from './Componants/Specials';
import Footer from './Componants/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Specials />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/contact' element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
