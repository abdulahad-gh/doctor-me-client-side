import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './pages/CheckOut/CheckOut';
import Home from './pages/Home/Home';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Footer from './pages/shared/Footer/Footer';
import Navbar from './pages/shared/Navbar/Navbar';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/check-out' element={<RequireAuth><CheckOut /></RequireAuth>} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
