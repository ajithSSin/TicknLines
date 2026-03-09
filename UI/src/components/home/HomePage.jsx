import Navbar from "../nav/Navbar";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Stats from "./Stats";
import WhyChooseUs from "./WhyChooseUs";
import ContactCTA from "./ContactCTA";
import Footer from "../footer/Footer";


const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />  
      <WhyChooseUs />
      <Stats/>
      <ContactCTA />
      <Footer />
    </>
  );
};

export default HomePage;