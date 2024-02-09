import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"
import './App.css';

export default function App() {
  return (
    <div>
      <title>Sickards</title>
      <div className="app-container">
        <div className="app-container-2">
          <About />
          <div className="app-container-3">
            <Info />
            <Interests />
          </div>
        </div>
      </div>
    </div>
  );
}

