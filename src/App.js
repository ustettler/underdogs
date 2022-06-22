import "./App.css";
// Component Import
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Bestlist } from "./components/Bestlist/Bestlist";
import { Gallery } from "./components/Gallery/Gallery";
import { Location } from "./components/Location/Location";
import { Licensing } from "./components/Licensing/Licensing";
import { About } from "./components/About/About";
import { AboutGame } from "./components/AboutGame/AboutGame";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Contact } from "./components/Contact/Contact";
import { News } from "./components/News/News";
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import { Footer } from "./components/Footer/Footer";



function App() {
  return (
    // Template - hier wird die Seite zusammengestellt
    <div className="App">
      <Navbar />
      <Hero />
      <AboutGame />
      <Gallery />
      <Location />
      <News />
      <Licensing />
      <About />
      <Newsletter />
      <Contact />
      <Bestlist />
      <BackToTopButton />
      <Footer />
    </div>
  )

}
export default App;
