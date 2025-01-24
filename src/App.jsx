import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
//import { Skills } from "./components/Skills";
//import { Projects } from "./components/Projects";
import { Projects } from './components/Projects';
import { Footer } from "./components/Footer";
import RobotHeadCanvas from "./components/RobotHead"; // The RobotHead component
import { Skills } from "./components/Skills"; // Import Skills



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
