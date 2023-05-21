import { useEffect, useRef, useState } from "react";
import "../App.css";
import Amenities from "../components/Amenities";
import Body from "../components/Body";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Newsletter from "../components/Newsletter";
import Popup from "../components/Popup";
import Testimonial from "../components/Testimonial";

function Main() {
  const hero = useRef(null);
  const aboutus = useRef(null);
  const contactus = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 120,
      behavior: "smooth",
    });
  };
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => setPopup(true), 5000);
  }, []);

  return (
    <div className="App">
      <Nav
        scrollToSection={scrollToSection}
        reference={{ hero, aboutus, contactus }}
      />
      <Hero
        scrollToSection={scrollToSection}
        contactus={contactus}
        reference={hero}
      />
      <Body reference={aboutus} />
      <Gallery />
      <Amenities />
      <Testimonial />
      <Contact refrence={contactus} />
      <Newsletter />
      <Footer />

      {popup && <Popup setPopup={setPopup} />}
    </div>
  );
}

export default Main;
