import "./App.css";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Experiance from "./experiance/Experiance";
import BreakLine from "./components/BreakLine";
import Education from "./education/Education";
import Projects from "./projects/Projects";
import Volunteering from "./voulntering/Volunteering";
import Skills from "./skills/Skills";
// import IconsNavLinks from "./icons nav links/IconNavLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <BreakLine text={"Experience"} />
      <Experiance />
      <BreakLine text={"Education"} />
      <Education />
      <BreakLine text={"Projects"} />
      <Projects />
      <BreakLine text={"Volunteering"} />
      <Volunteering />
      <BreakLine text={"Skills"} />
      <Skills />
    </div>
  );
}

export default App;
