import { Navbar } from "./components/navbar";
import { About } from "./components/aboutMe";
import {Skills} from './components/skills'

function App() {

  return (
    <div className="w-full min-h-screen bg-white px-5 py-6 max-sm:px-1">
      <Navbar />
      <About/>
      <Skills/>
    </div>
      
      
  );
}

export default App;
