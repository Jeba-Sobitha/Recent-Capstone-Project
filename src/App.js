
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Componants/Footer';
import Header from './Componants/Header';
import BookingPage from './Componants/BookingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
