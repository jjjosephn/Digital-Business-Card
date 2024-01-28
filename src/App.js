import logo from './logo.svg';
import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <div className="app-container-2">
        <About />
        <div className="app-container-3">
          <Info />
          <Interests />
        </div>
        <Footer />
        
      </div>
    </div>
  );
}

