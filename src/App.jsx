import "./sass/main.scss";

import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Learn from "./components/Learn";
import Concept from "./components/Concept";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="agency">
      <NavBar />
      <Hero />
      <Learn />
      <Learn />
      <Concept />
      <Concept />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
