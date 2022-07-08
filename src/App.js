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
import { impressum } from "./pages/impresssum";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';





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
      <About />
      <Newsletter />
      <Contact />
      <Bestlist />
      <BackToTopButton />
      <Licensing />
      <Footer />
      
    </div>
    
  )

}
export default App;
