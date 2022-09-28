
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import { CartProvider } from "./CartContext";

function App() {
  return (
    <div className='App w-[100%]'>
      <CartProvider>
        <Header/>              
          <Main/>        
        <Footer/>
      </CartProvider>
    </div> 
  );
}

export default App;
