import About from "./Component/About";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Nav from "./Component/Nav";
import Portfolio from "./Component/Portfolio";
import Project from "./Component/Project";
import Service from "./Component/Service";
import Testimonial from "./Component/Testimonial";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Service />
      <About />
      <Project />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
