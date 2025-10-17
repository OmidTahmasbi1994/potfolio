import { Navbar } from "./components/navbar"
import { About } from "./components/aboutMe"
import {Skills} from "./components/skills"
import {Education} from './components/education'

function App() {

  return (
    <div className="w-full min-h-screen bg-white px-5 max-sm:px-1">
      <Navbar/>
      <About/>
      <Skills/>
      <Education/>
    </div>
      
      
  );
}

export default App;
