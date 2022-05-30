// import eye from './img/kakashi.png';
// import eye_1 from './img/kakashi1.png';
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/index";
import  Character  from "./components/Character";
import  Home  from "./components/Home";
import naruto from './img/naruto.png'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={naruto} alt="naruto" />
          <Navigation />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/character" element={<Character />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
