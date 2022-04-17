import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
