import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Navigation from "../components/Navigation";
import Product from "../components/Product";

export default function Mainpage() {
  return (
  <div>
    <Navigation />
    <Home />
    <Product />
    <About />
    <Contact />
    

  </div>
  );
}
