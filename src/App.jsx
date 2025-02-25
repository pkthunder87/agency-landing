import "./sass/main.scss";

import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Learn from "./components/Learn";
import Concept from "./components/Concept";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const isMobile = true;

const learn1 = {
  num: 1,
  img: `./assets/images/${isMobile ? "mobile" : "desktop"}/image-transform.jpg`,
  imgAlt: "Egg on yellow background",
  title: "Transform your brand",
  text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
};

const learn2 = {
  num: 2,
  img: `./assets/images/${isMobile ? "mobile" : "desktop"}/image-stand-out.jpg`,
  imgAlt: "Salmon colored cup on salmon colored background",
  title: "Stand out to the right audience",
  text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
};

const concept1 = {
  num: 1,
  imgBG: `url("./assets/images/${
    isMobile ? "mobile" : "desktop"
  }/image-graphic-design.jpg")`,
  title: "Graphic Design",
  text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
};

const concept2 = {
  num: 2,
  imgBG: `url("./assets/images/${
    isMobile ? "mobile" : "desktop"
  }/image-photography.jpg")`,
  title: "Photography",
  text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
};

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 540) setIsMobile(true);
  }, []);

  return (
    <div className="agency">
      <header className="agency__hero--bg">
        <NavBar isMobile={isMobile} />
        <Hero />
      </header>

      <main className="agency__main">
        <section className="agency__z">
          <Learn
            num={learn1.num}
            img={learn1.img}
            imgAlt={learn1.imgAlt}
            title={learn1.title}
            text={learn1.text}
          />
          <Learn
            num={learn2.num}
            img={learn2.img}
            imgAlt={learn2.imgAlt}
            title={learn2.title}
            text={learn2.text}
          />
          <Concept
            num={concept1.num}
            imgBG={concept1.imgBG}
            title={concept1.title}
            text={concept1.text}
          />
          <Concept
            num={concept2.num}
            imgBG={concept2.imgBG}
            title={concept2.title}
            text={concept2.text}
          />
        </section>

        <Testimonials />
      </main>

      <Gallery isMobile={isMobile} />
      <Footer />
    </div>
  );
}

export default App;
