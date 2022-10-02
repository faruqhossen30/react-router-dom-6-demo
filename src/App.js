import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Item from './components/Item';

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Post from './pages/Post';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path='/' element={ <Home /> }/>
        <Route  path='/about' element={ <About /> }/>
        <Route  path='/contact' element={ <Contact /> }/>
        <Route  path='/post/:id' element={ <Post /> }/>
        <Route  path='/products' element={ <Product /> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
