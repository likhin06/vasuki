import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/products";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Products/>
      <Contact/>
      <Testimonials />
      <Footer/>
    </div>
  );
}

export default App;
