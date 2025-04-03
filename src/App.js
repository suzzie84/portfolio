import logo from './logo.svg';
import './App.css';
import Home from './homepage';
import NavBar from './Components/NavBar';
import ScrollToTop from './Components/ScrollToTop';
import WorkExperience from './sections/WorkExperience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Skills from "./sections/Skills";
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <WorkExperience/>
      <Education/>
      <Projects/>
      <Skills/>
      <Achievements/>
      <Contact/>
      <ScrollToTop/>
    </div>
  );
}

export default App;