import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './pages/CheckOut/CheckOut';
import Home from './pages/Home/Home';
import Footer from './pages/shared/Footer/Footer';
import Navbar from './pages/shared/Navbar/Navbar';
import SignIn from './pages/SignIn/SignIn';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/check-out' element={<CheckOut />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
