
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import { CartProvider } from "./CartContext";

import {
  BrowserRouter as Router,
  Routes,
  Route  
} from 'react-router-dom'
import Cart from "./components/pages/Cart";
import About from "./components/pages/About";

function App() {
  return (
    <div className='App w-[100%]'>
        <Router>
        <CartProvider>
        
          <Header/>    
            <Routes>
              <Route path="/" element={<Main/>} />          
              <Route path="/cart" element={<Cart/>}/>                           
              <Route path="/about" element={<About/>} />                           
            </Routes>
          <Footer/>
          
        </CartProvider>
        </Router>
      
    </div> 
  );
}

export default App;
